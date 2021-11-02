import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DefaultBtn = ({ text, onPressBtn, disabled }) => {

  const NextBtn = (props) => <Button onPress={() => onPressBtn()}
    width="100%"
    backgroundColor='#E7E2D4'
    backgroundColor={`${props.disabled ? '#E7E2D4' : '#D45E50'}`}
    _text={{ color: `${props.disabled ? '#ABA9A1' : '#ffffff'}` }}
    height='48px'
    disabled={disabled}
  >{text}</Button>

  return (
    <NextBtn disabled={disabled} />
  )
}

export default DefaultBtn;