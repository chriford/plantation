import React from 'react';
import COLORS from '../../consts/colors';
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native'

const OnBoardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='blue' />
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/onboardscreen4.jpg')}>
                <View style={styles.details}>
                    <Text style={{ color: COLORS.white, fontSize: 35, fontWeight: 'bold' }}>Discover</Text>
                    <Text style={{ color: COLORS.white, fontSize: 35, fontWeight: 'bold' }}>world with us</Text>
                    <Text style={{ color: COLORS.white, lineHeight: 25 }}>
                        lorem ipsum dolor sit amet, consectetur adip Lorem ipsum , vel quidem dicta expedita dolor hic saepe. Cum molestiae dolorem aliquam natus illum!
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { navigation.navigate("HomeScreen") }}>
                        <View style={styles.btn}>
                            <Text>Get started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        height: "50%",
        position: "absolute",
        paddingHorizontal: 40,
        bottom: 0,
    },
    btn: {
        bottom: -90,
        height: 50,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        marginTop: 20,
        borderRadius: 7,

    }
})
export default OnBoardScreen
