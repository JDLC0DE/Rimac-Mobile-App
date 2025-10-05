import { Colors } from "@/src/constants/theme";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Footer from "../organism/Footer";
import Header from "../organism/Header";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <View style={styles.root}>
      {/* Fondo decorativo */}
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

      {/* Contenido principal */}
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <Footer />
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
