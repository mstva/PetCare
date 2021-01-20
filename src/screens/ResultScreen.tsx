import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {EvilIcons, Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import SpecialistScreen from "./SpecialistScreen";
import ClinicScreen from "./ClinicScreen";
import SearchBar from "../components/SearchBar";
import {useRoute} from "@react-navigation/native";
import moment from "moment";
import SpecialistCardItem from "../components/SpecialistCardItem";

const Tab = createMaterialTopTabNavigator();

export function ResultScreenTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.light.tint,
            inactiveTintColor: 'gray',
            indicatorStyle: {backgroundColor: 'white'},
        }}>
            <Tab.Screen name="Specialist" component={SpecialistScreen} />
            <Tab.Screen name="Clinic" component={ClinicScreen} />
        </Tab.Navigator>
    );
}

export default function ResultScreen() {

    const route = useRoute()
    const {name, itemTitle, selectedDate} = route.params

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topNavHeader}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
                    <ResultScreenTabs/>
                    <View style={styles.mapContainer}>
                        <EvilIcons name="location" size={20} color={Colors.light.tint} />
                        <Text style={styles.mapText}>Map</Text>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <SimpleLineIcons name={'magnifier'} size={20} style={styles.searchIcon} />
                    <TextInput placeholder={'Search'} style={styles.searchInput} value={name}/>
                </View>
                <View style={styles.filterHeader}>
                    <View style={styles.selectedDataContainer}>
                        <View style={styles.dateContainer}>
                            <Fontisto name="date" size={20} color="white" />
                            <Text style={styles.dateText}>{moment(selectedDate).format("Do MMM")}</Text>
                        </View>
                        <View style={styles.specialistContainer}>
                            <Text style={styles.specialistText}>{itemTitle}</Text>
                        </View>
                    </View>
                    <View style={styles.filterContainer}>
                        <Ionicons name="ios-options" size={20} color="black" />
                        <Text style={styles.filterText}>Filter</Text>
                    </View>
                </View>
                <SpecialistCardItem/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Layout.window.width,
        backgroundColor: Colors.light.background,
    },
    topNavHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },
    mapContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    mapText: {
        color: Colors.light.tint
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: Colors.light.tabIconDefault,
        borderRadius: 25,
        paddingHorizontal: 11,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 5
    },
    searchInput: {
        paddingHorizontal: 10,
    },
    searchIcon: {},
    filterHeader: {
        width: Layout.window.width,
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
        marginVertical: 5
    },
    selectedDataContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    dateContainer: {
        flexDirection: "row",
        backgroundColor: Colors.light.tint,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center",
        marginEnd: 10
    },
    dateText: {
        color: Colors.light.background,
        paddingStart: 10
    },
    specialistContainer: {
        flexDirection: "row",
        backgroundColor: Colors.light.tint,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    specialistText: {
        color: Colors.light.background
    },
    filterContainer: {
        flexDirection: "row",
        backgroundColor: Colors.light.tabIconDefault,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center",
    },
    filterText: {
        paddingStart: 10
    }
});