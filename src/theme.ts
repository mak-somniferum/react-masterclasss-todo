import { DefaultTheme } from "styled-components";
import { darken } from "polished";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#9c88ff",
  cardBgColor: "#1c2026",
  cardHoverBgColor: darken(0.075, "#1c2026"),
};
