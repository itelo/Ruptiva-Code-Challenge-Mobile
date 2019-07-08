import React, { Children } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  GestureResponderEvent,
} from "react-native";
import ThemeContext, { ThemeType } from "@utils/styles/ThemeContext";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import useStyles from "@utils/styles/useStyles";

type BottomCardProps = {
  isOpen: boolean;
  onPress(event: GestureResponderEvent): void
  title: string;
  children: React.ReactNode;
}

const marginHorizontal = 12;
const headerHeight = 56;

const BottomCard = (props: BottomCardProps) => {
  const theme = React.useContext(ThemeContext);

  const translateX = React.useRef(new Animated.Value(marginHorizontal)).current;
  const translateY = React.useRef(new Animated.Value(theme.metrics.screenHeight - (headerHeight + getBottomSpace()))).current;
  const bottonCardWidth = React.useRef(new Animated.Value(theme.metrics.screenWidth - marginHorizontal * 2)).current;
  const borderRadius = React.useRef(new Animated.Value(8)).current;
  let isFirstTime = React.useRef(true);

  React.useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    } else {
      if (props.isOpen) {
        Animated.parallel([
          Animated.timing(translateX, {
            toValue: 0,
            duration: 400
          }),
          Animated.timing(borderRadius, {
            toValue: 0,
            duration: 400
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 400
          }),
          Animated.timing(bottonCardWidth, {
            toValue: theme.metrics.screenWidth,
            duration: 400
          }),
        ]).start();
      } else {
        Animated.parallel([
          Animated.timing(translateX, {
            toValue: marginHorizontal,
            duration: 400
          }),
          Animated.timing(borderRadius, {
            toValue: 8,
            duration: 400
          }),
          Animated.timing(translateY, {
            toValue: theme.metrics.screenHeight - (headerHeight + getBottomSpace()),
            duration: 400
          }),
          Animated.timing(bottonCardWidth, {
            toValue: theme.metrics.screenWidth - marginHorizontal * 2,
            duration: 400
          }),
        ]).start();
      }
    }
  }, [props.isOpen]);

  const styles = useStyles(classes);

  return <Animated.View style={[{
    paddingBottom: props.isOpen ? 0 : getBottomSpace(),
    width: bottonCardWidth,
    transform: [{ translateX }, { translateY }],
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius
  }, styles.root]}>
    <TouchableOpacity onPress={props.onPress} style={[{
        height: headerHeight + (props.isOpen ? getStatusBarHeight() : getBottomSpace()),
        paddingBottom: !props.isOpen ? getBottomSpace() : 0,
        paddingTop: props.isOpen ? getStatusBarHeight() : 0,
      },
      styles.headerContainer]}
    >
      <Text style={{ ...theme.typography.h6, color: "#FFF" }}>{props.title}</Text>
    </TouchableOpacity>
    {props.children}
  </Animated.View>
}


const classes = (theme: ThemeType) => ({
  root: {
    position: "absolute",
    backgroundColor: "#FFF",
    height: "100%",
    zIndex: 50
  },
  headerContainer: {
    width: "100%",
    backgroundColor: theme.palette.boring.orange,
    justifyContent: "center" as "center",
    zIndex: 100,
    borderTopLeftRadius: 8,
    padding: 12,
    borderTopRightRadius: 8
  }
});

export default BottomCard;