import { Box, Button, Center, Input, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';


function LoginScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { user, loginLoading } = useSelector(state => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
  }

  const onChangeEmail = (text) => {
    setEmail(text)
    const validateRes = validate(text);
    if (validateRes) {
      setEmailErr(false);
      return;
    }
    setEmailErr(true);
    return;
  }

  const emailInput = {
    value: email,
    onChangeText: (text) => onChangeEmail(text),
    autoCapitalize: "none"
  }

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="14px" marginTop="25px" color={colors.secondary} fontFamily="Roboto_400Regular">Email*</Text>
        <Input
          {...emailInput}
          placeholder="Please enter your email address"
          backgroundColor="#D5C9A5"
          marginBottom="5px"
          borderColor="#D5C9A5"
          fontFamily="Roboto_400Regular"
        />
        {
          emailErr
            ?
            (
              <Text color={colors.error} fontFamily="Roboto_400Regular">Please enter a valid email address.</Text>
            )
            :
            (
              <></>
            )
        }
        <Text fontSize="14px" marginTop="15px" color={colors.secondary} fontFamily="Roboto_400Regular" >Password*</Text>
        <Input
          {...passwordInput}
          placeholder="Please enter your password"
          borderColor="#D5C9A5"
          marginBottom="50"
          backgroundColor="#D5C9A5"
          fontFamily="Roboto_400Regular"
        />
        <Button onPress={() => onPressBtn()}
            width="100%"
            backgroundColor="#B5A48F"
            height='48px'
            onPress={() => navigate("SignUp")}
          ><Text fontFamily="Roboto_400Regular" color="#F0E8C1" fontSize="16px">Sign up</Text></Button>
        <Box height="15px" />
        <DefaultBtn
          text={loginLoading ? "Loading" : "Sign in"}
          onPressBtn={() => dispatch(authActions.logIn({
            email, password
          }))}
          disabled={email.length === 0 || password.length === 0 || loginLoading || emailErr}
        />
      </Box >
    </Box >
  )
}

export default LoginScreen;