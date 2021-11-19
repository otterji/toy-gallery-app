import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DefaultBtn = ({ text, onPressBtn, disabled }) => {

  return (
    <Button onPress={() => onPressBtn()}
      width="100%"
      backgroundColor='#E7E2D4'
      backgroundColor={`${disabled ? '#E7E2D4' : '#D45E50'}`}
      _text={{ color: `${disabled ? '#ABA9A1' : '#ffffff'}`, fontSize: 16 }}
      height='48px'
      disabled={disabled}
    >{text}</Button>
  )
};

export default DefaultBtn;