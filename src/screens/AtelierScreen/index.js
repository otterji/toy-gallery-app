
import * as React from 'react';
import {
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box } from 'native-base';
import colors from '../../styles/colors';
import Piece from './containers/Piece';
import Artist from './containers/Artist';



export default function AtelierScreen({ navigation }) {
  const FirstRoute = () => <Piece navigation={navigation}></Piece>;
  const SecondRoute = () => <Artist navigation={navigation}></Artist>;
  const initialLayout = { width: Dimensions.get('window').width };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'WORKS' },
    { key: 'second', title: 'ARTISTS' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" >
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? colors.secondary : "#B5A48F";

          return (
            <Box
              flex={1}
              alignItems="center"
              p="1"
              key={`tab-bar-${i}`}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
                style={{ width: '100%', alignItems: 'center', height: 40 }}
              >
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
    </NativeBaseProvider>
  );
}
