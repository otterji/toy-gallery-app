import { Box, SimpleGrid, Center, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';
const screen = Dimensions.get('window')
const items = 12;
const data = Array(items).fill(0);

const myGallery = [{
  id: 0,
  title: '0',
  lastUpdated: '',
},
{
  id: 1,
  title: '1',
  lastUpdated: '',
},
{
  id: 2,
  title: '2',
  lastUpdated: '',
},
{
  id: 3,
  title: '3',
  lastUpdated: '',
},
];


function MyGalleryScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  // const { user, registerLoading } = useSelector(state => state.authReducer);

  return (

    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <View style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>
        <Box style={{ borderWidth: 3, height: 200 }}>
          <Text>dkssudsdafdsfas</Text>
        </Box>
      </View>
      <View style={{ width: '50%', paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>
        <Box style={{ borderWidth: 3, height: 200 }}>
          <Text>dkssudsdafdsfas</Text>
        </Box>
      </View>
      <View style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>
        <Box style={{ borderWidth: 3, height: 200 }}>
          <Text>dkssudsdafdsfas</Text>
        </Box>
      </View>
    </View>
    // <Box paddingX="15px" width="100%" height="100%">
    //   <Box style={{ width: "100%" }}>
    //     <Center flex={1}>
    //       {/* {myGallery.map((x, idx) => {
    //         return <>
    //           <SimpleGrid columns={2} spacing={3} style={{ width: "100%" }}>
    //             <Box key={idx} style={{ borderWidth: 2, width: 150, height: 150 }} rounded="sm">
    //               <Text>{x.title}</Text>
    //             </Box>
    //           </SimpleGrid>
    //         </>
    //       })} */}


    //     </Center>
    //   </Box >
    // </Box>
  )
}

export default MyGalleryScreen;