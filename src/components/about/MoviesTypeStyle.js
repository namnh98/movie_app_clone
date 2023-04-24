import { StyleSheet } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "column",
    paddingTop:scale(20),
    paddingRight:scale(20)
  },
  line: {
    width:'100%',
    flexDirection: "row",
    paddingVertical:scale(2)
  },
  setWidth: {
    width: "40%",
  },
  fontKey: {
    color: "rgba(99, 115, 148, 1)",
    fontSize: fontScale(16),
    fontWeight: "400",
    lineHeight: scale(26),
  },
  fontValue: {
    color: "white",
    fontSize: fontScale(16),
    fontWeight: "500",
    lineHeight: scale(26),
  },
  iconValue: {
    width: scale(38),
    height: scale(26),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(109, 158, 255, 0.5)",
  },
});
export default styles;
