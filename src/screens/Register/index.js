import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useContext, useCallback, useEffect } from "react";
import RegisterComponent from "../../components/Signup";
import { LOGIN } from "../../constants/routeName";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

const Register = () => {
  const { navigate } = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  /* useFocus Hook */
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prev) => {
            return { ...prev, [name]: "This field needs minimum 6 char" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: "please add an user name" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: "please add a first name" };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: "please add a last name" };
      });
    }

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "please add an email" };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "please add a password" };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
