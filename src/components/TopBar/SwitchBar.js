import { Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./SwitchBarStyle";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import About from "../../components/about/about";
import Sessions from "../about/Sessions";

const SwitchBar = (props) => {
  let [TabViewKey, setTabViewKey] = useState("fist");
  const navigation = useNavigation();
  const { data } = props
  const [routes] = useState([
    {
      key: "fist",
      title: "About",
    },
    {
      key: "second",
      title: "Sessions",
    },
  ]);
  const ButtonActive = {
    btnStyle: [styles.ButttonDefault, styles.ButtonOpacityLight],
    fontStyle: [styles.fontColorLight, styles.fontBtn],
  };
  const ButtonUnActive = {
    btnStyle: [styles.ButttonDefault, styles.ButtonOpacityDark],
    fontStyle: [styles.fontColorDark, styles.fontBtn],
  };
  const renderSwicthButtons = () => {
    const html = routes.map((e, i) => {
      return (
        <Button
          key={i}
          TypeTagChild={"Text"}
          style={
            TabViewKey === e.key
              ? ButtonActive.btnStyle
              : ButtonUnActive.btnStyle
          }
          content={e.title}
          ContentStyle={
            TabViewKey === e.key
              ? ButtonActive.fontStyle
              : ButtonUnActive.fontStyle
          }
          onPress={() =>
            TabViewKey !== e.key
              ? setTabViewKey(e.key)
              : setTabViewKey(TabViewKey)
          }
        />
      );
    });
    return html;
  };
  const RenderTabView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.container_title}>
          <Button
            TypeTagChild={"icon"}
            PatchImage={require("../../assets/img/icons/BackArrow.png")}
            style={styles.Button_ic}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>{data.l || 'err'}</Text>
        </View>
        <View style={styles.container_Btn}>{renderSwicthButtons()}</View>
      </View>
    );
  };
  return (
    <React.Fragment>
      {RenderTabView()}
      {TabViewKey === "fist" ? <About MovieInfo={data} /> : <Sessions />}
    </React.Fragment>
  );
};

export default SwitchBar;
