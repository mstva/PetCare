import * as React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export default function WelcomeText({username}) {
    return (
        <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeTextOne}>What are you</Text>
    <Text style={styles.welcomeTextTwo}>looking for, <Text style={styles.username}>{username}?</Text></Text>
        </View>
);
}

const styles = StyleSheet.create({
    welcomeTextContainer: {
        marginTop: 25,
        marginBottom: 10,
        marginStart: 20
    },
    welcomeTextOne: {
        fontSize: 35,
        fontWeight: "bold"
    },
    welcomeTextTwo: {
        fontSize: 35,
        fontWeight: "bold"
    },
    username: {
        color: Colors.light.tint
    },
});