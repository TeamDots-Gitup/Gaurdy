import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const UserDashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userDashboard}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <View
        style={[styles.bars1StatusBarIphone, styles.simpleIconspumaPosition]}
      >
        <View
          style={[
            styles.background,
            styles.objectsPosition,
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
      <Pressable
        style={[styles.arrowarrowLeft, styles.arrowarrowLeftLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.trendingTodayParent, styles.iconPosition]}>
        <Text style={[styles.trendingToday, styles.trendingTodayLayout]}>
          Trending Today
        </Text>
        <Text
          style={[
            styles.heyWelcomeBack,
            styles.newRuleAlertTypo,
            styles.trendingTodayLayout,
          ]}
        >
          Hey !! Welcome back
        </Text>
        <Image
          style={[
            styles.vuesaxlineararrowSquareLefIcon,
            styles.arrowarrowLeftLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowsquareleft.png")}
        />
      </View>
      <Pressable
        style={[
          styles.vuesaxlinearsmsNotification,
          styles.arrowarrowLeftLayout,
        ]}
        onPress={() => navigation.navigate("UserNotification")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsmsnotification1.png")}
        />
      </Pressable>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={styles.frameWrapper}>
          <LinearGradient
            style={styles.groupWrapper}
            locations={[0, 0.98]}
            colors={["#3a42ff", "#f45c43"]}
          >
            <View style={styles.newRuleAlertParent}>
              <Text
                style={[
                  styles.newRuleAlert,
                  styles.newRuleAlertLayout,
                  styles.xTypo,
                  styles.newRuleAlertTypo,
                ]}
              >
                New rule alert !!
              </Text>
              <View style={[styles.objectsParent, styles.objectsPosition]}>
                <Image
                  style={[styles.objectsIcon, styles.objectsIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/objects.png")}
                />
                <Text style={[styles.x2, styles.x2Position]}>
                  <Text style={[styles.x, styles.xTypo]}>X</Text>
                  <Text style={[styles.text1, styles.textTypo]}>2</Text>
                </Text>
              </View>
              <Text
                style={[styles.governmentHasIncreasedTheS, styles.x2Position]}
              >
                Government has increased the speeding fine 2x from today
                midnight
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <LinearGradient
            style={styles.groupWrapper}
            locations={[0, 1]}
            colors={["#614385", "#516395"]}
          />
          <View style={styles.priceIncreasedParent}>
            <Text
              style={[
                styles.newRuleAlert,
                styles.newRuleAlertLayout,
                styles.xTypo,
                styles.newRuleAlertTypo,
              ]}
            >
              Price increased
            </Text>
            <View style={[styles.objectsGroup, styles.objectsPosition]}>
              <Image
                style={[styles.objectsIcon1, styles.objectsIconPosition]}
                resizeMode="cover"
                source={require("../assets/objects1.png")}
              />
              <Text
                style={[styles.text2, styles.textTypo, styles.x2Position]}
              >{`50 % `}</Text>
            </View>
            <Text
              style={[styles.governmentHasIncreasedTheS, styles.x2Position]}
            >
              Bus fair’s increased by 50% with a immediate effect from tomorrow
              onwards
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.new, styles.newTypo, styles.newPosition]}>
            New
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.ml8]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-50.png")}
          />
          <Text style={[styles.new, styles.newTypo, styles.newPosition]}>
            Men
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.ml8]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-51.png")}
          />
          <Text style={[styles.new, styles.newTypo, styles.newPosition]}>
            Women
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.ml8]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.kids, styles.newTypo, styles.newPosition]}>
            Kids
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.ml8]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-52.png")}
          />
          <Text style={[styles.new, styles.newTypo, styles.newPosition]}>
            Equip
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.ml8]}>
          <Image
            style={[styles.groupChild2, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-54.png")}
          />
          <Text style={[styles.new, styles.newTypo, styles.newPosition]}>
            Nutrition
          </Text>
        </View>
      </View>
      <View style={styles.buttonsParent}>
        <View style={styles.buttonsShadowBox1}>
          <Image
            style={[styles.teenyIconArrowRight, styles.newRuleAlertLayout]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Pressable
            style={[
              styles.simpleIconspumaParent,
              styles.voiceComplaintPosition,
              styles.simplePosition,
            ]}
            onPress={() => navigation.navigate("UserComplaint")}
          >
            <View
              style={[
                styles.simpleIconspuma,
                styles.simpleIconLayout,
                styles.simpleIconspumaPosition,
              ]}
            />
            <Text
              style={[
                styles.writeAComplaint,
                styles.newTypo,
                styles.helpAndSupportTypo,
              ]}
            >
              <Text style={styles.writeA}>{`Write a `}</Text>
              <Text style={styles.complaint}>Complaint</Text>
            </Text>
          </Pressable>
          <Image
            style={[
              styles.iconsaxboldtextaligncenter,
              styles.simplePosition,
              styles.arrowarrowLeftLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldtextaligncenter.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonsShadowBox1, styles.ml31]}
          onPress={() => navigation.navigate("UserVoiceComplaint")}
        >
          <Text
            style={[
              styles.voiceComplaint,
              styles.voiceComplaintTypo,
              styles.voiceComplaintPosition,
            ]}
          >
            <Text style={styles.writeA}>{` voice `}</Text>
            <Text style={styles.complaint}>Complaint</Text>
          </Text>
          <Image
            style={[
              styles.iconsaxboldtextaligncenter,
              styles.simplePosition,
              styles.arrowarrowLeftLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldvoicecricle.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.buttonsShadowBox1, styles.ml31]}
          onPress={() => navigation.navigate("UserVedioComplaint")}
        >
          <Image
            style={[
              styles.simpleIconsnike,
              styles.simpleIconsnikePosition,
              styles.simpleIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/simpleiconsnike1.png")}
          />
          <Text
            style={[
              styles.voiceComplaint,
              styles.voiceComplaintTypo,
              styles.voiceComplaintPosition,
            ]}
          >
            <Text style={styles.writeA}>{`Video `}</Text>
            <Text style={styles.complaint}>Complaint</Text>
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.buttonsPosition1, styles.buttonsPosition2]}
        onPress={() => navigation.navigate("SearchStation")}
      >
        <View style={styles.buttonsShadowBox}>
          <Image
            style={[styles.teenyIconArrowRight, styles.newRuleAlertLayout]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Text
            style={[styles.nearestPoliceStation, styles.voiceComplaintTypo]}
          >
            Nearest Police Station
          </Text>
          <Image
            style={[styles.simpleIconsunderarmour, styles.simplePosition]}
            resizeMode="cover"
            source={require("../assets/simpleiconsunderarmour1.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonsPosition, styles.buttonsPosition1]}
        onPress={() => navigation.navigate("UserAlertParent")}
      >
        <View style={styles.buttonsShadowBox}>
          <Image
            style={[styles.teenyIconArrowRight, styles.newRuleAlertLayout]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Text
            style={[styles.nearestPoliceStation, styles.voiceComplaintTypo]}
          >
            <Text style={styles.writeA}>{` Alert `}</Text>
            <Text style={styles.complaint}>Parents</Text>
          </Text>
          <Image
            style={[styles.simpleIconsunderarmour, styles.simplePosition]}
            resizeMode="cover"
            source={require("../assets/simpleiconsunderarmour2.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonsFrame, styles.buttonsPosition2]}
        onPress={() => navigation.navigate("UserReportOffence")}
      >
        <View style={styles.buttonsShadowBox}>
          <Image
            style={[styles.teenyIconArrowRight, styles.newRuleAlertLayout]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Text
            style={[styles.nearestPoliceStation, styles.voiceComplaintTypo]}
          >
            <Text style={styles.writeA}>Report</Text>
            <Text style={styles.complaint}> Offense</Text>
          </Text>
          <Image
            style={[styles.simpleIconsunderarmour, styles.simplePosition]}
            resizeMode="cover"
            source={require("../assets/simpleiconsunderarmour3.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.framePressable, styles.buttonsPosition]}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <View style={styles.buttonsShadowBox}>
          <Image
            style={[styles.teenyIconArrowRight, styles.newRuleAlertLayout]}
            resizeMode="cover"
            source={require("../assets/teeny-icon--arrowright.png")}
          />
          <Text
            style={[styles.nearestPoliceStation, styles.voiceComplaintTypo]}
          >
            Contact Gaurdy
          </Text>
          <Image
            style={[
              styles.iconsaxboldtextaligncenter,
              styles.simplePosition,
              styles.arrowarrowLeftLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldshieldsecurity.png")}
          />
          <Image
            style={[
              styles.iconsaxboldshieldsecurity1,
              styles.simpleIconsnikePosition,
              styles.arrowarrowLeftLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxboldshieldsecurity1.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttons7,
          styles.buttonsPosition2,
          styles.buttonsShadowBox1,
        ]}
        onPress={() => navigation.navigate("EmergencySupport")}
      >
        <Text
          style={[
            styles.voiceComplaint,
            styles.voiceComplaintTypo,
            styles.voiceComplaintPosition,
          ]}
        >
          <Text style={styles.writeA}>Emergency</Text>
          <Text style={styles.complaint}>Support</Text>
        </Text>
        <Image
          style={[styles.iconsaxboldandroid, styles.arrowarrowLeftLayout]}
          resizeMode="cover"
          source={require("../assets/iconsaxboldandroid.png")}
        />
      </Pressable>
      <View style={styles.bottomNavigation}>
        <View style={styles.vuesaxboldhome2Parent}>
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
          <Pressable
            style={[styles.simpleIconLayout, styles.ml60]}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/vuesaxboldshoppingbag.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vuesaxbolduserIcon,
              styles.ml60,
              styles.simpleIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxbolduser1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.buttons8,
          styles.buttonsPosition,
          styles.buttonsShadowBox,
        ]}
        onPress={() => navigation.navigate("HelpAndSupport")}
      >
        <Text
          style={[
            styles.helpAndSupport,
            styles.voiceComplaintPosition,
            styles.newTypo,
            styles.helpAndSupportTypo,
          ]}
        >
          <Text style={styles.writeA}>Help and</Text>
          <Text style={styles.complaint}>Support</Text>
        </Text>
        <Image
          style={[
            styles.iconsaxboldtextaligncenter,
            styles.simplePosition,
            styles.arrowarrowLeftLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsaxboldautobrightness.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_xs,
  },
  ml31: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml60: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  backgroundPosition: {
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  simpleIconspumaPosition: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  objectsPosition: {
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  arrowarrowLeftLayout: {
    height: 24,
    width: 24,
  },
  trendingTodayLayout: {
    height: 17,
    width: 177,
    alignItems: "center",
    display: "flex",
    fontFamily: GlobalStyles.FontFamily.pontanoSans,
    top: "50%",
    position: "absolute",
  },
  newRuleAlertTypo: {
    lineHeight: 22,
    fontSize: GlobalStyles.FontSize.b_size,
    textAlign: "left",
    color: GlobalStyles.Color.sUNRISEWhite1,
  },
  parentLayout: {
    height: 125,
    position: "absolute",
  },
  newRuleAlertLayout: {
    height: 23,
    position: "absolute",
  },
  xTypo: {
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.b,
  },
  objectsIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  x2Position: {
    color: GlobalStyles.Color.sUNRISEWhite1,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: GlobalStyles.FontFamily.quicksand,
    fontWeight: "700",
  },
  groupChildPosition: {
    borderRadius: GlobalStyles.Border.br_xs,
    left: -12,
    top: -8,
    height: 80,
    position: "absolute",
  },
  newTypo: {
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.b,
    textAlign: "center",
    position: "absolute",
  },
  newPosition: {
    top: 60,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
  },
  voiceComplaintPosition: {
    left: 1,
    width: 73,
  },
  simplePosition: {
    top: 13,
    position: "absolute",
  },
  simpleIconLayout: {
    height: 32,
    width: 32,
  },
  helpAndSupportTypo: {
    fontWeight: "700",
    color: GlobalStyles.Color.sUNRISEDarkGrey,
  },
  voiceComplaintTypo: {
    top: 37,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.b,
    textAlign: "center",
    position: "absolute",
  },
  simpleIconsnikePosition: {
    top: 10,
    position: "absolute",
    overflow: "hidden",
  },
  buttonsPosition2: {
    top: 487,
    position: "absolute",
  },
  buttonsPosition1: {
    left: 45,
    flexDirection: "row",
  },
  buttonsPosition: {
    top: 591,
    position: "absolute",
  },
  buttonsShadowBox1: {
    width: 74,
    backgroundColor: GlobalStyles.Color.gray_800,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(28, 37, 44, 0.05)",
    borderRadius: GlobalStyles.Border.br_xs,
    height: 74,
    overflow: "hidden",
  },
  buttonsShadowBox: {
    backgroundColor: GlobalStyles.Color.gray_900,
    width: 74,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(28, 37, 44, 0.05)",
    borderRadius: GlobalStyles.Border.br_xs,
    height: 74,
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
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  background: {
    height: "100%",
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
    left: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowarrowLeft: {
    left: 9,
    top: 48,
    position: "absolute",
  },
  trendingToday: {
    marginTop: 60,
    left: 111,
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 24,
    color: GlobalStyles.Color.gold_100,
    textAlign: "left",
  },
  heyWelcomeBack: {
    marginTop: -69,
    left: 38,
  },
  vuesaxlineararrowSquareLefIcon: {
    marginTop: -77,
    left: 0,
  },
  trendingTodayParent: {
    marginTop: -364,
    left: 11,
    width: 288,
    height: 154,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vuesaxlinearsmsNotification: {
    top: 46,
    right: 28,
    position: "absolute",
  },
  newRuleAlert: {
    letterSpacing: 1,
    width: 168,
    fontFamily: GlobalStyles.FontFamily.b,
    top: 8,
    left: 0,
  },
  objectsIcon: {
    height: "90.11%",
    width: "80.69%",
    bottom: "9.89%",
    left: "19.31%",
  },
  x: {
    fontSize: GlobalStyles.FontSize.mP_size,
    lineHeight: 20,
    fontFamily: GlobalStyles.FontFamily.b,
  },
  text1: {
    fontSize: 40,
    lineHeight: 48,
  },
  x2: {
    top: 32,
    width: 35,
    textAlign: "left",
    height: 44,
  },
  objectsParent: {
    height: "95%",
    width: "31.92%",
    bottom: "5%",
    left: "68.08%",
  },
  governmentHasIncreasedTheS: {
    top: 35,
    fontSize: GlobalStyles.FontSize.mT_size,
    lineHeight: 15,
    width: 174,
    fontFamily: GlobalStyles.FontFamily.b,
    textAlign: "left",
  },
  newRuleAlertParent: {
    width: 270,
    height: 80,
    left: 16,
    top: 25,
    position: "absolute",
  },
  groupWrapper: {
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
    width: 291,
    height: 125,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    width: 291,
    height: 125,
    left: 0,
    top: 0,
    position: "absolute",
  },
  objectsIcon1: {
    height: "79.76%",
    width: "76.87%",
    bottom: "20.24%",
    left: "23.13%",
  },
  text2: {
    top: 49,
    fontSize: 32,
    lineHeight: 38,
    height: 36,
    width: 80,
    textAlign: "left",
  },
  objectsGroup: {
    width: "33.41%",
    left: "66.59%",
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  priceIncreasedParent: {
    width: 267,
    height: 85,
    left: 16,
    top: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: -1,
    left: 310,
    width: 287,
  },
  groupParent: {
    top: 217,
    width: 359,
    left: 13,
  },
  groupChild: {
    width: 80,
  },
  new: {
    width: 56,
    left: 0,
  },
  ellipseParent: {
    height: 74,
    width: 56,
  },
  kids: {
    left: 5,
    width: 45,
  },
  groupChild2: {
    width: 56,
  },
  groupContainer: {
    top: 80,
    flexDirection: "row",
    left: 21,
    width: 359,
    position: "absolute",
  },
  teenyIconArrowRight: {
    top: 21,
    left: 221,
    width: 23,
    display: "none",
  },
  simpleIconspuma: {
    left: 20,
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
    width: 73,
    left: 0,
  },
  simpleIconspumaParent: {
    height: 52,
    width: 73,
  },
  iconsaxboldtextaligncenter: {
    left: 25,
    overflow: "hidden",
  },
  voiceComplaint: {
    width: 73,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_3xs,
    top: 37,
    left: 1,
  },
  simpleIconsnike: {
    left: 21,
  },
  buttonsParent: {
    top: 383,
    paddingLeft: GlobalStyles.Padding.padding_md,
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  nearestPoliceStation: {
    left: 3,
    fontSize: GlobalStyles.FontSize.size_4xs,
    lineHeight: 12,
    width: 71,
  },
  simpleIconsunderarmour: {
    width: 31,
    height: 31,
    left: 21,
    overflow: "hidden",
  },
  buttonsFrame: {
    left: 263,
    flexDirection: "row",
  },
  iconsaxboldshieldsecurity1: {
    left: 23,
  },
  framePressable: {
    left: 259,
    flexDirection: "row",
  },
  iconsaxboldandroid: {
    left: 26,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  buttons7: {
    left: 151,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vuesaxbolduserIcon: {
    display: "none",
  },
  vuesaxboldhome2Parent: {
    top: 16,
    left: 41,
    flexDirection: "row",
    position: "absolute",
  },
  bottomNavigation: {
    top: 699,
    left: 42,
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
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  helpAndSupport: {
    top: 45,
    width: 73,
  },
  buttons8: {
    left: 153,
  },
  userDashboard: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserDashboard;
