import { Button, Center, Input } from 'native-base';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../store/auth/actions';


function LoginInScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = {
    value: email,
    onChangeText: (text) => setEmail(text)
  }

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text)
  };

  console.log(email);


  return (
    <Center flex={1}>
      <Input {...emailInput} mx="3" placeholder="이메일" w={{
        base: "75%",
        md: "25%",
      }}></Input>
      <Input {...passwordInput} mx="3" placeholder="비밀번호" w={{
        base: "75%",
        md: "25%",
      }}></Input>
      <Button onPress={() => dispatch(authActions.postRegister({
        email, password
      }))}>회원가입</Button>
    </Center >
  )
}

export default LoginInScreen;