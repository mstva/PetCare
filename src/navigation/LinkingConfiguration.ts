import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {screens: {HomeScreen: 'home'}},
          Search: {screens: {SearchScreen: 'search'}},
          Appointments: {screens: {AppointmentsScreen: 'appointments'}},
          Explore: {screens: {ExploreScreen: 'explore'}},
          Profile: {screens: {ProfileScreen: 'profile'}},
        },
      },
      NotFound: '*',
    },
  },
};
