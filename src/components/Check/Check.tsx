import React from "react";
import { View } from "react-native";
import { ThemeType } from "../../utils/styles/ThemeContext";
import useStyles from "../../utils/styles/useStyles";

type CheckProps = {
 checked: boolean;
}

const Check = (props: CheckProps) => {
  const styles = useStyles(classes, props);
  return (
  <View style={styles.border}>
    <View style={styles.innerCircle} />
  </View>
  )
};

const classes = (theme: ThemeType, props: CheckProps) => ({
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
    borderRadius: 10,
    backgroundColor: props.checked ? theme.palette.boring.blue : "#FFF"
  }
})

export default Check;
