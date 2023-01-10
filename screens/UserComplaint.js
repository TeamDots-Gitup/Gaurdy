import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const UserComplaint = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userComplaint}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable
        style={[styles.arrowarrowLeft, styles.arrowarrowLeftLayout]}
        onPress={() => navigation.navigate("UserDashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.frameParent, styles.frameParentShadowBox]}>
        <View style={styles.frameWrapper}>
          <View style={styles.headlineWrapper}>
            <Text style={[styles.headline, styles.copyTypo]}>
              <Text style={styles.headlineTxt}>
                <Text style={styles.writeAComplaint}>Write a Complaint</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <Image
          style={styles.iconSquare}
          resizeMode="cover"
          source={require("../assets/-icon-square.png")}
        />
        <Image
          style={[styles.iconsaxtwotonechart2, styles.arrowarrowLeftLayout]}
          resizeMode="cover"
          source={require("../assets/iconsaxtwotonechart2.png")}
        />
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
      <View style={[styles.loginButtons, styles.frameParentShadowBox]}>
        <Text style={[styles.copy, styles.copyTypo]}>Report Complaint</Text>
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
  arrowarrowLeftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frameParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
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
  },
  writeAComplaint: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  headlineTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  headline: {
    fontSize: GlobalStyles.FontSize.h4_size,
    letterSpacing: 1,
    lineHeight: 25,
    color: GlobalStyles.Color.gold_100,
    display: "flex",
    width: 260,
    height: 23,
    textAlign: "center",
    alignItems: "center",
  },
  headlineWrapper: {
    alignItems: "center",
  },
  frameWrapper: {
    top: 48,
    paddingBottom: GlobalStyles.Padding.padding_lg,
    alignItems: "center",
    left: 32,
    position: "absolute",
  },
  frameChild: {
    height: "1.9%",
    width: "5.14%",
    top: "96.41%",
    right: "47.27%",
    bottom: "1.69%",
    left: "47.59%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_100,
    position: "absolute",
  },
  iconSquare: {
    height: "84.54%",
    width: "124.44%",
    top: "7.73%",
    right: "-14.15%",
    bottom: "7.73%",
    left: "-10.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconsaxtwotonechart2: {
    top: 308,
    left: 117,
    overflow: "hidden",
  },
  frameParent: {
    top: 118,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    width: 311,
    height: 647,
    left: 32,
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
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  loginButtons: {
    top: 650,
    left: 90,
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 196,
    height: 56,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  userComplaint: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserComplaint;
