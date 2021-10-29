import React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function resetRoot(name) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name }],
  });
}

export function replace(...args) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function pop(...args) {
  navigationRef.current?.dispatch(StackActions.pop(...args));
}
