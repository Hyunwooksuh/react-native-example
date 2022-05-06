import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/themes/colors";
import styles from "./styles";

const Message = ({
  message,
  onDismiss,
  retry,
  retryFn,
  primary,
  danger,
  info,
  success,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getbgColor = () => {
    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }

    if (success) {
      return colors.success;
    }

    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getbgColor() }]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              {message}
            </Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  Retry
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss();
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
