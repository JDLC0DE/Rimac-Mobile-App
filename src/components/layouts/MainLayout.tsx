import { Colors } from "@/src/constants/theme";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Divider from "../atoms/Divider";
import Steps from "../molecules/Steps";
import Footer from "../organism/Footer";
import Header from "../organism/Header";

type Props = {
  children: React.ReactNode;
  gradient?: boolean;
  footer?: boolean;
  steps?: boolean;
};

export default function MainLayout({
  children,
  gradient = true,
  footer = true,
  steps = false,
}: Props) {
  return (
    <View style={styles.root}>
      {/* Fondo decorativo */}
      {gradient ? (
        <View style={styles.background} pointerEvents="none">
          <Image
            source={require("../../assets/images/blur-top.png")}
            style={[styles.blurImage, styles.blurTop]}
          />
          <Image
            source={require("../../assets/images/blur-bottom.png")}
            style={[styles.blurImage, styles.blurBottom]}
          />
        </View>
      ) : null}

      {/* Contenido principal */}
      <Header />
      {steps ? (
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Steps totalSteps={2} currentStep={1} />
          </View>
          <Divider color={Colors.grey[30]} />
        </View>
      ) : null}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      {footer ? <Footer /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.common.white,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  blurImage: {
    position: "absolute",
  },
  blurTop: {
    top: 0,
    right: 0,
  },
  blurBottom: {
    left: 0,
    bottom: 152,
  },
  scroll: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: 24,
  },
  scrollContent: {
    paddingBottom: 100,
  },
});
