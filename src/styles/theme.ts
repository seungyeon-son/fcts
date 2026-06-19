export const theme = {
  colors: {
    accent: "#FF3229",
    accentHover: "#E02820",
    black: "#0D0D0D",
    white: "#FFFFFF",
    gray100: "#F7F7F7",
    gray200: "#EEEEEE",
    gray300: "#DDDDDD",
    gray500: "#999999",
    gray600: "#666666",
    gray700: "#444444",
    green: "#22C55E",
  },
  fonts: {
    sans: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  container: {
    maxWidth: "1280px",
    padding: "0 24px",
  },
};

export type Theme = typeof theme;
