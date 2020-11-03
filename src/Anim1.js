import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'



const Anim1 = () => {
    const animation = new Animated.Value(1);
    const startAnimation = () => {
       

        Animated.timing(animation, {
          
            toValue: 0,
            duration: 300,
            useNativeDriver:true
        }
        ).start()
    }

    return (        
        <>
        <Text>Animasyon 1</Text>
            <Animated.View
                style={[styles.myBox, { opacity: animation }]}>
                <Text>Mâlâyaniyle iştigal, maksadı geri bırakır!</Text>

            </Animated.View>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => startAnimation()}>
                <Text style={styles.myText} >Animasyon Başlat</Text>
                </TouchableOpacity>
        </>
    )

}

const styles = StyleSheet.create({
    myBox: {
        backgroundColor: 'red',
        padding: 20,
        margin: 5,
    },
    myText: {
        fontSize: 24,
        color: 'black'

    }

})

export default Anim1;