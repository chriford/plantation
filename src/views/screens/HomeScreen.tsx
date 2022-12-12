import React from 'react';
import COLORS from '../../consts/colors';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../../consts/places';

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
    const categoryIcons = [
        <Icon name="flight" size={25} color={COLORS.primary} />,
        <Icon name="beach-access" size={25} color={COLORS.primary} />,
        <Icon name="near-me" size={25} color={COLORS.primary} />,
        <Icon name="place" size={25} color={COLORS.primary} />,
    ]
    interface IPlace {
        id: number;
        name: string;
        location: string;
        image: string;
        details: string;
    }
    const ListCategory = () => {
        return <View style={styles.categoryContainer}>
            {categoryIcons.map((icon, index) => {
                return (
                    <View key={index} style={styles.iconContainer}>{icon}</View>
                )
            })}
        </View>
    }

    const Card = ({ place }) => {
        var place = place.item;
        return <TouchableOpacity activeOpacity={0.9} onPress={() => {navigation.navigate("DetailsScreen", place) }}>
            <ImageBackground
                style={styles.cardImage}
                source={place.image}
            >
                <Text style={{
                    marginTop: 20,
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    {place.name}
                </Text>
                <View style={{
                    justifyContent: 'space-between',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="place" size={25} color={COLORS.white} />
                        <Text style={{ color: COLORS.white }}>{place.location}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" size={25} color={'yellow'} />
                        <Text style={{ color: COLORS.white }}>5.0</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    }

    const RecommendCard = ({ place }) => {
        var place = place.item;
        return <TouchableOpacity activeOpacity={0.9} onPress={() => { console.log(`viewing this place! : ${place.id}`) }}>
            <ImageBackground
                style={styles.rmCardImage}
                source={place.image}
            >
                <Text style={{
                    marginTop: 10,
                    color: COLORS.white,
                    fontSize: 22,
                    fontWeight: 'bold',
                }}>
                    {place.name}
                </Text>
                <View style={{
                    justifyContent: 'space-between',
                    flex: 1,
                    alignItems: 'flex-end',
                }}>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="place" size={25} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, marginLeft: 5 }}>{place.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={25} color={'yellow'} />
                            <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
                        </View>
                    </View>
                    <Text style={{ color: COLORS.white, fontSize: 13 }}>
                        {place.details}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            <View style={styles.header}>
                <Icon name='sort' size={28} color={COLORS.white} />
                <Icon name='notifications-none' size={28} color={COLORS.white} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    height: 120,
                    paddingHorizontal: 20,
                    backgroundColor: COLORS.primary
                }}>
                    <View>
                        <Text style={styles.headerTitle}>Expore the</Text>
                        <Text style={styles.headerTitle}>beautiful place</Text>
                        <View style={styles.inputContainer}>
                            <Icon name='search' size={28} />
                            <TextInput placeholder='Search for a place' style={{ color: COLORS.secondary }} />
                        </View>
                    </View>
                </View>
                <ListCategory />
                <Text style={styles.sectionTitle}>Places</Text>
                <View>
                    <FlatList
                        horizontal
                        contentContainerStyle={{ paddingLeft: 20 }}
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={place => <Card place={place} />} />
                </View>
                <Text style={styles.sectionTitle}>Recommended</Text>
                <View>
                    <FlatList
                        horizontal
                        snapToInterval={width - 30}
                        contentContainerStyle={{ paddingLeft: 20, flexDirection: 'row' }}
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={place => <RecommendCard place={place} />} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    inputContainer: {
        top: 90,
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: "100%",
        position: "absolute",
        borderRadius: 20,
        elevation: 12,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 60
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    header: {
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.primary
    },
    headerTitle: {
        fontSize: 23,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 10,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    rmCardImage: {
        height: 200,
        width: width - 40,
        marginRight: 10,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    }
})

export default HomeScreen;