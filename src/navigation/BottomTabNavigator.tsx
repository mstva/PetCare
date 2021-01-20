import {SimpleLineIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {BottomTabParamList} from '../../types';
import {
    AppointmentsNavigator,
    ExploreNavigator,
    HomeNavigator,
    ProfileNavigator,
    SearchNavigator
} from "./StackTabNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                tabStyle: { paddingTop: 5 },
                labelStyle: { paddingVertical: 5 }
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="magnifier" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Appointments"
                component={AppointmentsNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="clock" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Explore"
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="compass" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <SimpleLineIcons size={22} style={{marginBottom: -3}} {...props} />;
}
