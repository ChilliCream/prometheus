using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace Prometheus.Language
{


    interface ILexer
    {
        Token Read(ISource source);
    }

    public class LexerState
    {
        public int Line { get; set; }
        public int LineStart { get; set; }
    }

    public static class CharExtensions
    {
        public static bool IsLetterOrDigit(this char c)
        {
            return c.IsLetter() || c.IsDigit();
        }

        public static bool IsLetter(this char c)
        {
            return (c >= 65 && c <= 90) // A-Z
                || (c >= 97 && c <= 122); // a-z
        }

        public static bool IsDigit(this char c)
        {
            return c >= 48 && c <= 57;
        }

        public static bool IsDot(this char c)
        {
            return c == '.';
        }

        public static bool IsHyphen(this char c)
        {
            return c == '-';
        }

        public static bool IsUnderscore(this char c)
        {
            return c == '_';
        }

        public static bool IsMinus(this char c)
        {
            return c.IsHyphen();
        }

        public static bool IsPlus(this char c)
        {
            return c == '+';
        }

        public static bool IsQuote(this char c)
        {
            return c == '"';
        }

        public static bool IsHash(this char c)
        {
            return c == '#';
        }
    }


    public class Lexer
        : ILexer
    {
        public Token Read(ISource source)
        {
            ILexerContext context = null;
            return CreateToken(context, null, TokenKind.StartOfFile, 0);
        }

        private Token ReadNextToken(ILexerContext context, Token previous)
        {
            SkipWhitespaces(context, previous);
            context.Column = 1 + context.Position - context.LineStart;

            if (context.IsEndOfStream())
            {
                return new Token(TokenKind.EndOfFile, context.Column,
                    previous.End, context.Line, context.Column,
                    previous, new Thunk<Token>(default(Token)));
            }

            char code = context.Read();

            if (code.IsLetter() || code.IsUnderscore())
            {
                return ReadName(context, previous);
            }

            if (code.IsDigit() || code.IsMinus())
            {
                return ReadNumber(context, previous, code);
            }

            if (code.IsQuote())
            {
            }

            if (code.IsHash())
            {

            }

            if (code.IsDot()
                && context.PeekTest(c => c.IsDot(), c => c.IsDot()))
            {

            }

            if ()

                return null;
        }



        public void SkipWhitespaces(ILexerContext context, Token previous)
        {

        }

        private Token ReadNumber(ILexerContext context, Token previous, char firstCode)
        {
            char code = firstCode;
            int start = context.Position;
            bool isFloat = false;

            if (code.IsMinus())
            {
                code = context.Read();
            }

            if (code == '0')
            {
                code = context.Read();
                if (char.IsDigit(code))
                {
                    throw new SyntaxException(context,
                        $"Invalid number, unexpected digit after 0: {code}.");
                }
            }
            else
            {
                code = ReadDigits(context, code);
            }

            if (code.IsDot())
            {
                isFloat = true;
                code = ReadDigits(context, context.Read());
            }

            if (code == 'E' || code == 'e')
            {
                isFloat = true;

                code = context.Read();
                if (code.IsPlus() || code.IsMinus())
                {
                    code = context.Read();
                }
                code = ReadDigits(context, code);
            }

            TokenKind kind = isFloat ? TokenKind.Float : TokenKind.Integer;
            return CreateToken(context, previous, kind, start,
                context.Read(start, context.Position));
        }

        private char ReadDigits(ILexerContext context, char firstCode)
        {
            if (!firstCode.IsDigit())
            {
                throw new SyntaxException(context,
                    $"Invalid number, expected digit but got: {firstCode}.");
            }

            char code = firstCode;
            while (code.IsDigit())
            {
                code = context.Read();
            }
            return code;
        }

        /**
        * Reads an alphanumeric + underscore name from the source.
        *
        * [_A-Za-z][_0-9A-Za-z]*
        */
        private Token ReadName(ILexerContext context, Token previous)
        {
            int start = context.Position;

            while (context.PeekTest(c => c.IsLetterOrDigit() || c.IsUnderscore()))
            {
                context.Read();
            }

            return CreateToken(context, previous, TokenKind.Name,
                start, context.Read(start, context.Position));
        }

        private Token CreateToken(ILexerContext context, Token previous,
            TokenKind kind, int start, string value)
        {
            NextTokenThunk next = CreateNextThunk(context);
            Token token = new Token(kind, start, context.Position,
                context.Line, context.Column, value, previous, next);
            next.SetPrevious(token);
            return token;
        }

        private Token CreateToken(ILexerContext context, Token previous,
            TokenKind kind, int start)
        {
            NextTokenThunk next = CreateNextThunk(context);
            Token token = new Token(kind, start, context.Position,
                context.Line, context.Column, previous, next);
            next.SetPrevious(token);
            return token;
        }

        private NextTokenThunk CreateNextThunk(ILexerContext context)
        {
            return new NextTokenThunk(previous => ReadNextToken(context, previous));
        }
    }


    public class LexerPort
    {
        public TokenConfig ReadNextToken(LexerState state, Source source, TokenConfig previous)
        {
            int pos = GetPositionAfterWhitespace(state, source, previous);
            int line = state.Line;
            int col = 1 + pos - state.LineStart;

            if (source.IsEndOfStream(pos))
            {
                return new TokenConfig(TokenKind.EndOfFile, pos, previous.End, line, col, previous);
            }

            int code = source.Read(pos);

            // SourceCharacter
            if (code < 0x0020 && code != 0x0009 && code != 0x000a && code != 0x000d)
            {
                throw new SyntaxException(
                  source, pos,
                  "Cannot contain the invalid character ${printCharCode(code)}.");
            }

            switch (code)
            {
                // !
                case 33:
                    return new TokenConfig(TokenKind.Bang, pos, pos + 1, line, col, previous);
                // #
                case 35:
                    return readComment(source, pos, line, col, previous);
                // $
                case 36:
                    return new TokenConfig(TokenKind.Dollar, pos, pos + 1, line, col, previous);
                // &
                case 38:
                    return new TokenConfig(TokenKind.Ampersand, pos, pos + 1, line, col, previous);
                // (
                case 40:
                    return new TokenConfig(TokenKind.LeftParenthesis, pos, pos + 1, line, col, previous);
                // )
                case 41:
                    return new TokenConfig(TokenKind.RightParenthesis, pos, pos + 1, line, col, previous);
                // .
                case 46:
                    if (source.Check(pos + 1, 46, 46))
                    {
                        return new TokenConfig(TokenKind.Spread, pos, pos + 3, line, col, previous);
                    }
                    break;
                // :
                case 58:
                    return new TokenConfig(TokenKind.Colon, pos, pos + 1, line, col, previous);
                // =
                case 61:
                    return new TokenConfig(TokenKind.Equal, pos, pos + 1, line, col, previous);
                // @
                case 64:
                    return new TokenConfig(TokenKind.At, pos, pos + 1, line, col, previous);
                // [
                case 91:
                    return new TokenConfig(TokenKind.LeftBracket, pos, pos + 1, line, col, previous);
                // ]
                case 93:
                    return new TokenConfig(TokenKind.RightBracket, pos, pos + 1, line, col, previous);
                // {
                case 123:
                    return new TokenConfig(TokenKind.LeftBrace, pos, pos + 1, line, col, previous);
                // |
                case 124:
                    return new TokenConfig(TokenKind.Pipe, pos, pos + 1, line, col, previous);
                // }
                case 125:
                    return new TokenConfig(TokenKind.RightBrace, pos, pos + 1, line, col, previous);
                // A-Z _ a-z
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 95:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    return readName(source, pos, line, col, previous);
                // - 0-9
                case 45:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return ReadNumber(source, pos, (char)code, line, col, previous);
                // "
                case 34:
                    if (source.Check(pos + 1, 34, 34))
                    {
                        return readBlockString(source, pos, line, col, previous);
                    }
                    return readString(source, pos, line, col, previous);
            }

            throw new SyntaxException(source, pos, "unexpectedCharacterMessage(code)");
        }

        /**
    * Reads from body starting at startPosition until it finds a non-whitespace
    * or commented character, then returns the position of that character for
    * lexing.
*/
        public int GetPositionAfterWhitespace(LexerState lexer, Source source, TokenConfig previous)
        {
            int position = previous.End;
            while (!source.IsEndOfStream(position))
            {
                int code = source.Read(position);
                // tab | space | comma | BOM
                if (code == 9 || code == 32 || code == 44 || code == 0xfeff)
                {
                    ++position;
                }
                else if (code == 10)
                {
                    // new line
                    ++position;
                    ++lexer.Line;
                    lexer.LineStart = position;
                }
                else if (code == 13)
                {
                    // carriage return
                    if (source.Read(position + 1) == 10)
                    {
                        position += 2;
                    }
                    else
                    {
                        ++position;
                    }
                    ++lexer.Line;
                    lexer.LineStart = position;
                }
                else
                {
                    break;
                }
            }
            return position;
        }

        /**
    * Reads a comment token from the source file.
    *
    * #[\u0009\u0020-\uFFFF]*
*/
        public TokenConfig readComment(Source source, int start, int line, int col, TokenConfig prev)
        {
            int code;
            int position = start;

            do
            {
                code = source.Read(++position);
            } while (
              code != null &&
              // SourceCharacter but not LineTerminator
              (code > 0x001f || code == 0x0009)
            );

            return new TokenConfig(
              TokenKind.Comment,
              start,
              position,
              line,
              col,
              prev,
              source.Read(start + 1, position)
            );
        }


        private TokenConfig ReadNumber(Source source, int start, char firstCode, int line, int col, TokenConfig prev)
        {
            char code = firstCode;
            int position = start;
            bool isFloat = false;

            if (code == 45)
            {
                // -
                code = source.Read(++position);
            }

            if (code == 48)
            {
                // 0
                code = source.Read(++position);
                if (code >= 48 && code <= 57)
                {
                    throw new SyntaxException(
                      source,
                      position,
                      "Invalid number, unexpected digit after 0: ${ printCharCode(code)}.`,)");
                }
            }
            else
            {
                position = ReadDigits(source, position, code);
                code = source.Read(position);
            }

            if (code == 46)
            {
                // .
                isFloat = true;

                code = source.Read(++position);
                position = ReadDigits(source, position, code);
                code = source.Read(position);
            }

            if (code == 69 || code == 101)
            {
                // E e
                isFloat = true;

                code = source.Read(++position);
                if (code == 43 || code == 45)
                {
                    // + -
                    code = source.Read(++position);
                }
                position = ReadDigits(source, position, code);
            }

            return new TokenConfig(
              isFloat ? TokenKind.Float : TokenKind.Integer,
              start,
              position,
              line,
              col,
              prev,
              source.Read(start, position));
        }

        public int ReadDigits(Source source, int start, char firstCode)
        {
            int position = start;
            char code = firstCode;

            if (code >= 48 && code <= 57)
            {
                // 0 - 9
                do
                {
                    code = source.Read(++position);
                } while (code >= 48 && code <= 57); // 0 - 9
                return position;
            }

            throw new SyntaxException(
              source,
              position,
              "Invalid number, expected digit but got: ${ printCharCode(code) }.");
        }


        /**
         * Reads a string token from the source file.
         *
         * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
         */
        public TokenConfig readString(Source source, int start, int line, int col, TokenConfig prev)
        {
            int position = start + 1;
            int chunkStart = position;
            int code = 0;
            string value = string.Empty;

            while (
              !source.IsEndOfStream(position) &&
              (code = source.Read(position)) != null &&
              // not LineTerminator
              code != 0x000a &&
              code != 0x000d
            )
            {
                // Closing Quote (")
                if (code == 34)
                {
                    value += source.Read(chunkStart, position);
                    return new TokenConfig(
                      TokenKind.String,
                      start,
                      position + 1,
                      line,
                      col,
                      prev,
                      value);
                }

                // SourceCharacter
                if (code < 0x0020 && code != 0x0009)
                {
                    throw new SyntaxException(
                      source,
                      position,
                      "Invalid character within String: ${ printCharCode(code)}.");
                }

                ++position;
                if (code == 92)
                {
                    // \
                    value += source.Read(chunkStart, position - 1);
                    code = source.Read(position);
                    switch (code)
                    {
                        case 34:
                            value += '"';
                            break;
                        case 47:
                            value += '/';
                            break;
                        case 92:
                            value += '\\';
                            break;
                        case 98:
                            value += '\b';
                            break;
                        case 102:
                            value += '\f';
                            break;
                        case 110:
                            value += '\n';
                            break;
                        case 114:
                            value += '\r';
                            break;
                        case 116:
                            value += '\t';
                            break;
                        case 117: // u
                            int charCode = uniCharCode(
                              source.Read(position + 1),
                              source.Read(position + 2),
                              source.Read(position + 3),
                              source.Read(position + 4));

                            if (charCode < 0)
                            {
                                throw new SyntaxException(
                                  source,
                                  position,
                                  "Invalid character escape sequence: " +
                                    "\\u${ body.slice(position + 1, position + 5)}.");
                            }
                            value += (char)charCode;
                            position += 4;
                            break;
                        default:
                            throw new SyntaxException(
                                  source,
                                  position,
                              "Invalid character escape sequence: \\${String.fromCharCode(code)}.");
                    }
                    ++position;
                    chunkStart = position;
                }
            }

            throw new SyntaxException(source, position, "Unterminated string.");
        }

        /**
         * Reads a block string token from the source file.
         *
         * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
         */
        public TokenConfig readBlockString(Source source, int start, int line, int col, TokenConfig prev)
        {
            int position = start + 3;
            int chunkStart = position;
            int code = 0;
            string rawValue = string.Empty;

            while (
              !source.IsEndOfStream(position)
            )
            {
                // Closing Triple-Quote (""")
                if (
                  code == 34 &&
                  source.Read(position + 1) == 34 &&
                  source.Read(position + 2) == 34
                )
                {
                    rawValue += source.Read(chunkStart, position);
                    return new TokenConfig(
                      TokenKind.BlockString,
                      start,
                      position + 3,
                      line,
                      col,
                      prev,
                      blockStringValue(rawValue)
                    );
                }

                // SourceCharacter
                if (
                  code < 0x0020 &&
                  code != 0x0009 &&
                  code != 0x000a &&
                  code != 0x000d
                )
                {
                    throw new SyntaxException(
                      source,
                      position,
                      "Invalid character within String: ${ printCharCode(code)}.");
                }

                // Escape Triple-Quote (\""")
                if (
                  code == 92 &&
                  source.Read(position + 1) == 34 &&
                  source.Read(position + 2) == 34 &&
                  source.Read(position + 3) == 34
                )
                {
                    rawValue += source.Read(chunkStart, position) + "\"\"\"";
                    position += 4;
                    chunkStart = position;
                }
                else
                {
                    ++position;
                }
            }

            throw new SyntaxException(source, position, "Unterminated string.");
        }

        /**
         * Converts four hexidecimal chars to the integer that the
         * string represents. For example, uniCharCode('0','0','0','f')
         * will return 15, and uniCharCode('0','0','f','f') returns 255.
         *
         * Returns a negative number on error, if a char was invalid.
         *
         * This is implemented by noting that char2hex() returns -1 on error,
         * which means the result of ORing the char2hex() will also be negative.
         */
        public int uniCharCode(int a, int b, int c, int d)
        {
            return (
              (char2hex(a) << 12) | (char2hex(b) << 8) | (char2hex(c) << 4) | char2hex(d)
            );
        }

        /**
         * Converts a hex character to its integer value.
         * '0' becomes 0, '9' becomes 9
         * 'A' becomes 10, 'F' becomes 15
         * 'a' becomes 10, 'f' becomes 15
         *
         * Returns -1 on error.
         */
        public int char2hex(int a)
        {
            return a >= 48 && a <= 57
              ? a - 48 // 0-9
              : a >= 65 && a <= 70
                ? a - 55 // A-F
                : a >= 97 && a <= 102
                  ? a - 87 // a-f
                  : -1;
        }

        /**
         * Reads an alphanumeric + underscore name from the source.
         *
         * [_A-Za-z][_0-9A-Za-z]*
         */
        public TokenConfig readName(Source source, int start, int line, int col, TokenConfig prev)
        {
            int position = start + 1;
            int code = 0;
            while (
              source.IsEndOfStream(position) &&
              (code = source.Read(position)) != null &&
              (code == 95 || // _
              (code >= 48 && code <= 57) || // 0-9
              (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122)) // a-z
            )
            {
                ++position;
            }
            return new TokenConfig(
              TokenKind.Name,
              start,
              position,
              line,
              col,
              prev,
              source.Read(start, position)


            );
        }

        public string blockStringValue(string rawString)
        {
            // Expand a block string's raw value into independent lines.
            string[] lines = rawString
                .Replace("\r\n", "\n")
                .Replace("\n\r", "\n")
                .Split('\n');

            // Remove common indentation from all lines but first.
            int? commonIndent = null;
            for (int i = 1; i < lines.Length; i++)
            {
                string line = lines[i];
                int indent = leadingWhitespace(line);
                if (
                  indent < line.Length &&
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

            if (commonIndent.HasValue)
            {
                for (int i = 1; i < lines.Length; i++)
                {
                    lines[i] = lines[i].Substring(commonIndent.Value);
                }
            }


            // Remove leading and trailing blank lines.
            Queue<string> shiftLines = new Queue<string>(lines);
            while (shiftLines.Any() && isBlank(shiftLines.Peek()))
            {
                shiftLines.Dequeue();
            }

            Stack<string> popLines = new Stack<string>(shiftLines);
            while (popLines.Any() && isBlank(popLines.Peek()))
            {
                popLines.Pop();
            }

            // Return a string of the lines joined with U+000A.
            return string.Join("\n", popLines);
        }

        public int leadingWhitespace(string str)
        {
            int i = 0;
            while (i < str.Length && (str[i] == ' ' || str[i] == '\t'))
            {
                i++;
            }
            return i;
        }

        public bool isBlank(string str)
        {
            return leadingWhitespace(str) == str.Length;
        }
    }


    [System.Serializable]
    public class SyntaxException : System.Exception
    {
        public SyntaxException(ILexerContext context, string message) { }
    }
}