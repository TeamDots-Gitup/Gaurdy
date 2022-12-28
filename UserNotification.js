import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const UserNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userNotification}>
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
      <View style={[styles.userNotificationInner, styles.frameParentPosition]}>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.headlineParent}>
            <Text style={[styles.headline, styles.bodyFlexBox]}>
              Notifications
            </Text>
            <Text style={[styles.body, styles.mt12, styles.bodyFlexBox]}>
              You have notifications
            </Text>
          </View>
          <View style={[styles.frameChild, styles.mt127]} />
          <View style={[styles.frameItem, styles.mt127]} />
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
  bodyFlexBox: {
    justifyContent: "center",
    display: "flex",
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: "center",
    alignItems: "center",
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
    color: GlobalStyles.Color.gold_100,
    width: 260,
    height: 23,
  },
  body: {
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    width: 246,
    height: 105,
  },
  headlineParent: {
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
  userNotificationInner: {
    top: 118,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
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
    height: 11,
    width: 17,
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
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  userNotification: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserNotification;
