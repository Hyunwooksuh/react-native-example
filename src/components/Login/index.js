import { Text, View, Image } from "react-native";
import React from "react";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeName";

const LoginComponent = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require("../../assets/images/logo.png")}
      />

      <View>
        <Text style={styles.title}>Welcome to React Native</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={"This field is required"}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
          />

          <CustomButton primary title="Submit" />
        </View>

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}
          >
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

//이벤트 자체가 먹는지 -> 눌렸을 때 navigate가 동작이 안되는지?

export default LoginComponent;
