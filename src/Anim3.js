import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'



const Anim3 = () => {
    const animation = new Animated.Value(0);
    const animation2 = new Animated.Value(500);
   
    
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 500,
            duration: 500,
            useNativeDriver:true
        }
        ).start(()=>{
            
            Animated.timing(animation2, {
                toValue: 0,
                duration: 200,
                useNativeDriver:true
            }
            ).start()
        })
    }
    const animatedStyle={
        transform:[{
            translateX:animation,
        }]
    };
    const animatedStyle2={
        transform:[{
            translateX:animation2,
        }]
    };

    return (        
        <>
        <View style={{position:'relative',margin:5}}>
        <Animated.View
            style={[styles.myBox, animatedStyle]}>
            <Text>Mâlâyaniyle iştigal, maksadı geri bırakır!</Text>
            
        </Animated.View>
       
        <Animated.View style={[styles.myViev,animatedStyle2]}>
            <Text>Deneme</Text>
       
        </Animated.View>
        </View>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>startAnimation()}>
            <Text style={styles.myText}>
                Animasyon Başlat 3
            </Text>
            </TouchableOpacity>
            
        </>
    )

}

const styles = StyleSheet.create({
    myBox:{
        backgroundColor:'yellow',
        padding:20,
        margin:5
    },
    myText:{
        fontSize:25
    },
    myViev:{
        backgroundColor:'red',
        padding:20,
        marginRight:85,
        position:'absolute',
        width:'100%',
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default Anim3;