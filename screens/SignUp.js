import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <View style={[styles.bars1StatusBarIphone, styles.textPosition]}>
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
      <Pressable
        style={[styles.loginButtons, styles.anjaFlexBox]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.copy}>Sign Up</Text>
      </Pressable>
      <View
        style={[
          styles.passwordFormField,
          styles.passwordShadowBox,
          styles.passwordShadowBox1,
        ]}
      >
        <Text style={[styles.anja, styles.anjaFlexBox]}>Confirm Password</Text>
        <Image
          style={styles.teenyIconEyeClosed}
          resizeMode="cover"
          source={require("../assets/teeny-icon--eyeclosed2.png")}
        />
      </View>
      <View
        style={[
          styles.passwordFormField1,
          styles.passwordShadowBox,
          styles.passwordShadowBox1,
        ]}
      >
        <Text style={[styles.anja, styles.anjaFlexBox]}>Password</Text>
        <Image
          style={styles.teenyIconEyeClosed}
          resizeMode="cover"
          source={require("../assets/teeny-icon--eyeclosed2.png")}
        />
      </View>
      <View
        style={[
          styles.passwordFormField2,
          styles.passwordShadowBox,
          styles.passwordShadowBox1,
        ]}
      >
        <Text style={[styles.anja, styles.anjaFlexBox]}>Email</Text>
        <Image
          style={styles.teenyIconEyeClosed}
          resizeMode="cover"
          source={require("../assets/teeny-icon--eyeclosed2.png")}
        />
      </View>
      <View style={[styles.passwordFormField3, styles.passwordShadowBox]}>
        <Text style={[styles.anja, styles.anjaFlexBox]}>Name</Text>
        <Image
          style={styles.teenyIconEyeClosed}
          resizeMode="cover"
          source={require("../assets/teeny-icon--eyeclosed2.png")}
        />
      </View>
      <Image
        style={styles.gaurdyLogoRemovebgPreview2Icon}
        resizeMode="cover"
        source={require("../assets/gaurdy-logoremovebgpreview-2.png")}
      />
      <Pressable
        style={styles.arrowarrowLeft}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
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
  textPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  anjaFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  passwordShadowBox: {
    width: 327,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    height: 56,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    borderRadius: GlobalStyles.Border.br_xs,
    position: "absolute",
  },
  passwordShadowBox1: {
    left: 21,
    width: 327,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
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
    overflow: "hidden",
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.b,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  loginButtons: {
    top: 696,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 326,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    height: 56,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    borderRadius: GlobalStyles.Border.br_xs,
    alignItems: "center",
    left: 21,
    overflow: "hidden",
  },
  anja: {
    marginTop: -27,
    left: 16,
    fontSize: GlobalStyles.FontSize.mP_size,
    lineHeight: 20,
    fontFamily: GlobalStyles.FontFamily.mP,
    color: GlobalStyles.Color.unselected,
    textAlign: "left",
    display: "flex",
    width: 246,
    height: 54,
    top: "50%",
  },
  teenyIconEyeClosed: {
    marginTop: -10,
    right: 16,
    width: 20,
    height: 20,
    top: "50%",
    position: "absolute",
  },
  passwordFormField: {
    top: 569,
  },
  passwordFormField1: {
    top: 478,
  },
  passwordFormField2: {
    top: 387,
  },
  passwordFormField3: {
    top: 293,
    left: 20,
  },
  gaurdyLogoRemovebgPreview2Icon: {
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
    left: 13,
    top: 56,
    width: 24,
    height: 24,
    position: "absolute",
  },
  signUp: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
