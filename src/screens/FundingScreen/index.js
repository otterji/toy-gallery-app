
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, Center, ScrollView, Flex, HStack, Image, Pressable, Progress } from 'native-base';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';
import { fundingList } from './constants';

const screen = Dimensions.get('window');


export default function FundingScreen({ navigation }) {
  const { navigate } = navigation;

  return (
    <NativeBaseProvider>
      <Box width="100%" height="100%" >
        <ScrollView width="100%" style={{ flex: 1 }}>
          <Flex direction="column" >
            {
              fundingList.map((x, idx) => {
                return (
                  <Pressable mb="40px" onPress={() => navigate('FundingDetail', { targetFunding: x })} key={`funding-${idx}`}>
                    {x.imgLink && <Image alt={`magazine-${x.imgLink}`} source={{ uri: x.imgLink }} width={screen.width} height="300px" />}
                    <Box key={`funding-cover-${idx}`} paddingX="20px">
                      <Text fontSize="12px" color={colors.secondary} mt="5px">{x.artist}</Text>
                      <Text fontSize="20px" color={colors.secondary} fontWeight="bold">{x.title}</Text>
                      <Progress colorScheme="warning" value={x.fundRate} marginY="10px" />
                      <HStack>
                        {
                          x.tags.map((y, index) => (
                            <Text
                              fontSize="15px"
                              color="#F0E8C1"
                              key={`tags-list-${index}`}
                              marginRight="10px"
                              style={{ backgroundColor: "#B5A48F", borderRadius: 5, paddingHorizontal: 4, marginTop: 5, letterSpacing: 1 }}
                            >
                              {y}
                            </Text>
                          ))
                        }
                      </HStack>
                    </Box>
                  </Pressable>
                )
              })
            }
          </Flex>
        </ScrollView>
      </Box >
    </NativeBaseProvider >
  );
}
