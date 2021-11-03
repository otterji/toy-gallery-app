import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';


function SignupScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = {
    value: email,
    onChangeText: (text) => setEmail(text),
  }

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };

  return (
    <Box width="100%" height="100%">
      <Box paddingX='15px'>
        <Text fontSize="20px" bold marginY='20'>첫 방문이시군요!</Text>
        <Text fontSize="14px" >이메일</Text>
        <Input {...emailInput} placeholder="이메일을 입력해주세요"
          backgroundColor="#E7DFC2"
          marginBottom="10"
        ></Input>
        <Text fontSize="14px" >비밀번호</Text>
        <Input {...passwordInput} placeholder="비밀번호를 입력해주세요"
          marginBottom="30"
          backgroundColor="#E7DFC2"></Input>
        {/* <Button onPress={() => dispatch(authActions.postRegister({
          email, password
        }))} */}
        <DefaultBtn text="다음" onPressBtn={() => navigate("Name")} disabled={email.length === 0 && password.length === 0}></DefaultBtn>
      </Box >
    </Box>
  )
}

export default SignupScreen;