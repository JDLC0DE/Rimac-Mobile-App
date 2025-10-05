import { Colors } from "@/src/constants/theme";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  errors: any;
  label: string;
  name: string;
  control: any;
  rules?: object;
};

export default function Input({ label, control, name, rules, errors }: Props) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
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
    height: 46,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.grey[60],
  },
  input: {
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
