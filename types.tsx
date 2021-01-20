import {Veterinary} from "./src/image";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  SelectScreen: undefined;
  ResultScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Appointments: undefined;
  Explore: undefined;
  Profile: undefined;
};

export type HomeParamList = { HomeScreen: undefined; };

export type SearchParamList = { SearchScreen: undefined; };

export type AppointmentsParamList = { AppointmentsScreen: undefined; };

export type ExploreParamList = { ExploreScreen: undefined; };

export type ProfileParamList = { ProfileScreen: undefined; };

export type PetService = {
  id: string,
  service_name: string,
  service_icon: string,
  services: [
    {
      title: string,
      data: []
    }
  ]
}
