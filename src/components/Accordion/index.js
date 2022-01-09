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
                <Accordion.Item key={`accordion-${x.id}`}>
                  <Accordion.Summary
                    height='38px'
                    padding="0px"
                    paddingLeft="10px"
                    paddingRight="10px"
                    style={{ backgroundColor: '#D5C9A5', borderRadius: 3 }}>
                    <Text style={{ color: colors.textPrimary }} fontFamily="Belleza_400Regular">
                      {x.title}
                    </Text>
                    <Accordion.Icon color={colors.textPrimary} />
                  </Accordion.Summary>
                  <Accordion.Details>
                    <Text fontFamily="Belleza_400Regular">
                      {x.content}
                    </Text>
                  </Accordion.Details>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </Box>
      </ScrollView>
    </NativeBaseProvider >
  );
};