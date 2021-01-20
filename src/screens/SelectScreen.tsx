import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import React, {useState} from 'react';
import {Image, Platform, SectionList, Text, View, TouchableWithoutFeedback} from 'react-native';
import {AntDesign, Foundation, Ionicons} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'
import BottomSheet from "reanimated-bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function SelectScreen() {

    const navigation = useNavigation()
    const route = useRoute()
    const {id, name, icon, services} = route.params

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    let selectedCurrentDate = ''

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        selectedCurrentDate = selectedDate
    };

    let itemTitle = ''

    const onClick = () => {navigation.navigate('ResultScreen', {
        name: name, itemTitle: itemTitle, selectedDate: selectedCurrentDate
    })}

    const bottomSheetContent = () => (
        <View style={styles.bottomSheetContentContainer}>
            <View style={styles.bottomSheetHeaderContainer}>
                <Text style={styles.bottomSheetHeaderTitle}>Select Date</Text>
                <AntDesign name="close" size={24} color="black"/>
            </View>
            <View style={styles.datePickerContainer}>
                <DateTimePicker
                    value={date}
                    mode='date'
                    display='default'
                    onChange={onChange}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback onPress={onClick}>
                    <View style={[styles.button, {backgroundColor: Colors.light.tint}]}>
                        <Text>Show 124 results</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text>Skip</Text>
                </View>
            </View>
        </View>
    );

    const sheetRef = React.useRef(null);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.leftHeaderContainer}>
                    <Image source={{uri: icon}} style={styles.leftHeaderIcon}/>
                    <Text style={styles.leftHeaderName}>Select {name}</Text>
                </View>
                <AntDesign name="close" size={24} color="black" onPress={() => navigation.goBack()}/>
            </View>
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
            <BottomSheet
                ref={sheetRef}
                snapPoints={[500, 300, 0]}
                borderRadius={50}
                renderContent={bottomSheetContent}
                initialSnap={2}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        backgroundColor: Colors.light.background,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginTop: 40
    },
    leftHeaderContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftHeaderIcon: {
        width: 30,
        height: 30,
        marginEnd: 10
    },
    leftHeaderName: {
        fontSize: 14,
        fontWeight: "bold"
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
    bottomSheetHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10
    },
    bottomSheetHeaderTitle: {
        fontWeight: "bold"
    },
    bottomSheetContentContainer: {
        backgroundColor: '#eeeeee',
        padding: 16,
        height: 500
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: Colors.light.tabIconDefault,
        margin: 5,
        borderRadius: 50,
        padding: 10,
        width: 150,
        alignItems: "center",
        textAlign: "center"
    },
    datePickerContainer: {
        margin: 20
    }
});