import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {SimpleLineIcons} from "@expo/vector-icons";
import {useState} from "react";
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";


export default function SearchBar() {

    const [message, setMessage] = useState('')

    return (
        <View style={styles.searchContainer}>
            <TextInput
                placeholder={'Search'}
                style={styles.searchInput} multiline
                value={message}
                onChangeText={setMessage}
            />
            <SimpleLineIcons name={'magnifier'} size={30} style={styles.searchIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        backgroundColor: Colors.light.background,
        borderRadius: 25,
        alignItems: "flex-end",
        paddingHorizontal: 11,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginTop: 30
    },
    searchIcon: {
        color: Colors.light.tint
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 5
    }
});