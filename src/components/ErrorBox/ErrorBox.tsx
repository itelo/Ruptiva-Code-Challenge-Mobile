import React from "react";
import {View, Text} from "react-native"
import { ThemeType } from "@utils/styles/ThemeContext";
import useStyles from "@utils/styles/useStyles";



type ErrorBoxProps = {
  message: string
}
 
const ErrorBox = (props: ErrorBoxProps) => {
  const styles = useStyles(classes);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.message}
      </Text>
    </View>
  );
}

const classes  = (theme: ThemeType) => ({
  container:{
    marginHorizontal: 48,
    paddingVertical: 4,
    paddingHorizontal: 4,
    height: 48,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    flexDirection: "row" as "row",
    backgroundColor: "#ffcdd2",
    borderColor: "#b71c1c",
    borderWidth: 2,
    borderRadius: 4
  },
  text: {
    ...theme.typography.body2,
    color: "#b71c1c",
  }
});
 
export default ErrorBox;