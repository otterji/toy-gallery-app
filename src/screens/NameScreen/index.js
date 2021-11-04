import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';


function NameScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { email, password } = params;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const [nickName, setNickName] = useState("");

  const nickNameInput = {
    value: nickName,
    onChangeText: (text) => setNickName(text),
  }

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="20px" bold marginY='25px'>사용하실 닉네임을 입력해주세요 :)</Text>
        <Text fontSize="14px" >닉네임*</Text>
        <Input
          {...nickNameInput}
          placeholder="닉네임을 입력해주세요"
          backgroundColor="#E7DFC2"
          marginBottom="50px"
          borderColor="#E7DFC2"
        />
        {/* <Button onPress={() => dispatch(authActions.postRegister({
          email, password
        }))} */}
        <DefaultBtn text="완료" onPressBtn={() => dispatch(authActions.postRegister({
          email, password, nickname: nickName
        }))} disabled={nickName.length === 0}></DefaultBtn>
      </Box >
    </Box>
  )
}

export default NameScreen;