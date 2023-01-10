import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const TermsAndCondition = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsAndCondition}>
      <View
        style={[styles.iphoneXhomeIndicatorhomeI, styles.backgroundPosition]}
      >
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
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
      <Image
        style={styles.termsAndConditionChild}
        resizeMode="cover"
        source={require("../assets/frame-237725.png")}
      />
      <Text style={[styles.skip, styles.skipFlexBox]}>Skip</Text>
      <View
        style={[
          styles.termsAndConditionInner,
          styles.buttonsShadowBox,
          styles.frameParentPosition,
        ]}
      >
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.headlineParent}>
            <Text
              style={[styles.headline, styles.buttonsFlexBox, styles.bodyTypo]}
            >
              Terms and conditions
            </Text>
            <Text style={[styles.body, styles.mt12, styles.bodyTypo]}>
              <Text style={styles.bodyTxt}>
                <Text style={styles.gaurdyIsMediator}>
                  Gaurdy is mediator between civilians and police department to
                  solve and report the crimes as soon as possible.
                </Text>
                <Text style={styles.gaurdyWillHave}>
                  Gaurdy will have the access to your location camera, contact
                  and calendar to give the best and effective virtual service
                </Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.headlineParent, styles.mt32]}>
            <View style={styles.slider}>
              <View style={[styles.sliderChild, styles.sliderLayout]} />
              <View
                style={[styles.sliderItem, styles.ml3, styles.sliderLayout]}
              />
              <View
                style={[styles.sliderChild, styles.ml3, styles.sliderLayout]}
              />
            </View>
            <Pressable
              style={[
                styles.buttons,
                styles.mt12,
                styles.buttonsFlexBox,
                styles.buttonsShadowBox,
              ]}
              onPress={() => navigation.navigate("UserDashboard")}
            >
              <View style={styles.buttonsInner}>
                <View
                  style={[
                    styles.copyParent,
                    styles.copyParentPosition,
                    styles.buttonsFlexBox,
                  ]}
                >
                  <Text style={styles.copy}>Next</Text>
                  <Image
                    style={[styles.teenyIconArrowRight, styles.ml4]}
                    resizeMode="cover"
                    source={require("../assets/teeny-icon--arrowright7.png")}
                  />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.bars1StatusBarIphone, styles.copyParentPosition]}>
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
          source={require("../assets/wifi4.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          resizeMode="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text, styles.textPosition, styles.skipFlexBox]}>
            9:41
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  ml3: {
    marginLeft: GlobalStyles.Margin.margin_2xs,
  },
  ml4: {
    marginLeft: 4,
  },
  mt32: {
    marginTop: 32,
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
  skipFlexBox: {
    textAlign: "center",
    color: GlobalStyles.Color.sUNRISEWhite1,
  },
  buttonsShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameParentPosition: {
    left: 32,
    position: "absolute",
  },
  buttonsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTypo: {
    display: "flex",
    fontFamily: GlobalStyles.FontFamily.b,
    fontWeight: "700",
    textAlign: "center",
  },
  sliderLayout: {
    height: 4,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_md,
  },
  copyParentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
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
  termsAndConditionChild: {
    top: 148,
    left: 29,
    width: 318,
    height: 242,
    position: "absolute",
  },
  skip: {
    top: "7.14%",
    left: "88.8%",
    fontSize: GlobalStyles.FontSize.mP_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.mP,
    textAlign: "center",
    color: GlobalStyles.Color.sUNRISEWhite1,
    position: "absolute",
  },
  headline: {
    fontSize: GlobalStyles.FontSize.h4_size,
    letterSpacing: 1,
    lineHeight: 25,
    color: GlobalStyles.Color.gold_100,
    width: 260,
    height: 23,
  },
  gaurdyIsMediator: {
    marginBlockStart: 0,
    marginBlockEnd: 1,
  },
  gaurdyWillHave: {
    margin: GlobalStyles.Margin.margin_3xs,
  },
  bodyTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  body: {
    fontSize: GlobalStyles.FontSize.mT_size,
    lineHeight: 15,
    color: GlobalStyles.Color.sUNRISEDarkGrey,
    width: 246,
    height: 105,
    alignItems: "center",
  },
  headlineParent: {
    alignItems: "center",
  },
  sliderChild: {
    width: 4,
    opacity: 0.3,
  },
  sliderItem: {
    width: 17,
  },
  slider: {
    flexDirection: "row",
  },
  copy: {
    fontSize: GlobalStyles.FontSize.b_size,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.mP,
  },
  teenyIconArrowRight: {
    width: 20,
    height: 20,
  },
  copyParent: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 0,
    flexDirection: "row",
  },
  buttonsInner: {
    width: 64,
    height: 22,
  },
  buttons: {
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gold_100,
    shadowColor: "rgba(123, 97, 255, 0.2)",
    shadowRadius: 16,
    elevation: 16,
    width: 150,
    height: 56,
    paddingHorizontal: 34,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    top: 48,
    alignItems: "center",
  },
  termsAndConditionInner: {
    top: 414,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blackModeSecondaryDark1,
    shadowColor: "rgba(28, 37, 44, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    width: 311,
    height: 303,
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
    width: 375,
    height: 44,
    left: 0,
    overflow: "hidden",
  },
  termsAndCondition: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TermsAndCondition;
