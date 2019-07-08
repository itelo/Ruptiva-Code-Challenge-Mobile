import React, { useContext, useMemo } from "react";
import ThemeContext, { ThemeType } from "./ThemeContext";
import { StyleSheet, Alert } from "react-native";

function useStyles<Styles, PropsToGetStyle>(
  stylesCreator: (theme: ThemeType) => Styles
): Styles;
function useStyles<Styles, PropsToGetStyle>(stylesCreator: Styles): Styles;
function useStyles<Styles, PropsToGetStyle>(
  stylesCreator: (theme: ThemeType, props: PropsToGetStyle) => Styles,
  propsToGetStyle: PropsToGetStyle
): Styles;
function useStyles<Styles, PropsToGetStyle>(
  stylesCreator: Styles,
  propsToGetStyle?: PropsToGetStyle
) {
  const theme = useContext(ThemeContext);
  let keys = [] as Array<string | number>;
  if (propsToGetStyle) {
    keys = Object.keys(propsToGetStyle);
  }

  return useMemo(() => {
    if (typeof stylesCreator === "function") {
      if (propsToGetStyle) {
        return StyleSheet.create(stylesCreator(theme, propsToGetStyle));
      }
      return StyleSheet.create(stylesCreator(theme));
    } else {
      return StyleSheet.create(stylesCreator);
    }
  }, keys);
}

export default useStyles;
