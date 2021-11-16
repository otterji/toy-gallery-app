import React from 'react';
import { ScrollView } from 'react-native';
import { Accordion, NativeBaseProvider, Center, Box, Text } from 'native-base';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';


export default function AccordionComponent({
  list
}) {

  const screen = Dimensions.get('window');

  return (
    <NativeBaseProvider>
      <ScrollView >
        <Box>
          <Accordion index={[0, 1]} style={{ borderWidth: 0, borderRadius: 0 }} allowMultiple>
            {
              list.map((x) => (
                <Accordion.Item>
                  <Accordion.Summary
                    height='38px'
                    padding="0px"
                    paddingLeft="10px"
                    paddingRight="10px"
                    style={{ backgroundColor: '#E7DFC2', borderRadius: 3 }}>
                    <Text style={{ color: colors.textPrimary, fontWeight: 'bold' }}>
                      {x.title}
                    </Text>
                    <Accordion.Icon color={colors.textPrimary} />
                  </Accordion.Summary>
                  <Accordion.Details>
                    {x.content}
                  </Accordion.Details>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};