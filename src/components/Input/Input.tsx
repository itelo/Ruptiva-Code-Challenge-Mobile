import React from "react";
import { TextInput } from "react-native";
import useStyles from "../../utils/styles/useStyles";

type InputProps = {
  value: string;
  onChangeText(text: string): void;
  placeholder: string;
  disabled: boolean;
}

const Input = (props: InputProps) => {
  const styles = useStyles(classes);
  return <TextInput
    editable={!props.disabled}
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
    style={styles.input}
  />
}

Input.defaultProps = {
  disabled: false
}

const classes = {
  input: {
    marginHorizontal: 48,
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 16,
    backgroundColor: "rgb(235, 235, 235)"
  }
}

export default Input;