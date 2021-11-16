import React from "react"
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base"
import colors from "../../styles/colors";

const Loading = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <HStack space={2} alignItems="center">
          <Spinner color={colors.secondary} size="lg" accessibilityLabel="Loading posts" />
          <Heading color={colors.secondary} fontSize="lg">
            Loading
          </Heading>
        </HStack>
      </Center>

    </NativeBaseProvider>

  )
};

export default Loading;