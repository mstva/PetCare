import {createStackNavigator} from "@react-navigation/stack";
import {HomeParamList, SearchParamList, AppointmentsParamList, ExploreParamList, ProfileParamList} from "../../types";
import SearchScreen from "../screens/BottomTabScreens/SearchScreen";
import AppointmentsScreen from "../screens/BottomTabScreens/AppointmentsScreen";
import * as React from "react";
import ExploreScreen from "../screens/BottomTabScreens/ExploreScreen";
import ProfileScreen from "../screens/BottomTabScreens/ProfileScreen";
import HomeScreen from "../screens/BottomTabScreens/HomeScreen";

const HomeStack = createStackNavigator<HomeParamList>();
const SearchStack = createStackNavigator<SearchParamList>();
const AppointmentsStack = createStackNavigator<AppointmentsParamList>();
const ExploreStack = createStackNavigator<ExploreParamList>();
const ProfileStack = createStackNavigator<ProfileParamList>();

export function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Home Title' }}
            />
        </HomeStack.Navigator>
    );
}

export function SearchNavigator() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
        </SearchStack.Navigator>
    );
}

export function AppointmentsNavigator() {
    return (
        <AppointmentsStack.Navigator>
            <AppointmentsStack.Screen
                name="AppointmentsScreen"
                component={AppointmentsScreen}
                options={{ headerTitle: 'Appointments Title' }}
            />
        </AppointmentsStack.Navigator>
    );
}

export function ExploreNavigator() {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{ headerTitle: 'Explore Title' }}
            />
        </ExploreStack.Navigator>
    );
}

export function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: 'Profile Title' }}
            />
        </ProfileStack.Navigator>
    );
}

