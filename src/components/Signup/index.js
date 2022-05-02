import { Text, View, Image } from "react-native";
import React from "react";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeName";

const RegisterComponent = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require("../../assets/images/logo.png")}
      />

      <View>
        <Text style={styles.title}>Welcome to React Native</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={"This field is required"}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            // error={"This field is required"}
          />

          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last Name"
          />

          <Input label="Email" iconPosition="right" placeholder="Enter Email" />

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
          <Text style={styles.infoText}>Already have an account</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}
          >
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
