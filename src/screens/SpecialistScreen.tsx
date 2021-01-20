import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";

export default function SpecialistScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        backgroundColor: Colors.light.background,
    },
});