import { Colors } from "@/src/constants/theme";
import Entypo from "@expo/vector-icons/Entypo";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PlansCard from "./PlansCard";

const { width } = Dimensions.get("window");

type Props = {
  data: any[];
  onPressPlan?: (data: any) => void;
}

export default function PlansList({ data, onPressPlan }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (width - 150));
    setCurrentIndex(index);
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        style={styles.container}
        onScroll={handleScroll}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <View>
            <PlansCard
              title={item.name}
              price={item.price}
              description={item.description}
              onPressPlan={() => onPressPlan?.(item)}
            />
          </View>
        )}
      />
      <View style={styles.paginator}>
        <TouchableOpacity
          hitSlop={20}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Entypo
            name="chevron-with-circle-left"
            size={32}
            color={currentIndex === 0 ? Colors.neutral[600] : Colors.blueBerry}
          />
        </TouchableOpacity>
        <Text style={styles.indicator}>
          {currentIndex + 1} / {data.length}
        </Text>
        <TouchableOpacity
          hitSlop={20}
          onPress={handleNext}
          disabled={currentIndex === data.length - 1}
        >
          <Entypo
            name="chevron-with-circle-right"
            size={32}
            color={
              currentIndex === data.length - 1
                ? Colors.neutral[600]
                : Colors.blueBerry
            }
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  paginator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  indicator: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: Colors.neutral[700],
  },
});
