import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DefaultBtn = ({ text, onPressBtn, disabled }) => {

  return (
    <Button onPress={() => onPressBtn()}
      width="100%"
      backgroundColor={`${disabled ? '#DBD5BE' : '#D57162'}`}
      height='48px'
      disabled={disabled}
    ><Text fontFamily="Roboto_400Regular" color={`${disabled ? '#ABA9A1' : '#F0E8C1'}`} fontSize="16px">{text}</Text></Button>
  )
};

export default DefaultBtn;