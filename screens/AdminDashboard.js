import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AdminDashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminDashboard}>
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
      <View style={styles.gaurdyLogoRemovebgPreview2} />
      <Image
        style={[styles.arrowarrowLeftIcon, styles.arrowarrowLeftIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowarrowleft.png")}
      />
      <Pressable
        style={[styles.buttonsParent, styles.buttonsParentFlexBox]}
        onPress={() => navigation.navigate("AdminVoiceComplaint")}
      >
        <Pressable
          style={[styles.buttonsShadowBox, styles.buttonsLayout]}
          onPress={() => navigation.navigate("AdminComplaint")}
        >
          <Image
            style={styles.teenyIconArrowRight}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <View style={styles.simpleIconspumaParent}>
            <View style={[styles.simpleIconspuma, styles.simpleIconLayout]} />
            <Text style={styles.writeAComplaint}>
              <Text style={styles.writeA}>{`Write a `}</Text>
              <Text style={styles.complaint}>Complaint</Text>
            </Text>
          </View>
          <Image
            style={[
              styles.iconsaxboldtextaligncenter,
              styles.arrowarrowLeftIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldtextaligncenter.png")}
          />
        </Pressable>
        <View style={[styles.buttonsLayout, styles.ml31]}>
          <Text style={[styles.voiceComplaint, styles.reportOffenseTypo]}>
            <Text style={styles.writeA}>{` voice `}</Text>
            <Text style={styles.complaint}>Complaint</Text>
          </Text>
          <Image
            style={[
              styles.iconsaxboldtextaligncenter,
              styles.arrowarrowLeftIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldvoicecricle.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttons2, styles.buttonsShadowBox, styles.buttonsLayout]}
        onPress={() => navigation.navigate("AdminVedioComplaint")}
      >
        <Image
          style={[
            styles.simpleIconsnike,
            styles.simplePosition,
            styles.simpleIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/simpleiconsnike.png")}
        />
        <Text style={[styles.voiceComplaint, styles.reportOffenseTypo]}>
          <Text style={styles.writeA}>{`Video `}</Text>
          <Text style={styles.complaint}>Complaint</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buttonsWrapper, styles.buttonsParentFlexBox]}
        onPress={() => navigation.navigate("AdminReportOffense")}
      >
        <View style={[styles.buttons3, styles.buttonsShadowBox]}>
          <Image
            style={styles.teenyIconArrowRight}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Text style={[styles.reportOffense, styles.reportOffenseTypo]}>
            <Text style={styles.writeA}>Report</Text>
            <Text style={styles.complaint}> Offense</Text>
          </Text>
          <Image
            style={[styles.simpleIconsunderarmour, styles.simplePosition]}
            resizeMode="cover"
            source={require("../assets/simpleiconsunderarmour.png")}
          />
        </View>
      </Pressable>
      <Text style={styles.heyWelcomeBackAdmin}>Hey !! Welcome back admin</Text>
      <View style={styles.bottomNavigation}>
        <View
          style={[styles.vuesaxboldhome2Parent, styles.buttonsParentFlexBox]}
        >
          <Image
            style={styles.simpleIconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxboldhome2.png")}
          />
          <Image
            style={[styles.simpleIconLayout, styles.ml60]}
            resizeMode="cover"
            source={require("../assets/vuesaxboldcup.png")}
          />
          <Image
            style={[styles.simpleIconLayout, styles.ml60]}
            resizeMode="cover"
            source={require("../assets/vuesaxboldshoppingbag.png")}
          />
          <Image
            style={[
              styles.vuesaxbolduserIcon,
              styles.ml60,
              styles.simpleIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxbolduser.png")}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.vuesaxlinearsmsNotification,
          styles.arrowarrowLeftIconLayout,
        ]}
        onPress={() => navigation.navigate("AdminNotification")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsmsnotification.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml31: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml60: {
    marginLeft: GlobalStyles.Margin.margin_xl,
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
  arrowarrowLeftIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  buttonsParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonsLayout: {
    backgroundColor: GlobalStyles.Color.indigo_100,
    height: 74,
    width: 74,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  simpleIconLayout: {
    height: 32,
    width: 32,
  },
  reportOffenseTypo: {
    top: 37,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  buttonsShadowBox: {
    height: 74,
    width: 74,
    borderRadius: GlobalStyles.Border.br_xs,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(28, 37, 44, 0.05)",
    overflow: "hidden",
  },
  simplePosition: {
    left: 21,
    position: "absolute",
    overflow: "hidden",
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
    left: 0,
    top: 0,
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
  arrowarrowLeftIcon: {
    top: 56,
    left: 14,
    overflow: "hidden",
  },
  teenyIconArrowRight: {
    top: 21,
    left: 221,
    width: 23,
    height: 23,
    display: "none",
    position: "absolute",
  },
  simpleIconspuma: {
    left: 20,
    top: 0,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  writeA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  complaint: {
    margin: GlobalStyles.Margin.margin_3xs,
  },
  writeAComplaint: {
    top: 24,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_3xs,
    width: 73,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  simpleIconspumaParent: {
    height: 52,
    width: 73,
    left: 1,
    top: 13,
    position: "absolute",
  },
  iconsaxboldtextaligncenter: {
    left: 25,
    top: 13,
    overflow: "hidden",
  },
  voiceComplaint: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_3xs,
    top: 37,
    width: 73,
    left: 1,
  },
  buttonsParent: {
    top: 206,
    left: -12,
    paddingLeft: 109,
  },
  simpleIconsnike: {
    top: 10,
  },
  buttons2: {
    top: 316,
    left: 200,
    position: "absolute",
  },
  reportOffense: {
    left: 3,
    fontSize: GlobalStyles.FontSize.size_4xs,
    lineHeight: 12,
    width: 71,
  },
  simpleIconsunderarmour: {
    width: 31,
    height: 31,
    top: 13,
  },
  buttons3: {
    backgroundColor: "rgba(69, 73, 170, 0.4)",
    height: 74,
    width: 74,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  buttonsWrapper: {
    top: 318,
    left: 97,
  },
  heyWelcomeBackAdmin: {
    marginTop: -345,
    left: 53,
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    fontFamily: GlobalStyles.FontFamily.pontanoSans,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 241,
    height: 17,
    color: GlobalStyles.Color.sUNRISEWhite1,
    top: "50%",
    position: "absolute",
  },
  vuesaxbolduserIcon: {
    display: "none",
  },
  vuesaxboldhome2Parent: {
    top: 16,
    left: 41,
  },
  bottomNavigation: {
    top: 701,
    left: 35,
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    width: 305,
    height: 64,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(28, 37, 44, 0.05)",
    position: "absolute",
  },
  vuesaxlinearsmsNotification: {
    top: 61,
    right: 23,
  },
  adminDashboard: {
    backgroundColor: GlobalStyles.Color.gray_600,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminDashboard;
