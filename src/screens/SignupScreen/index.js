import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import { initialState } from '../../store/auth/reducer';
import colors from '../../styles/colors';


function SignupScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { user, emailCheckLoading, isDuplicated } = useSelector(state => state.authReducer) || initialState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [curIsDuplicated, setIsDuplicated] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(authActions.resetStore());
    };
  }, []);

  useEffect(() => {
    setIsDuplicated(isDuplicated);
  }, [isDuplicated]);


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
  };

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };



  return (

    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="14px" marginTop='25px' color={colors.secondary}>Email*</Text>
        <Input
          {...emailInput}
          placeholder="Please enter your email address"
          backgroundColor="#E7DFC2"
          marginBottom="5px"
          borderColor="#E7DFC2"
          color={colors.secondary}
        />
        {
          emailErr
            ?
            (
              <Text color={colors.error}>Please enter a valid email address.</Text>
            )
            :
            (
              <></>
            )
        }
        {
          curIsDuplicated
            ?
            (
              <Text color={colors.error}>This address is already taken.</Text>
            )
            : (
              <></>
            )
        }
        <Text fontSize="14px" marginTop="15px" color={colors.secondary}>Password*</Text>
        <Input
          {...passwordInput}
          placeholder="Please enter your password"
          borderColor="#E7DFC2"
          marginBottom="50px"
          backgroundColor="#E7DFC2"
        />
        <DefaultBtn text={emailCheckLoading ? "Loading" : "Next"} onPressBtn={() => dispatch(authActions.getEmailCheckAction({ email, password }))} disabled={email.length === 0 || password.length === 0 || emailCheckLoading || emailErr} />
      </Box >
    </Box >
  )
};

export default SignupScreen;