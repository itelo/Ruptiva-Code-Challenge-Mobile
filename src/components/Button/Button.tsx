import React from "react";
import { TouchableOpacity, View, GestureResponderEvent, Text } from "react-native";
import {
  PulseIndicator,
} from 'react-native-indicators';
import { ThemeType } from "@utils/styles/ThemeContext";
import useStyles from "@utils/styles/useStyles";

type ButtonProps = {
  labelTestID?: string;
  touchableTestID?: string;
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  loadingLabel: string;
  onPress(event: GestureResponderEvent): void;
}

const Button = (props: ButtonProps) => {
  const styles = useStyles(classes)
  return (
    <TouchableOpacity
      testID={props.touchableTestID}
      disabled={props.disabled}
      style={styles.buttonRoot}
      onPress={props.onPress}
    >
      {props.isLoading ? <View style={styles.fixButtonContentWhenLoading}>
        <View>
          <PulseIndicator color='white' />
        </View>
        <Text testID={props.labelTestID} style={styles.buttonLabel}>{props.loadingLabel}</Text>
      </View> :
        <Text testID={props.labelTestID} style={styles.buttonLabel}>{props.label}</Text>}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  disabled: false,
  isLoading: false
};

const classes = (theme: ThemeType) => ({
  buttonRoot: {
    marginHorizontal: 48,
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 48,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    flexDirection: "row" as "row",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: theme.palette.boring.blue
  },
  buttonLabel: {
    ...theme.typography.button,
    color: "#FFF"
  },
  fixButtonContentWhenLoading: {
    marginLeft: -20,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    flexDirection: "row" as "row"
  }
});

export default Button;