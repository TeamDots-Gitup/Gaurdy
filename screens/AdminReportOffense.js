import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const AdminReportOffense = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminReportOffense}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
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
          style={styles.batteryIcon}
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
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
      <View style={styles.gaurdyLogoRemovebgPreview2} />
      <Pressable
        style={styles.arrowarrowLeft}
        onPress={() => navigation.navigate("AdminDashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.adminReportOffenseInner, styles.frameParentPosition]}
        locations={[0, 0.37]}
        colors={["rgba(219, 188, 26, 0)", "rgba(1, 33, 84, 0.91)"]}
      >
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.headlineParent}>
            <Text style={[styles.headline, styles.bodyTypo]}>
              Report offense
            </Text>
            <Text style={[styles.body, styles.mt12, styles.bodyTypo]}>
              <Text style={styles.bodyTxt}>
                <Text style={styles.youHaveNo}>You have no report offense</Text>
                <Text style={styles.admin}>admin</Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.frameChild, styles.mt127]} />
          <View style={[styles.frameItem, styles.mt127]} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt127: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
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
  frameParentPosition: {
    left: 32,
    position: "absolute",
  },
  bodyTypo: {
    display: "flex",
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    lineHeight: 25,
    alignItems: "center",
    textAlign: "center",
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
    width: "100%",
  },
  background: {
    top: "0%",
  },
  batteryIcon: {
    marginTop: -4,
    right: 15,
    width: 25,
    height: 11,
    top: "50%",
    position: "absolute",
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
    textAlign: "center",
    top: "50%",
    left: 0,
    position: "absolute",
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
  gaurdyLogoRemovebgPreview2: {
    top: 44,
    left: 5,
    width: 370,
    height: 236,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowarrowLeft: {
    left: 14,
    top: 56,
    width: 24,
    height: 24,
    position: "absolute",
  },
  headline: {
    fontSize: GlobalStyles.FontSize.h4_size,
    letterSpacing: 1,
    color: GlobalStyles.Color.gold_100,
    justifyContent: "center",
    width: 260,
    height: 23,
  },
  youHaveNo: {
    marginBlockStart: 0,
    marginBlockEnd: 1,
  },
  admin: {
    margin: GlobalStyles.Margin.margin_3xs,
  },
  bodyTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  body: {
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    width: 251,
    height: 105,
  },
  headlineParent: {
    height: 131,
    alignItems: "center",
  },
  frameChild: {
    alignItems: "center",
  },
  frameItem: {
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_100,
    height: 4,
    width: 17,
  },
  frameParent: {
    top: 48,
    paddingBottom: GlobalStyles.Padding.padding_lg,
    alignItems: "center",
  },
  adminReportOffenseInner: {
    top: 107,
    borderRadius: GlobalStyles.Border.br_lg,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 311,
    height: 474,
    backgroundColor: "transparent",
  },
  adminReportOffense: {
    backgroundColor: GlobalStyles.Color.gray_600,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminReportOffense;
