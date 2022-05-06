import { Text, View, Image } from "react-native";
import React from "react";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/Input";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeName";

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
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
          {error?.error && <Text>{error.error}</Text>}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last Name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />
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
