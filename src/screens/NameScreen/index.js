import { Box, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';


function NameScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { email, password } = params;
  const dispatch = useDispatch();
  const { user, registerLoading } = useSelector(state => state.authReducer);
  const [nickName, setNickName] = useState("");

  const nickNameInput = {
    value: nickName,
    onChangeText: (text) => setNickName(text),
  }

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="14px" marginTop="25px" fontFamily="Roboto_400Regular" >Nickname*</Text>
        <Input
          {...nickNameInput}
          placeholder="Please enter your email nickname"
          backgroundColor="#D5C9A5"
          marginBottom="50px"
          borderColor="#D5C9A5"
          fontFamily="Roboto_400Regular"
        />
        {/* <Button onPress={() => dispatch(authActions.postRegister({
          email, password
        }))} */}
        <DefaultBtn text={registerLoading ? "Loading" : "Sign up"} onPressBtn={() => dispatch(authActions.postRegister({
          email, password, nickname: nickName
        }))} disabled={nickName.length === 0 || registerLoading}></DefaultBtn>
      </Box >
    </Box>
  )
}

export default NameScreen;