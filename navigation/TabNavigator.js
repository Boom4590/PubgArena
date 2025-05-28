import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TournamentsScreen from '../screens/TournamentScreen';
import CurrentTournamentScreen from '../screens/CurrentTournamentScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ setUserToken }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Tournaments') iconName = 'list';
          else if (route.name === 'Current') iconName = 'timer';
          else if (route.name === 'Profile') iconName = 'person';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tournaments" component={TournamentsScreen} />
      <Tab.Screen name="Current" component={CurrentTournamentScreen} />
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} setUserToken={setUserToken} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
