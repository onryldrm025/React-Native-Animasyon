import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'



const Anim2 = () => {
    const animation = new Animated.Value(0);
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: -300,
            duration: 1000,
            useNativeDriver:true
        }
        ).start( 
            ()=>{
                Animated.spring(animation, {
                    toValue: 0,
                    duration: 1000,
                    damping:8,
                    useNativeDriver:true
                }).start()
            }
        )
    }
    const animatedStyle={
        transform:[{
            translateY:animation,
        }]
    };

    return (        
        <>
        <Animated.View
            style={[styles.myBox, animatedStyle]}>
            <Text>Mâlâyaniyle iştigal, maksadı geri bırakır!</Text>
        </Animated.View>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>startAnimation()}>
            <Text style={styles.myText}>
                Animasyon Başlat 2
            </Text>
            </TouchableOpacity>
            
        </>
    )

}

const styles = StyleSheet.create({
    myBox:{
        backgroundColor:'blue',
        padding:20,
        margin:5
    },
    myText:{
        fontSize:25
    }


})

export default Anim2;