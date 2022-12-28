import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.getStarted}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <View style={styles.headlineParent}>
        <Text style={styles.headline}>
          <Text style={styles.headlineTxt}>
            <Text style={styles.gaurdy}>Gaurdy</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.body,
            styles.mt12,
            styles.bodyFlexBox,
            styles.bodyTypo,
          ]}
        >
          We protect you no matter what where are you are..
        </Text>
      </View>
      <View
        style={[
          styles.bars1StatusBarIphone,
          styles.bars1StatusBarIphonePosition,
        ]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <Image
          style={[styles.batteryIcon, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi4.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          resizeMode="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text, styles.textPosition]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[
          styles.gaurdyLogoRemovebgPreview1Icon,
          styles.bars1StatusBarIphonePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/gaurdy-logoremovebgpreview-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  backgroundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  bodyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTypo: {
    fontFamily: GlobalStyles.FontFamily.b,
    textAlign: "center",
    fontWeight: "700",
  },
  bars1StatusBarIphonePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.devider,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "4.19%",
    top: "95.81%",
  },
  gaurdy: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  headlineTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  headline: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: GlobalStyles.FontFamily.quicksand,
    color: GlobalStyles.Color.gold_100,
    width: 247,
    height: 23,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    alignItems: "center",
  },
  body: {
    fontSize: GlobalStyles.FontSize.mP_size,
    lineHeight: 18,
    color: GlobalStyles.Color.unselected,
    width: 234,
    display: "flex",
  },
  headlineParent: {
    top: 571,
    left: 64,
    width: 252,
    height: 97,
    alignItems: "center",
    position: "absolute",
  },
  background: {
    height: "100%",
    top: "0%",
  },
  batteryIcon: {
    marginTop: -4,
    right: 15,
    width: 25,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text: {
    marginTop: -9,
    fontSize: GlobalStyles.FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: GlobalStyles.FontFamily.sourceSansPro,
    color: GlobalStyles.Color.sUNRISEWhite1,
    width: 54,
    left: 0,
    top: "50%",
    textAlign: "center",
  },
  timeStyle: {
    height: "40.91%",
    width: "14.4%",
    top: "31.82%",
    right: "80%",
    bottom: "27.27%",
    left: "5.6%",
    position: "absolute",
    overflow: "hidden",
  },
  bars1StatusBarIphone: {
    top: 0,
    height: 44,
    overflow: "hidden",
  },
  gaurdyLogoRemovebgPreview1Icon: {
    top: 62,
    height: 500,
  },
  getStarted: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GetStarted;
