import React from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity,Animated,Easing } from 'react-native';


const Anim6 = () => {

    const animate = new Animated.Value(0);


    const startanim = ()=>{
       
            
            Animated.sequence([
              Animated.timing(animate, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
              Animated.timing(animate, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
              Animated.timing(animate, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
            ]).start();
          
    }
    const animstyle={
        transform: [{
            rotate: animate.interpolate({
              inputRange: [-1, 1],
              outputRange: ['-0.1rad', '0.1rad']
            })
          }]
    }


    return (
    <>
    <View style={styles.container}>
        <Animated.View style={[styles.myInfoContainer,animstyle]}>
            <TextInput style={styles.myTextInput}  placeholder={'Email'} />
            <TextInput style={styles.myTextInput} placeholder={'Telofon'} />
            <TouchableOpacity style={styles.myTounch} onPress={()=>startanim()}>
                <Text>
                    Edit
                </Text>
            </TouchableOpacity>
        </Animated.View>  

    </View>
    </>
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:10,       
    },  
    myText:{  
    },
    myTextInput:{
       padding:10,
       borderWidth:3,
       borderColor:'#ccc',
       width:'100%',
       marginBottom:10,
       fontSize:16,
    },
    myInfoContainer:{
        width:'90%',
        height:'20%',
        margin:10,
        alignItems:'center'
     
    },
    myTounch:{
        backgroundColor:'red',
        padding:10,
        width:'20%',
        alignItems:'center',
        position:'absolute',
        right:0,
        bottom:0,
        borderRadius:35  
    },
    myTounch2:{
        backgroundColor:'red',
        padding:10,
        width:'20%',
        alignItems:'center',    
        borderRadius:35  
    }
})


export default Anim6;
