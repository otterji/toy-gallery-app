import { Box, Text, Button, Modal, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';



const screen = Dimensions.get('window');

function SettingScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const logOut = () => {
    dispatch(authActions.logOut());
  };

  return (
    <>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>About EARTH</Modal.Header>
          <Modal.Body>
            <Text fontSize={20} fontWeight="bold">
              {
                `Introducing 'Earth' Project
                `
              }
            </Text>
            <Text fontSize={15} fontWeight="bold" lineHeight={25}>
              After confronting an overwhelming social problem, would you care to face it, and start a change?
            </Text>
            <Image source={{ uri: "https://sumisa-canvas-daechi.s3.ap-northeast-2.amazonaws.com/earth/earth.png" }} alt="earth" style={{ width: '100%', height: 200, marginTop: 20 }} />

            <Text lineHeight={25}>
              {
                `
 The 'Earth' project began with 5 friends (Aaron, Lucy, Rafael, Serin, Young-ji) from South Korea. Sustainable environment and art was our subject of common interest, hence we naturally came across upcycling art. However, as we dive deeper into our research, the low awareness of upcycling art here in South Korea was rather shocking.

 Although South Korea is one of the leading nation in household waste separation and discharging, the upcycling art is yet far from being accepted by the mainstream art scene. Numerous surveys indicates that the public perception toward waste upcycling is more of a 'regulation' rather than an 'opportunity'. In order to spread empathy toward sustainable environment, and support the growth of upcycling art movement, a dedicated art curation platform was needed immediately. Soon, the team were working to resolve the issue, and start the change from our own hands.
  
 The 'Earth' project spotlights global upcycling artists and their astounding works. No matter who you are, and where you are from, there will be discoveries around every corner. Also, we are collaborating with artists to enable a special 'Material Funding' feature, where users can provide recycled materials to their nearby upcycling artists, and contribute to art projects directly.
  
 Our project would not have been possible without the dedicated support from the T&C foundation, and edu-tech startup 'Pulit'. For anyone out there who are also interested in change making, please feel free to reach out. We're always waiting :)
                `
              }

            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Box paddingX="20px" mt={20}>
        <Button size="lg" variant="subtle" colorScheme='orange' mb={10} onPress={() => setOpenModal(true)}>
          ABOUT EARTH
        </Button>
        <Button size="lg" variant="subtle" colorScheme='orange' onPress={() => logOut()} >
          SIGNOUT
        </Button>
      </Box>
    </>
  )
};

export default SettingScreen;