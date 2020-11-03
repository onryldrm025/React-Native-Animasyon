import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity,TouchableWithoutFeedback } from 'react-native'


const Anim5 = () => {
    
    const animation2 = new Animated.Value(0);
    const startAnimation = () => {
        Animated.timing(animation2, {
            duration: 3000,
            toValue: 1,
            useNativeDriver:false //true desteklemiyor dikkatt!!!!
        }).start();
    };
    const interpolate = animation2.interpolate({
        inputRange: [0, 1],
        outputRange: ['yellow', 'red']
    })
    const animatedStyle = {
     
        backgroundColor: interpolate
    };
    return (
        <View >
            <TouchableWithoutFeedback
                onPress={() => startAnimation()}>
                <Animated.View
                    style={[styles.myView,animatedStyle]}>
                    <Text>Dokun Bana (Animasyon 5)</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
};
const styles = StyleSheet.create({
    myView:{
        padding:20,
        margin:5
    }
})


export default Anim5;