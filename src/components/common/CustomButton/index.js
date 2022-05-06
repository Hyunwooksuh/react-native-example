import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/themes/colors";
import styles from "./styles";

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const getbgColor = () => {
    if (disabled) {
      return colors.grey;
    }

    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getbgColor() }]}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? "black" : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}
          >
            {loading ? "Please wait..." : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
