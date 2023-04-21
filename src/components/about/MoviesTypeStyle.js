import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingTop:20
  },
  line: {
    width:'100%',
    flexDirection: "row",
    paddingVertical:'1%'
  },
  setWidth: {
    width: "40%",
  },
  fontKey: {
    color: "rgba(99, 115, 148, 1)",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26,
  },
  fontValue: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
  },
  iconValue: {
    width: 38,
    height: 26,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(109, 158, 255, 0.5)",
  },
});
export default styles;
