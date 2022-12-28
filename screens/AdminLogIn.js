import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AdminLogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminLogIn}>
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
          style={[styles.batteryIcon, styles.iconPosition]}
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
      <View style={styles.inputs}>
        <View style={styles.emailFormField}>
          <Text style={[styles.anja, styles.anjaPosition]}>Admin iD</Text>
        </View>
        <View
          style={[
            styles.passwordFormField,
            styles.mt12,
            styles.loginButtonsShadowBox,
          ]}
        >
          <Text style={[styles.anja1, styles.anjaPosition]}>Password</Text>
          <Image
            style={[styles.teenyIconEyeClosed, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--eyeclosed.png")}
          />
        </View>
      </View>
      <View style={[styles.loginButtons, styles.loginButtonsShadowBox]}>
        <Text style={[styles.copy, styles.copyTypo]}>Log In as Admin</Text>
      </View>
      <Pressable
        style={styles.arrowarrowLeft}
        onPress={() => navigation.navigate("GetStarted")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.adminLogIn1, styles.copyTypo]}>Admin Log In</Text>
    </View>
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
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  anjaPosition: {
    height: 54,
    display: "flex",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.mP,
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.mP_size,
    left: 16,
    marginTop: -27,
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  loginButtonsShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 56,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  copyTypo: {
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
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
    top: 0,
    width: 375,
    height: 44,
    left: 0,
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
  anja: {
    color: "#ada5a5",
    width: 214,
  },
  emailFormField: {
    height: 56,
    borderRadius: GlobalStyles.Border.br_xs,
    width: 327,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
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
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 327,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
  },
  inputs: {
    top: 422,
    left: 26,
    position: "absolute",
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
  },
  loginButtons: {
    top: 635,
    left: 29,
    backgroundColor: "#ccbd36",
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 326,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    overflow: "hidden",
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
  adminLogIn1: {
    top: 308,
    left: 58,
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 25,
    width: 244,
    height: 42,
    color: GlobalStyles.Color.sUNRISEWhite1,
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    position: "absolute",
  },
  adminLogIn: {
    backgroundColor: GlobalStyles.Color.gray_600,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminLogIn;
