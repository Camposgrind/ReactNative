import 'react-native-gesture-handler';

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}’s profile</Text>;
};
