import {StyleSheet} from "react-native";
import Layout from "../constants/Layout";
import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import PetServices from "../data/pet_services";
import PetServiceItem from "./PetServiceItem";

const formatData = (data: any, numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;

export default function PetServiceGrid() {
    return (
        <View style={styles.container}>
            <FlatList
                data={formatData(PetServices, numColumns)}
                renderItem={({ item }) => <PetServiceItem petService={item}/>}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        alignItems: "center",
    }
});