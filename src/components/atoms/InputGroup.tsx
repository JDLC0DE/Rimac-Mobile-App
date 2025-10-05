import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/src/constants/theme";
import { Controller } from "react-hook-form";

type Props = {
  options: Record<"value" | "label", string>[];
  label: string;
  name: string;
  rules?: object;
  control: any;
  errors: any;
};

export default function InputGroup({
  name,
  label,
  rules,
  options,
  errors,
  control,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <View style={styles.container}>
            <View style={styles.select}>
              <Text style={styles.selectLabel}>{selectedOption.label}</Text>
              <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
                <MaterialIcons
                  name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {open ? (
                <FlatList
                  scrollEnabled={false}
                  data={options}
                  style={styles.optionsContainer}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      hitSlop={10}
                      onPress={() => {
                        setSelectedOption(item);
                        setOpen(false);
                        onChange(
                          `${item.value} | ${
                            value ? value.split(" | ")[1] : ""
                          }`
                        );
                      }}
                    >
                      <Text style={styles.selectOption}>{item.label}</Text>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.selectOptionDivider} />
                  )}
                />
              ) : null}
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>{label}</Text>
              <TextInput
                style={styles.inputField}
                onBlur={onBlur}
                onChangeText={(text) =>
                  onChange(`${selectedOption.value} | ${text}`)
                }
                value={value ? value.split(" | ")[1] : ""}
              />
            </View>
          </View>
          {errors[name] && (
            <Text style={styles.errorMsg}>{errors[name].message}</Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.grey[60],
    borderRadius: 8,
    flexDirection: "row",
    height: 46,
  },
  select: {
    position: "relative",
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderRightWidth: 1,
    borderRightColor: Colors.grey[60],
  },
  selectLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.grey[100],
  },
  optionsContainer: {
    position: "absolute",
    top: 46,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: Colors.grey[30],
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.grey[60],
    maxHeight: 150,
  },
  selectOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectOptionDivider: {
    height: 1,
    backgroundColor: Colors.grey[60],
  },
  input: {
    width: "70%",
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 2,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.grey[60],
  },
  inputField: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.grey[100],
  },
  errorMsg: {
    color: Colors.primary,
    fontSize: 12,
    marginTop: 4,
  },
});
