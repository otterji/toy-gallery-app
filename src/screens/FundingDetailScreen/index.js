
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, useToast, ScrollView, Flex, Progress, Image, HStack, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';
import DefaultBtn from '../../components/DefaultBtn';
import { Toast } from 'native-base';

const screen = Dimensions.get('window');

const markdownStyles = {
  heading1: {
    fontSize: 25,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    color: colors.secondary,
    lineHeight: 23,
  },
  image: {
    width: screen.width,
    height: 300,
  }
}




export default function FundingDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { targetFunding } = params;
  const { artist, createdAt, desc, dueDate, fundRate, imgLink, location, tags, title } = targetFunding;
  const _date = new Date(createdAt);
  const toast = useToast();


  return (

    <NativeBaseProvider>
      <Box width="100%" height="100%">
        <Box style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#F0E8C1", zIndex: 2,
        }}>
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize="15px" color={colors.secondary} fontWeight="bold" marginLeft="20px" marginTop="19px">
              Become an Art Supporter!
            </Text>
            <View style={{ width: '50%', padding: 10 }}>
              <DefaultBtn text="Contact" disabled={false} onPressBtn={() => toast.show({
                title: "Sorry :(",
                status: "warning",
                description: "This is not available in Betaflight",
                placement: "top"
              })} />
            </View>
          </Flex>
        </Box>
        <ScrollView width="100%" style={{ flex: 1 }}>
          <Flex direction="column" paddingX="20px" marginY="25px">
            <Flex direction="row">
              <Text color={colors.secondary}>{artist}</Text>
            </Flex>
            <Text fontSize="25px" color={colors.secondary} fontWeight="bold">{title}</Text>
            <Text color="#B5A48F">{_date.toDateString()}</Text>
            <HStack>
              {
                tags.map((x, idx) => (
                  <Text
                    fontSize="15px"
                    color="#F0E8C1"
                    key={`tags-list-funding-detail-${idx}`}
                    marginRight="10px"
                    style={{ backgroundColor: "#B5A48F", borderRadius: 5, paddingHorizontal: 4, marginTop: 5, letterSpacing: 1 }}
                  >
                    {x}
                  </Text>
                ))
              }
            </HStack>
            <Progress colorScheme="warning" value={fundRate} marginTop="17px" />
          </Flex>
          <Image alt="fund-img" source={{ uri: imgLink }} style={{ width: screen.width, height: 300 }} />
          <Flex direction="column" marginX="25px" marginTop="20px" marginBottom="100px" >
            <Text color={colors.secondary} fontSize="15px" >
              {desc}
            </Text>
          </Flex>
        </ScrollView>
      </Box >
    </NativeBaseProvider >
  );
}
