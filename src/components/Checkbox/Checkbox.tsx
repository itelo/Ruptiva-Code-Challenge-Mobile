import React from "react";
import { View, TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { ThemeType } from "../../utils/styles/ThemeContext";
import useStyles from "../../utils/styles/useStyles";
import Check from "../Check";

type CheckBoxProps = {
  checked: boolean;
  label: string;
  onPress(event: GestureResponderEvent): void;
}

const CheckBox = (props: CheckBoxProps) => {
  const styles = useStyles(classes, props);

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Check checked={props.checked} />
      <Text style={styles.label}>
        {props.label}
      </Text>
    </TouchableOpacity>
  )
};

const classes = (theme: ThemeType, props: CheckBoxProps) => ({
  buttonContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center"
  },
  label: {
    marginLeft: 8,
    ...theme.typography.body2,
  }
})

export default CheckBox;
