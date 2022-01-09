import { Box, Button, Center, Input, Text, Checkbox, Flex, Modal } from 'native-base';
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
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);

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
    autoCapitalize: "none"
  };

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text),
    secureTextEntry: true,
  };

  const today = new Date();
  const time = today.toDateString();
  const curTime = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Modal isOpen={showModal}>
        <Modal.Content>
          <Modal.Header>
            Privacy Policy
          </Modal.Header>
          <Modal.Body>
            To use the service of ‘Earth’, I consent to the collection and usage of my privacy information, in accordance with the Korean Privacy Law Article 15 and 17.
            {"\n"}
            □ Purpose of Collection and Usage of Privacy Information
            - Account Sign Up, Service Management, Marketing.
            - Collected Privacy Information are solely used for the purpose stated above.
            {"\n"}
            □ List of Collected Privacy Information
            - Name, email address, Age, etc.
            {"\n"}
            □ Period of Privacy Information Acquisition and Usage
            - In accordance to related laws and regulations, ‘Earth’ possesses your Privacy Information for 1 year. Afterward, following [Korean Privacy Law] Article 21, privacy information is terminated immediately.
            - In the case of account deletion, privacy information is terminated immediately according to the same regulation.
            {"\n"}
            ※ You have the right to refuse. However, account sign-up and service usage are not provided in the case of refusal.
            {"\n"}
            Do you agree to the Privacy Policy above?
            {time}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false)
                  setAgreed(true)
                }}
              >
                Agree
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Box>
        <Text fontSize="14px" marginTop='25px' color={colors.secondary} fontFamily="Roboto_400Regular">Email*</Text>
        <Input
          {...emailInput}
          placeholder="Please enter your email address"
          backgroundColor="#D5C9A5"
          marginBottom="5px"
          borderColor="#D5C9A5"
          color={colors.secondary}
          fontFamily="Roboto_400Regular"
        />
        {
          emailErr
            ?
            (
              <Text color={colors.error} fontFamily="Roboto_400Regular">Please enter a valid email address.</Text>
            )
            :
            (
              <></>
            )
        }
        {
          curIsDuplicated
            ?
            (
              <Text color={colors.error} fontFamily="Roboto_400Regular">This address is already taken.</Text>
            )
            : (
              <></>
            )
        }
        <Text fontSize="14px" marginTop="15px" color={colors.secondary} fontFamily="Roboto_400Regular">Password*</Text>
        <Input
          {...passwordInput}
          placeholder="Please enter your password"
          borderColor="#D5C9A5"
          marginBottom="20px"
          backgroundColor="#D5C9A5"
          fontFamily="Roboto_400Regular"
        />
        <Flex direction="row">
          <Checkbox isChecked={agreed} value="test" onPress={() => setShowModal(true)} />
          <Text fontFamily="Roboto_400Regular" paddingLeft={3} paddingBottom={5} color="#97806C">I agree Privacy policy</Text>
        </Flex>
        <DefaultBtn text={emailCheckLoading ? "Loading" : "Next"} onPressBtn={() => dispatch(authActions.getEmailCheckAction({ email, password }))} disabled={email.length === 0 || password.length === 0 || emailCheckLoading || emailErr || !agreed} />
      </Box >
    </Box >
  )
};

export default SignupScreen;