import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import PetServiceGrid from "../../components/PetServiceGrid";
import WelcomeText from "../../components/WelcomeText";
import SearchBar from "../../components/SearchBar";

export default function SearchScreen() {
    return (
        <SafeAreaView>
            <SearchBar/>
            <WelcomeText username={'Jean'}/>
            <PetServiceGrid/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});