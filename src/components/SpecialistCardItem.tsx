import {Image, SectionList, StyleSheet, Text} from "react-native";
import React from 'react';
import {View} from 'react-native';
import {Foundation, Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useNavigation, useRoute} from "@react-navigation/native";

const VeterinaryDentist = require('../../assets/images/Veterinary-Dentist.jpeg')

export default function SpecialistCardItem() {
    return (
        <View style={styles.container}>
            {/* <View style={{ flexDirection: "row" }}>
                <Image source={VeterinaryDentist} style={{ width: 60, height: 60, borderRadius: 10 }}/>
                <View>
                    <Text>Vasilenko Oksana</Text>
                    <Text>Veterinary Dentist</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>*****</Text>
                        <Text>125 Reviews</Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    },
});