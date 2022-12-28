import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SearchStation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchStation}>
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
        <View style={styles.headlineWrapper}>
          <Text style={[styles.headline, styles.copyTypo]}>
            <Text style={styles.headlineTxt}>
              <Text style={styles.searchNearestPolice}>
                Search nearest police station
              </Text>
            </Text>
          </Text>
        </View>
        <Pressable
          style={[styles.loginButtons, styles.frameParentShadowBox]}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.copy, styles.copyTypo]}>Search...</Text>
        </Pressable>
        <View
          style={[
            styles.iconsaxlinearsearchnormal1,
            styles.arrowarrowLeftLayout,
          ]}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.frameChild} />
        <Image
          style={[
            styles.iconsaxlinearfirstline,
            styles.iconsaxlinearfirstlineLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearfirstline.png")}
        />
        <Image
          style={[
            styles.iconsaxlinearfirstline1,
            styles.iconsaxlinearfirstlineLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearfirstline.png")}
        />
        <Image
          style={[
            styles.iconsaxlinearfirstline2,
            styles.iconsaxlinearfirstlinePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearfirstline.png")}
        />
        <Image
          style={[
            styles.iconsaxlinearfirstline3,
            styles.iconsaxlinearfirstlinePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearfirstline.png")}
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
  iconsaxlinearfirstlineLayout: {
    height: 117,
    width: 141,
    position: "absolute",
    overflow: "hidden",
  },
  iconsaxlinearfirstlinePosition: {
    top: 418,
    height: 117,
    width: 141,
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
  },
  searchNearestPolice: {
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
    width: 287,
    textAlign: "center",
    alignItems: "center",
  },
  headlineWrapper: {
    top: 45,
    left: 12,
    alignItems: "center",
    position: "absolute",
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  loginButtons: {
    top: 144,
    left: 37,
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(28, 37, 44, 0.08)",
    shadowRadius: 23,
    elevation: 23,
    width: 237,
    height: 32,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconsaxlinearsearchnormal1: {
    top: 200,
    left: 144,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.44%",
    width: "7.4%",
    top: "31.46%",
    right: "11.41%",
    bottom: "65.1%",
    left: "81.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  iconsaxlinearfirstline: {
    top: 277,
    left: 23,
  },
  iconsaxlinearfirstline1: {
    top: 276,
    left: 164,
  },
  iconsaxlinearfirstline2: {
    left: 23,
  },
  iconsaxlinearfirstline3: {
    left: 164,
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
    height: 669,
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
  searchStation: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchStation;
