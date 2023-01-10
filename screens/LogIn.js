import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <View style={[styles.bars1StatusBarIphone, styles.rememberMePosition]}>
        <View
          style={[
            styles.background,
            styles.deviderPosition1,
            styles.iconLayout1,
            styles.backgroundPosition,
          ]}
        />
        <Image
          style={[styles.batteryIcon, styles.iconPosition1]}
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
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.gaurdyLogoRemovebgPreview2Icon}
        resizeMode="cover"
        source={require("../assets/gaurdy-logoremovebgpreview-2.png")}
      />
      <View style={styles.socialMediaButtons}>
        <View style={[styles.devider, styles.deviderPosition1]}>
          <Text
            style={[
              styles.orContinueWith,
              styles.copyTypo,
              styles.copyTypo1,
              styles.deviderPosition1,
            ]}
          >
            Or continue with
          </Text>
          <View style={[styles.deviderChild, styles.deviderPosition]} />
          <View style={[styles.deviderItem, styles.deviderPosition]} />
        </View>
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/google.png")}
        />
        <View style={[styles.twitter, styles.twitterPosition]}>
          <View
            style={[
              styles.twitterChild,
              styles.twitterChildShadowBox,
              styles.twitterChildShadowBox1,
            ]}
          />
          <Image
            style={[styles.frameIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={[styles.facebook, styles.twitterPosition]}>
          <View
            style={[
              styles.twitterChild,
              styles.twitterChildShadowBox,
              styles.twitterChildShadowBox1,
            ]}
          />
          <Image
            style={[styles.facebookLogoIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/facebooklogo.png")}
          />
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={[styles.emailFormField, styles.formLayout]}>
          <Text style={[styles.anja, styles.anjaPosition]}>Dani@gmail.com</Text>
        </View>
        <View
          style={[
            styles.passwordFormField,
            styles.mt12,
            styles.formLayout,
            styles.twitterChildShadowBox,
            styles.twitterChildShadowBox1,
          ]}
        >
          <Text style={[styles.anja1, styles.anjaPosition]}>Password</Text>
          <Image
            style={[styles.teenyIconEyeClosed, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--eyeclosed1.png")}
          />
        </View>
        <View style={[styles.forgotPassword, styles.mt12]}>
          <Pressable
            style={styles.forgotPassword1}
            onPress={() => navigation.navigate("PasswordReset")}
          >
            <Text
              style={[
                styles.forgotPassword2,
                styles.headlineTypo,
                styles.rememberMe1Typo,
              ]}
            >
              Forgot Password ?
            </Text>
          </Pressable>
          <View style={[styles.rememberMeFlexBox, styles.rememberMePosition]}>
            <Image
              style={styles.checkboxIcon}
              resizeMode="cover"
              source={require("../assets/checkbox.png")}
            />
            <Text
              style={[
                styles.rememberMe1,
                styles.ml12,
                styles.headlineTypo,
                styles.rememberMe1Typo,
              ]}
            >{`Remember Me `}</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[
          styles.loginButtons,
          styles.rememberMeFlexBox,
          styles.formLayout,
          styles.twitterChildShadowBox,
        ]}
        onPress={() => navigation.navigate("TermsAndCondition")}
      >
        <Text style={[styles.copy, styles.copyTypo, styles.copyTypo1]}>
          Log In
        </Text>
      </Pressable>
      <Pressable
        style={[styles.headline, styles.headlineTypo, styles.copyTypo]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.newUser}>{`New User? `}</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={styles.arrowarrowLeft}
        onPress={() => navigation.navigate("GetStarted")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={styles.iconPersonDone}
        onPress={() => navigation.navigate("AdminLogIn")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-person-done.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
  rememberMePosition: {
    left: 0,
    top: 0,
  },
  deviderPosition1: {
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconPosition1: {
    top: "50%",
    position: "absolute",
  },
  copyTypo: {
    fontFamily: GlobalStyles.FontFamily.b,
    textAlign: "center",
  },
  copyTypo1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.b,
  },
  deviderPosition: {
    backgroundColor: GlobalStyles.Color.gold_100,
    bottom: "40%",
    top: "53.33%",
    width: "24.46%",
    height: "6.67%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  twitterPosition: {
    top: "28%",
    width: "30.04%",
    height: "72%",
    bottom: "0%",
    position: "absolute",
  },
  twitterChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  twitterChildShadowBox1: {
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
  },
  iconPosition: {
    width: 32,
    marginLeft: -16.17,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  formLayout: {
    height: 56,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  anjaPosition: {
    height: 54,
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.mP_size,
    left: 16,
    marginTop: -27,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.mP,
    top: "50%",
    position: "absolute",
  },
  headlineTypo: {
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.mP_size,
    fontWeight: "700",
  },
  rememberMe1Typo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.mP,
    lineHeight: 18,
  },
  rememberMeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -66.5,
    bottom: 9,
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.devider,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "4.19%",
    top: "95.81%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  background: {
    left: "0%",
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
    width: 54,
    textAlign: "center",
    color: GlobalStyles.Color.sUNRISEWhite1,
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
    width: 375,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  gaurdyLogoRemovebgPreview2Icon: {
    top: 44,
    left: 5,
    width: 370,
    height: 236,
    position: "absolute",
  },
  orContinueWith: {
    width: "37%",
    left: "31.19%",
    fontSize: GlobalStyles.FontSize.mT_size,
    lineHeight: 15,
    color: GlobalStyles.Color.gold_100,
  },
  deviderChild: {
    right: "75.54%",
    left: "0%",
  },
  deviderItem: {
    left: "75.54%",
    right: "0%",
  },
  devider: {
    height: "15%",
    width: "99.9%",
    right: "0.1%",
    bottom: "85%",
    left: "0%",
  },
  googleIcon: {
    height: "96%",
    width: "37.37%",
    top: "20%",
    right: "66.29%",
    bottom: "-16%",
    left: "-3.67%",
    position: "absolute",
  },
  twitterChild: {
    borderRadius: GlobalStyles.Border.br_xs,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameIcon: {
    marginTop: -13,
    height: 26,
  },
  twitter: {
    left: "69.96%",
    right: "0%",
  },
  facebookLogoIcon: {
    marginTop: -16,
    height: 32,
  },
  facebook: {
    right: "35.13%",
    left: "34.83%",
  },
  socialMediaButtons: {
    top: 631,
    left: 29,
    height: 100,
    width: 327,
    position: "absolute",
  },
  anja: {
    width: 214,
    color: GlobalStyles.Color.sUNRISEWhite1,
  },
  emailFormField: {
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    height: 56,
    width: 327,
  },
  anja1: {
    color: GlobalStyles.Color.unselected,
    width: 246,
  },
  teenyIconEyeClosed: {
    marginTop: -10,
    right: 16,
    width: 20,
    height: 20,
  },
  passwordFormField: {
    width: 327,
  },
  forgotPassword2: {
    color: "#adb01b",
  },
  forgotPassword1: {
    left: "65.05%",
    top: "12.5%",
    position: "absolute",
  },
  checkboxIcon: {
    borderRadius: 4,
    width: 48,
    height: 48,
  },
  rememberMe1: {
    width: 94,
    color: GlobalStyles.Color.sUNRISEWhite1,
  },
  forgotPassword: {
    width: 329,
    height: 24,
  },
  inputs: {
    top: 306,
    left: 26,
    position: "absolute",
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
  },
  loginButtons: {
    top: 552,
    left: 24,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 326,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    height: 56,
    backgroundColor: GlobalStyles.Color.gold_100,
    overflow: "hidden",
  },
  newUser: {
    color: GlobalStyles.Color.sUNRISEWhite1,
  },
  signUp: {
    color: GlobalStyles.Color.gold_100,
  },
  headline: {
    height: "2.22%",
    width: "66.39%",
    top: "92.86%",
    left: "16.8%",
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
  iconPersonDone: {
    left: "83.2%",
    top: "6.28%",
    right: "5.07%",
    bottom: "89.29%",
    width: "11.73%",
    height: "4.43%",
    position: "absolute",
  },
  logIn: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn;
