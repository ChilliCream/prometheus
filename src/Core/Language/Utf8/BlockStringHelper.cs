using System;

namespace HotChocolate.Language
{
    internal static class BlockStringHelper
    {
        public static int CountLines(in ReadOnlySpan<byte> data)
        {
            int lines = 0;
            int position = 0;

            while (position < data.Length)
            {
                GoToNextLine(in data, ref position);
                lines++;
            }

            return lines;
        }

        public static void TrimBlockStringToken(
            in ReadOnlySpan<byte> data,
            ref Span<byte> trimmedData)
        {
            int position = 0;
            GoToNextLine(in data, ref position);

            // Remove common indentation from all lines but first.
            int? commonIndent = null;
            while (position < data.Length)
            {
                int indent = GetLeadingWhitespace(in data, ref position);
                int lineLength = indent + GoToNextLine(in data, ref position);

                if (
                    lineLength > 0 &&
                    indent <= lineLength &&
                    (commonIndent == null || indent < commonIndent)
                )
                {
                    commonIndent = indent;
                    if (commonIndent == 0)
                    {
                        break;
                    }
                }
            }

            ReadOnlySpan<byte> line;

            bool trim = commonIndent.HasValue && commonIndent.Value > 0;

            position = 0;
            line = GetNextLine(in data, ref position);
            line.CopyTo(trimmedData);
            int writePosition = line.Length;
            trimmedData[writePosition] = GraphQLConstants.NewLine;

            while (position < data.Length)
            {
                line = GetNextLine(in data, ref position);
                if (trim && line.Length > commonIndent.Value)
                {
                    line = line.Slice(commonIndent.Value);
                }

                for (int i = 0; i < line.Length; i++)
                {
                    trimmedData[++writePosition] = line[i];
                }

                int next = writePosition + 1;
                if (trimmedData.Length > next)
                {
                    trimmedData[next] = GraphQLConstants.NewLine;
                    writePosition = next;
                }
            }

            trimmedData = trimmedData.Slice(0, writePosition);

            // Remove leading blank lines.
            position = 0;
            while (position < trimmedData.Length)
            {
                line = GetNextLine(in trimmedData, ref position);
                if (line.Length == 0)
                {
                    trimmedData = trimmedData.Slice(position);
                    position = 0;
                }
                else
                {
                    break;
                }
            }

            // Remove trailing blank lines.
            position = trimmedData.Length - 1;
            while (trimmedData.Length > 0)
            {
                line = GetNextLineReverse(in trimmedData, ref position);
                if (line.Length == 0)
                {
                    trimmedData = trimmedData.Slice(0, position + 1);
                    position = trimmedData.Length - 1;
                }
                else
                {
                    break;
                }
            }
        }

        private static int GetLeadingWhitespace(
            in ReadOnlySpan<byte> chunk,
            ref int position)
        {
            int i = 0;
            while (position < chunk.Length
                && (chunk[position] == GraphQLConstants.Space
                    || chunk[position] == GraphQLConstants.Tab))
            {
                i++;
                position++;
            }
            return i;
        }

        private static ReadOnlySpan<byte> GetNextLine(
            in ReadOnlySpan<byte> data,
            ref int position)
        {
            int start = position;
            int length = GoToNextLine(in data, ref position);
            return data.Slice(start, length);
        }

        private static Span<byte> GetNextLine(
            in Span<byte> data,
            ref int position)
        {
            int start = position;
            int length = GoToNextLine(in data, ref position);
            return data.Slice(start, length);
        }

        private static Span<byte> GetNextLineReverse(
            in Span<byte> data,
            ref int position)
        {
            int length = GoToPreviousLine(in data, ref position);
            return data.Slice(position, length);
        }

        private static int GoToNextLine(
            in ReadOnlySpan<byte> data,
            ref int position)
        {
            int i = 0;
            while (position < data.Length)
            {
                if (data[position] == GraphQLConstants.NewLine)
                {
                    int next = position + 1;
                    if (next < data.Length
                        && data[next] == GraphQLConstants.Return)
                    {
                        position = next;
                    }
                    position++;
                    break;
                }
                else if (data[position] == GraphQLConstants.Return)
                {
                    int next = position + 1;
                    if (next < data.Length
                        && data[next] == GraphQLConstants.NewLine)
                    {
                        position = next;
                    }
                    position++;
                    break;
                }

                position++;
                i++;
            }
            return i;
        }

        private static int GoToNextLine(
            in Span<byte> data,
            ref int position)
        {
            int i = 0;
            while (position < data.Length)
            {
                if (data[position] == GraphQLConstants.NewLine)
                {
                    int next = position + 1;
                    if (next < data.Length
                        && data[next] == GraphQLConstants.Return)
                    {
                        position = next;
                    }
                    position++;
                    break;
                }

                if (data[position] == GraphQLConstants.Return)
                {
                    int next = position + 1;
                    if (next < data.Length
                        && data[next] == GraphQLConstants.NewLine)
                    {
                        position = next;
                    }
                    position++;
                    break;
                }
                else { }
                position++;
                i++;
            }
            return i;
        }

        private static int GoToPreviousLine(
            in Span<byte> data,
            ref int position)
        {
            int i = 0;
            while (position >= 0)
            {
                if (data[position] == GraphQLConstants.NewLine)
                {
                    int next = position - 1;
                    if (next > 0
                        && data[next] == GraphQLConstants.Return)
                    {
                        position = next;
                    }
                    position--;
                    break;
                }

                if (data[position] == GraphQLConstants.Return)
                {
                    int next = position - 1;
                    if (next > 0
                        && data[next] == GraphQLConstants.NewLine)
                    {
                        position = next;
                    }
                    position--;
                    break;
                }

                if (position == 0)
                {
                    break;
                }

                position--;
                i++;
            }
            return i;
        }
    }
}
