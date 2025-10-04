import { Image, ScrollView } from "react-native";
import Footer from "../organism/Footer/Footer";
import Header from "../organism/Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Image
        source={require("../../assets/images/blur-top.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      />
      <Header />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        {children}
      </ScrollView>
      <Image
        source={require("../../assets/images/blur-bottom.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          left: 0,
          bottom: 152,
          zIndex: 1,
        }}
      />
      <Footer />
    </>
  );
}
