import React from "react";
import { View } from "react-native";
import ThemeContext, { ThemeType } from "@utils/styles/ThemeContext";
import useStyles from "@utils/styles/useStyles";

type CheckProps = {
 checked: boolean;
}

const Check = (props: CheckProps) => {
  const styles = useStyles(classes);
  const theme = React.useContext(ThemeContext);
  return (
  <View style={styles.border}>
    <View style={[styles.innerCircle, 
    {backgroundColor: props.checked ? theme.palette.boring.blue : "#FFF"}]} />
  </View>
  )
};

const classes = (theme: ThemeType) => ({
  border: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: theme.palette.boring.blue,
    borderWidth: 1
  },
  innerCircle: {
    height: 14,
    width: 14,
    margin: 2,
    borderRadius: 10
  }
})

export default Check;
