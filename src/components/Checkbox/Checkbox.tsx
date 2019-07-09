import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { ThemeType } from "@utils/styles/ThemeContext";
import useStyles from "@utils/styles/useStyles";
import Check from "../Check";

type CheckBoxProps = {
  touchableTestID?: string
  labelTestID?: string;
  checked: boolean;
  label: string;
  onPress(event: GestureResponderEvent): void;
  disabled?: boolean
}

const CheckBox = (props: CheckBoxProps) => {
  const styles = useStyles(classes, props);

  return (
    <TouchableOpacity
      testID={props.touchableTestID}
      style={styles.buttonContainer}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Check checked={props.checked} />
      <Text style={styles.label} testID={props.labelTestID}>
        {props.label}
      </Text>
    </TouchableOpacity>
  )
};

CheckBox.defaultProps = {
  disabled: false
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
