export const colors = {
  primary: "#FF6B35",
  primaryDark: "#E55A2B",
  secondary: "#FFD700",
  accent: "#00D4AA",
  accentDark: "#00B894",
  danger: "#FF4757",
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  gradient: {
    warmSunset: ["#FF6B35", "#FF4757", "#C44569"],
    freshGreen: ["#00D4AA", "#00B894", "#009688"],
    darkPremium: ["#1a1a2e", "#16213e", "#0f3460"],
    goldPremium: ["#FFD700", "#FFA500", "#FF6B35"],
    pinkVibrant: ["#FF6B9D", "#C44569", "#8B2252"],
  },
} as const;

export const dietSupplementTheme = {
  background: colors.gradient.warmSunset,
  hookText: colors.white,
  problemText: colors.gray[200],
  solutionAccent: colors.secondary,
  proofNumber: colors.accent,
  ctaButton: colors.primary,
  ctaText: colors.white,
} as const;
