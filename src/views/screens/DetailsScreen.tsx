import React from 'react';
import COLORS from '../../consts/colors';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({ navigation, route }) => {
    const place = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground source={place.image} style={{ flex: 1 }} >
                <View style={styles.header}>
                    <Icon name="arrow-back-ios" size={28} color={COLORS.white} onPress={() => navigation.navigate("HomeScreen")} />
                    <Icon name="more-vert" size={28} color={COLORS.white} onPress={() => navigation.navigate("HomeScreen")} />
                </View>
                <View style={styles.imageDetails}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 28,
                        color: COLORS.white,
                        width: '70%',
                        marginBottom: 30
                    }}>{place.name}</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Icon name="star" size={28} color={'yellow'} onPress={() => navigation.navigate("HomeScreen")} />
                        <Text style={{ color: COLORS.white, fontSize: 18 }}>5.0</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="favorite" size={30} color={COLORS.red} />
                </View>
                <View style={{
                    marginTop: 10, flexDirection: 'row',
                }}>
                    <Icon name="place" size={30} color={COLORS.primary} />
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.primary,
                        fontWeight: 'bold',
                        marginLeft: 5
                    }}>{place.location}</Text>
                </View>
                <Text style={{
                    marginTop: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: COLORS.dark
                }}>About the place</Text>
                <View>
                    <Text style={{
                        marginTop: 12,
                        fontSize: 16,
                        lineHeight: 20,
                        color: COLORS.dark
                    }}>
                        {place.details}
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{
                    color: COLORS.white,
                    fontSize: 20,
                }}>$100.00/PER DAY</Text>
                <View style={styles.btn}>
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.primary,
                    }}>Book now</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        marginTop: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    footer: {
        height: 70,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10
    },
    imageDetails: {
        flexDirection: 'row',
        padding: 20,
        width: "100%",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 30,
    },
    iconContainer: {
        height: 60,
        width: 60,
        position: "absolute",
        top: -20,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        elevation: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        top: -20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    }
})

export default DetailsScreen