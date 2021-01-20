import {SectionList, StyleSheet, Text} from "react-native";
import React from 'react';
import {View} from 'react-native';
import {Foundation, Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useNavigation, useRoute} from "@react-navigation/native";


export default function SpecialistList() {

    const navigation = useNavigation()
    const route = useRoute()
    const {id, name, icon, services} = route.params

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <SectionList
                    sections={services}
                    keyExtractor={(item, index) => item + index}
                    renderSectionHeader={
                        ({section: {title}}) => (
                            <View style={styles.sectionHeaderContainer}>
                                <Foundation name="graph-trend" size={24} color="black"/>
                                <Text style={styles.sectionHeader}>{title}</Text>
                            </View>
                        )}
                    renderItem={({item}) => (
                        <View style={styles.sectionDataContainer}>
                            <Text style={styles.sectionData} onPress={
                                () => {
                                    sheetRef.current.snapTo(0)
                                    itemTitle = item
                                }}>{item}</Text>
                            <Ionicons name="md-add-circle" size={24} color={Colors.light.tint}/>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    },
    sectionContainer: {
        margin: 20
    },
    sectionHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginStart: 10
    },
    sectionHeader: {
        color: Colors.light.tint,
        fontWeight: "bold",
        margin: 10
    },
    sectionDataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginStart: 40,
        marginEnd: 20
    },
    sectionData: {},
});