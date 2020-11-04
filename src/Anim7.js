import React from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'


const Anim7 = () => {
    const animm = new Animated.Value(0);


    const togleMenu = () => {
        Animated.timing(animm, {
            toValue: animm._value == 0 ? 1 : 0,
            duration: 500,
            useNativeDriver: false
        }).start();

    }

    const animstyle = {
        transform: [{
            rotate: animm.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '55deg']
            })
        }],
        
    }

    const animstyle1 = {
        transform: [{
            translateY: animm.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -80]
            })
        }]
    }

    const animstyle2 = {
        transform: [{
            translateY: animm.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -130]
            })
        }]
    }
    const animstyle3 = {
        transform: [{
            translateX: animm.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -70]
            })
        }]
    }
    const animstyle4 = {
        transform: [{
            translateX: animm.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 70]
            })
        }]
    }


    return (

        <View style={styles.container}>

            <Animated.View style={[styles.myButton2, animstyle1]}>
                <Icon name={'plus'} color={'red'} size={32} />
            </Animated.View>

            <Animated.View style={[styles.myButton2, animstyle2]}>
                <Icon name={'plus'} color={'red'} size={32} />
            </Animated.View>

            <Animated.View style={[styles.myButton2, animstyle3]}>
                <Icon name={'plus'} color={'red'} size={32} />
            </Animated.View>

            <Animated.View style={[styles.myButton2, animstyle4]}>
                <Icon name={'plus'} color={'red'} size={32} />
            </Animated.View>


            <Animated.View style={[styles.myButton, animstyle]}>
                <TouchableOpacity onPress={() => togleMenu()}>
                    <Icon name={'plus'} color={'white'} size={32} />
                </TouchableOpacity>
            </Animated.View>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    myButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        width: 60,
        backgroundColor: '#E56399',
        height: 60,
        borderRadius: 60 / 2,
        shadowRadius: 30,
        shadowColor: 'blue',
        shadowOpacity: 0.3,
        shadowOffset: { height: 100 },
        borderColor: 'white',
        borderWidth: 1,
    
    },
    myButton2: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        width: 35,
        backgroundColor: 'white',
        height: 35,
        borderRadius: 45 / 2,
    }
})
export default Anim7;