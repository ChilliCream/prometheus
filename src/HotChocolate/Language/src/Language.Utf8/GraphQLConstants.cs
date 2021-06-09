using System.Runtime.CompilerServices;

namespace HotChocolate.Language
{
    /// <summary>
    /// This class provides internal char utilities
    /// that are used to tokenize a GraphQL source text.
    /// These utilities are used by the lexer default implementation.
    /// </summary>
    internal static partial class GraphQLConstants
    {
        private static readonly bool[] _isLetterOrUnderscore =
            new bool[256];
        private static readonly bool[] _isLetterOrDigitOrUnderscore =
            new bool[256];
        private static readonly bool[] _isEscapeCharacter =
            new bool[256];
        private static readonly bool[] _isPunctuator =
            new bool[256];
        private static readonly bool[] _isDigitOrMinus =
            new bool[256];
        private static readonly bool[] _isDigit =
            new bool[256];
        private static readonly byte[] _escapeCharacters =
            new byte[256];
        private static readonly bool[] _trimComment =
            new bool[256];
        private static readonly TokenKind[] _punctuatorKind =
            new TokenKind[256];
        private static readonly bool[] _isControlCharacterNoNewLine =
            new bool[256];

        public const int StackallocThreshold = 256;

        public const byte Null = (byte)'\u0000';                    // \u0000
        public const byte StartOfHeading = (byte)'\u0001';          // \u0001
        public const byte StartOfText = (byte)'\u0002';             // \u0002
        public const byte EndOfText = (byte)'\u0003';               // \u0003
        public const byte EndOfTransmission = (byte)'\u0004';       // \u0004
        public const byte Enquiry = (byte)'\u0005';                 // \u0005
        public const byte Acknowledgement = (byte)'\u0006';         // \u0006
        public const byte Bell = (byte)'\u0007';                    // \u0007
        public const byte Backspace = (byte)'\b';                   // \u0008
        public const byte HorizontalTab = (byte)'\t';               // \u0009
        public const byte LineFeed = (byte)'\n';                    // \u0010
        public const byte VerticalTab = (byte)'\v';                 // \u0011


        public const byte Return = (byte)'\r';

        public const byte A = (byte)'a';
        public const byte Z = (byte)'z';
        public const byte Hyphen = (byte)'-';
        public const byte Underscore = (byte)'_';
        public const byte Plus = (byte)'+';
        public const byte Minus = (byte)'-';
        public const byte Backslash = (byte)'\\';
        public const byte Forwardslash = (byte)'/';
        public const byte B = (byte)'b';

        public const byte F = (byte)'f';
        public const byte Formfeed = (byte)'\f';
        public const byte N = (byte)'n';
        public const byte R = (byte)'r';
        public const byte T = (byte)'t';

        public const byte Bang = (byte)'!';
        public const byte Dollar = (byte)'$';
        public const byte Ampersand = (byte)'&';
        public const byte LeftParenthesis = (byte)'(';
        public const byte RightParenthesis = (byte)')';
        public const byte Colon = (byte)':';
        public const byte Equal = (byte)'=';
        public const byte At = (byte)'@';
        public const byte LeftBracket = (byte)'[';
        public const byte RightBracket = (byte)']';
        public const byte LeftBrace = (byte)'{';
        public const byte RightBrace = (byte)'}';
        public const byte Pipe = (byte)'|';
        public const byte Dot = (byte)'.';
        public const byte Space = (byte)' ';
        public const byte Hash = (byte)'#';

        public const byte U = (byte)'u';
        public const byte Zero = (byte)'0';
        public const byte E = (byte)'e';

        public const byte Quote = (byte)'"';
        public const byte Comma = (byte)',';

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsLetterOrDigitOrUnderscore(this byte c)
        {
            return _isLetterOrDigitOrUnderscore[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsLetterOrDigitOrUnderscore(this char c)
        {
            return _isLetterOrDigitOrUnderscore[(byte)c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsLetterOrUnderscore(this byte c)
        {
            return _isLetterOrUnderscore[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsLetterOrUnderscore(this char c)
        {
            return _isLetterOrUnderscore[(byte)c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsDigit(this byte c)
        {
            return _isDigit[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsDigitOrMinus(this byte c)
        {
            return _isDigitOrMinus[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsPunctuator(this byte c)
        {
            return _isPunctuator[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsValidEscapeCharacter(this byte c)
        {
            return _isEscapeCharacter[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static byte EscapeCharacter(this byte c)
        {
            return _escapeCharacters[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool IsControlCharacterNoNewLine(this byte c)
        {
            return _isControlCharacterNoNewLine[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool TrimComment(this byte c)
        {
            return _trimComment[c];
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static TokenKind PunctuatorKind(this byte c)
        {
            return _punctuatorKind[c];
        }
    }
}
