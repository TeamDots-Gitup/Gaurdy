import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ContactUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactUs}>
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
      <View style={styles.frameParent}>
        <View style={styles.headlineWrapper}>
          <Text style={styles.headline}>Contact Us</Text>
        </View>
        <View style={[styles.loginButtons, styles.loginShadowBox]}>
          <Text style={styles.copy}>
            <Text style={styles.clickToContact}>Click to contact</Text>
            <Text style={styles.viaEmail}> via email</Text>
          </Text>
        </View>
        <Pressable
          style={[styles.loginButtons1, styles.loginShadowBox]}
          onPress={() => Linking.openURL("https://whas.me/IiEvIALQ3U")}
        >
          <Text style={styles.copy}>
            <Text style={styles.clickToContact}>{`Contact via `}</Text>
            <Text style={styles.viaEmail}>Whatsapp</Text>
          </Text>
        </Pressable>
        <View style={[styles.loginButtons2, styles.loginShadowBox]}>
          <Text style={styles.copy}>Visit Us</Text>
        </View>
        <Image
          style={styles.iievialq3u1Icon}
          resizeMode="cover"
          source={require("../assets/iievialq3u-1.png")}
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
  loginShadowBox: {
    paddingVertical: GlobalStyles.Padding.padding_sm,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    flexDirection: "row",
    height: 56,
    width: 235,
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    backgroundColor: GlobalStyles.Color.gold_100,
    borderRadius: GlobalStyles.Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    overflow: "hidden",
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
  headline: {
    fontSize: GlobalStyles.FontSize.h4_size,
    letterSpacing: 1,
    lineHeight: 25,
    color: GlobalStyles.Color.gold_100,
    display: "flex",
    width: 274,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    alignItems: "center",
  },
  headlineWrapper: {
    top: 55,
    left: 21,
    alignItems: "center",
    position: "absolute",
  },
  clickToContact: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  viaEmail: {
    margin: GlobalStyles.Margin.margin_3xs,
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
  },
  loginButtons: {
    top: 330,
    left: 37,
  },
  loginButtons1: {
    top: 408,
    left: 40,
  },
  loginButtons2: {
    top: 486,
    left: 43,
  },
  iievialq3u1Icon: {
    top: 96,
    left: 58,
    width: 200,
    height: 200,
    position: "absolute",
  },
  frameParent: {
    top: 118,
    left: 32,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    width: 311,
    height: 647,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
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
  contactUs: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ContactUs;
