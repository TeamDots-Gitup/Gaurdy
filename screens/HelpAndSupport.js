import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const HelpAndSupport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpAndSupport}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable
        style={styles.arrowarrowLeft}
        onPress={() => navigation.navigate("UserDashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <View
        style={[
          styles.iconsaxlinearmessagequestionParent,
          styles.loginButtonsShadowBox,
        ]}
      >
        <Image
          style={styles.iconsaxlinearmessagequestion}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearmessagequestion.png")}
        />
        <View style={styles.headlineWrapper}>
          <Text
            style={[styles.headline, styles.headlineFlexBox, styles.copyTypo]}
          >
            Help and support
          </Text>
        </View>
      </View>
      <View style={styles.bars1StatusBarIphone}>
        <View
          style={[
            styles.background,
            styles.iconLayout,
            styles.backgroundPosition,
          ]}
        />
        <Image
          style={[styles.batteryIcon, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
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
      <View
        style={[
          styles.loginButtons,
          styles.headlineFlexBox,
          styles.loginButtonsShadowBox,
        ]}
      >
        <Text style={[styles.copy, styles.copyTypo]}>
          <Text style={styles.clickTheBelow}>Click the below button</Text>
          <Text style={styles.askAnyQuestion}> ask any question</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  loginButtonsShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  headlineFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  copyTypo: {
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    textAlign: "center",
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
    backgroundColor: GlobalStyles.Color.gray_1000,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "4.19%",
    top: "95.81%",
    width: "100%",
  },
  icon: {
    overflow: "hidden",
  },
  arrowarrowLeft: {
    left: 16,
    top: 56,
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconsaxlinearmessagequestion: {
    top: 341,
    left: 95,
    width: 122,
    height: 118,
    position: "absolute",
    overflow: "hidden",
  },
  headline: {
    fontSize: GlobalStyles.FontSize.h4_size,
    letterSpacing: 1,
    lineHeight: 25,
    color: GlobalStyles.Color.gold_100,
    display: "flex",
    width: 274,
    textAlign: "center",
  },
  headlineWrapper: {
    top: 55,
    left: 21,
    alignItems: "center",
    position: "absolute",
  },
  iconsaxlinearmessagequestionParent: {
    top: 118,
    left: 32,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    width: 311,
    height: 647,
  },
  background: {
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
    width: 375,
    height: 44,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  clickTheBelow: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  askAnyQuestion: {
    margin: GlobalStyles.Margin.margin_3xs,
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  loginButtons: {
    top: 285,
    left: 70,
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 235,
    height: 56,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    overflow: "hidden",
  },
  helpAndSupport: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HelpAndSupport;
