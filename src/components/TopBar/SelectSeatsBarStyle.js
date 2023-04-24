import { StyleSheet } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: scale(160),
    backgroundColor: "#1F293D",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(28),
  },
  TopBarContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  TextBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    color: "white",
    fontWeight: 700,
    fontSize: fontScale(20),
  },
  SubTitle: {
    color: "rgba(99, 115, 148, 1)",
  },
  dateAndTimeBtn: {
    height: scale(64),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: scale(16),
  },
  ButtonStyle: {
    width: scale(200),
    height: scale(40),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(109, 158, 255, 0.6)",
    borderRadius: 6,
  },
  btnfont: {
    color: "white",
    fontWeight: 500,
    fontSize: fontScale(16),
    marginLeft: scale(14),
  },
});
export default styles;
