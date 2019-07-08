import React from "react";
import ThemeContext, { ThemeType } from "./ThemeContext";

type Props = {
  theme: ThemeType;
  children: React.ReactChild;
};

/**
 * @function ThemeProvider
 * @param {obj} theme Created in ThemeProvider
 * @param {obj} props The props passed by the parent Component
 * @returns {obj} An object that matchs with react native styles
 */
const ThemeProvider = (props: Props) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
