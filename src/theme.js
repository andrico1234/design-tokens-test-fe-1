import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import * as tokens from "../tokens/_variables";

export const myTheme = merge({}, defaultTheme, {
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: tokens.ColorBlueDark,
      },
    },
  },
});
