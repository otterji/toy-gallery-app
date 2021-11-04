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
  };

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };



  return (

    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="20px" bold marginY='25px'>첫 방문이시군요!</Text>
        <Text fontSize="14px" >이메일*</Text>
        <Input
          {...emailInput}
          placeholder="이메일을 입력해주세요"
          backgroundColor="#E7DFC2"
          marginBottom="5px"
          borderColor="#E7DFC2"
        />
        {
          emailErr
            ?
            (
              <Text color={colors.error}>올바른 이메일 양식을 입력해주세요.</Text>
            )
            :
            (
              <></>
            )
        }
        <Text fontSize="14px" marginTop="15px">비밀번호*</Text>
        <Input
          {...passwordInput}
          placeholder="비밀번호를 입력해주세요"
          borderColor="#E7DFC2"
          marginBottom={curIsDuplicated ? '18px' : '50px'}
          backgroundColor="#E7DFC2"
        />
        {
          curIsDuplicated
            ?
            (
              <Text color={colors.error} marginBottom="32px">이미 가입된 이메일입니다.</Text>
            )
            : (
              <></>
            )
        }
        <DefaultBtn text={emailCheckLoading ? "로딩중" : "다음"} onPressBtn={() => dispatch(authActions.getEmailCheckAction({ email, password }))} disabled={email.length === 0 || password.length === 0 || emailCheckLoading} />
      </Box >
    </Box >
  )
};

export default SignupScreen;