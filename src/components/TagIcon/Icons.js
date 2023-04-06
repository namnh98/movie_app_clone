import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Icons = (props) => {
  const { StatusIc } = props;
  const renderIcon = () => {
    switch (StatusIc) {
      case "Available":
        return (
          <View style={[styles.container, { backgroundColor: "#1F293D" }]} />
        );
      case "Occupied":
        return (
          <View style={[styles.container, { backgroundColor: "#1F293D" }]}>
            <Image source={require("../../assets/img/icons/Close.png")} />
          </View>
        );
      case "Chosen":
        return (
          <View style={[styles.container, { backgroundColor: "#FF8036" }]} />
        );
      default:
        return <View />;
    }
  };
  return <View>{renderIcon()}</View>;
};

export default Icons;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
