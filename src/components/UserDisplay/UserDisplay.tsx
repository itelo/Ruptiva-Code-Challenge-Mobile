import React from "react";
import { View, Text } from "react-native"
import ThemeContext, { ThemeType } from "../../utils/styles/ThemeContext";
import { formatCNPJ } from "../../utils/cnpj";
import { formatCPF } from "../../utils/cpf";
import useStyles from "../../utils/styles/useStyles";

type UserDisplayProps = {
  name: string;
  document: string;
  type: "individual" | "business";
}

const UserDisplay = (props: UserDisplayProps) => {
  const theme = React.useContext(ThemeContext);
  const styles = useStyles(classes);
  return (
    <View style={styles.root}>
      <View style={styles.boxContainer}>
        <View
          style={[styles.box, {
            backgroundColor: props.type === "individual" ? theme.palette.boring.blue : theme.palette.boring.orange
          }
          ]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...theme.typography.body2 }}>
          {props.name}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...theme.typography.body2 }}>
          {
            props.type === "individual"
              ? formatCPF(props.document)
              : formatCNPJ(props.document)
          }
        </Text>
      </View>
    </View>
  )
}

const classes = {
  root: {
    flexDirection: "row" as "row",
    height: 48
  },
  box: {
    height: 16,
    width: 16,
    borderRadius: 4
  },
  boxContainer: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "center" as "center"
  },
  textContainer: {
    flex: 4,
    alignItems: "flex-start" as "flex-start",
    justifyContent: "center" as "center"
  }
};

export default UserDisplay;