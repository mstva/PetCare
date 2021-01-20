import {StyleSheet} from "react-native";
import * as React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {PetService} from "../../types";
import Colors from "../constants/Colors";

export type PetServiceItemProps = { petService: PetService }

export default function PetServiceItem(props: PetServiceItemProps) {
    const { petService } = props
    const navigation = useNavigation()
    const onClick = () => {navigation.navigate('SelectScreen', {
        id: petService.id,
        name: petService.service_name,
        icon: petService.service_icon,
        services: petService.services
    })}

    return (
        <View>
            <TouchableWithoutFeedback  onPress={onClick}>
                <View style={styles.petServiceContainer}>
                    <Image source={{ uri: petService.service_icon }} style={styles.petServiceIcon}/>
                    <Text style={styles.petServiceName}>{petService.service_name}</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
}


const styles = StyleSheet.create({
    petServiceContainer: {
        backgroundColor: Colors.light.background,
        borderRadius: 25,
        width: 100,
        height: 105,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1,},
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    petServiceIcon: {
        width: 50,
        height: 50
    },
    petServiceName: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 10
    }
});