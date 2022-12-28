import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const EmergencySupport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emergencySupport}>
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
      <View style={[styles.frameParent, styles.frameParentShadowBox]}>
        <View style={styles.frameGroup}>
          <View style={styles.headlineWrapper}>
            <Text style={styles.headline}>
              <Text style={styles.headlineTxt}>
                <Text style={styles.emergency}>Emergency</Text>
                <Text style={styles.emergency}> Support</Text>
              </Text>
            </Text>
          </View>
          <Image
            style={[styles.iconsaxlinearcalloutgoing, styles.mt52]}
            resizeMode="cover"
            source={require("../assets/iconsaxlinearcalloutgoing.png")}
          />
        </View>
        <View style={styles.frameChild} />
      </View>
      <Pressable
        style={[styles.loginButtons, styles.frameParentShadowBox]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.copy, styles.copyTypo]}>
          Tap the call icon to make a emergency call even without calling
          ballance
        </Text>
      </Pressable>
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
          <Text style={[styles.text, styles.textPosition, styles.copyTypo]}>
            9:41
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt52: {
    marginTop: 52,
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
  frameParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  copyTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
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
  emergency: {
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
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    alignItems: "center",
  },
  headlineWrapper: {
    alignItems: "center",
  },
  iconsaxlinearcalloutgoing: {
    width: 103,
    height: 87,
    overflow: "hidden",
  },
  frameGroup: {
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
  frameParent: {
    top: 118,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    width: 311,
    height: 319,
    left: 32,
  },
  copy: {
    lineHeight: 18,
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_sm,
    flex: 1,
  },
  loginButtons: {
    top: 608,
    left: 28,
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 327,
    height: 84,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: GlobalStyles.FontFamily.sourceSansPro,
    color: GlobalStyles.Color.sUNRISEWhite1,
    width: 54,
    left: 0,
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
  emergencySupport: {
    backgroundColor: GlobalStyles.Color.gray_700,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default EmergencySupport;
