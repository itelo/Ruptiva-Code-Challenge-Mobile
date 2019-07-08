import React from "react";
import { TextInput } from "react-native";
import useStyles from "../../utils/styles/useStyles";

type InputProps = {
  value: string;
  onChangeText(text: string): void;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const styles = useStyles(classes);
  return <TextInput
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
    style={styles.input}
  />
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