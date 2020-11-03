import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'



const Anim4 = () => {
    const animation = new Animated.Value(1);

    const startAnimation= ()=>{
        Animated.timing(animation,{
            toValue:2,
            duration:300,
            useNativeDriver:true
        }).start()
    }

    const animatedStyle={
        transform:[{
            scale:animation,
            //scaleX:animation,
            //  scaleY:animation,
        }],
        
        
    };
   
    return (        
        <>
            <View>
                <Animated.View  style={[styles.myView,animatedStyle]}>
                    <Text>Selam</Text>
                    <Text>Animasyon</Text>
                 
                </Animated.View>
                <TouchableOpacity onPress={()=>startAnimation()} style={styles.myTouchable}><Text style={styles.myText}>Animasyon Başlat 4</Text></TouchableOpacity>
            </View>
            
        </>
    )

}

const styles = StyleSheet.create({
    myView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'cyan'
        
    },
    myTouchable:{
        alignItems:'center',
        
    },
    myText:{
        fontSize:24,
        marginTop:15
    }
    
})

export default Anim4;