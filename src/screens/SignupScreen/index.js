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

  const emailInput = {
    value: email,
    onChangeText: (text) => setEmail(text),
  };

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };

  useEffect(() => {
    setIsDuplicated(isDuplicated);
  }, [isDuplicated])

  console.log('here', curIsDuplicated)

  return (

    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="20px" bold marginY='25px'>첫 방문이시군요!</Text>
        <Text fontSize="14px" >이메일*</Text>
        <Input
          {...emailInput}
          placeholder="이메일을 입력해주세요"
          backgroundColor="#E7DFC2"
          marginBottom="15px"
          borderColor="#E7DFC2"
        />
        <Text fontSize="14px" >비밀번호*</Text>
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
        <DefaultBtn text={emailCheckLoading ? "로딩중" : "다음"} onPressBtn={() => dispatch(authActions.getEmailCheckAction({ email }))} disabled={email.length === 0 || password.length === 0} />
      </Box >
    </Box >
  )
};

export default SignupScreen;