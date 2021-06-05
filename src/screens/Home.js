import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput,} from 'react-native-gesture-handler';

import CourseList from '../screens/CourceList';


export default class Home extends React.Component{
    render(){
        return(
            <ImageBackground
            source={require('../images/Home.png')}
            style={{width:"100%", height:"100%"}}
            >
                <ScrollView>

                    <View style={{
                        width:"100%",
                        alignItems:'flex-end',
                        paddingHorizontal:20
                    }}>
                        <View style={{
                            paddingHorizontal:12,
                            paddingVertical:15,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#d1a0a7"
                        }}>
                            <Image
                            source={require('../images/hum.png')}
                            style={{height:15, width:20}}
                            />
                        </View>
                    </View>

                    <Text style={{
                        paddingHorizontal:20,
                        fontSize:35,
                        paddingTop:40,
                        color:"#FFF"
                    }}>
                        Welcome Back Mikolaj
                    </Text>

                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:"#FFF",
                        paddingTop:10,
                        borderRadius:12,
                        marginHorizontal:20,
                        marginTop:20
                    }}>
                        <TextInput
                        placeholder="Search for new knowledge"
                        placeholderTextColor="#345c74"
                        style={{
                            fontSize:15,
                            width:280,
                            paddingHorizontal:20,
                            paddingBottom:6
                        }}
                        />
                        <Image
                        source={require('../images/sear.png')}
                        style={{height:14,width:14}}
                        />
                    </View>

                    <View style={{
                        flexDirection:"row",
                        backgroundColor:"#FFF2F2",
                        marginTop:15,
                        marginHorizontal:15,
                        borderRadius:20,
                        paddingVertical:30,
                        paddingLeft:30
                    }}> 
                    <View>
                        <Text style={{
                            color:"#345c74",
                            fontSize:20,
                            width:250,
                            paddingRight:100
                        }}>
                            Start Learning new staff
                        </Text>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Cources')}
                        style={{
                            flexDirection:"row",
                            backgroundColor:"#f58084",
                            alignItems:"center",
                            marginTop:20,
                            width:150,
                            paddingVertical:10,
                            borderRadius:14,
                            paddingHorizontal:10
                        }}
                        >
                            <Text style={{
                                color:"#FFF",
                                fontSize:12,
                                fontWeight:"bold"
                            }}>Categories</Text>
                            <Image
                            source={require('../images/a3.png')}
                            style={{marginLeft:20, width:8, height:8}}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image
                    source={require('../images/undraw.png')}
                    style={{marginLeft:-80, marginTop:35}}
                    />
                    </View>

                    <Text style={{
                        color:"#345c74",
                        fontWeight:"bold",
                        fontSize:20,
                        paddingHorizontal:20,
                        marginTop:20,
                        marginBottom:10
                    }}>Cources in progress</Text>

                    <CourseList
                    img={require('../images/xd.png')}
                    title="Adobe XD Prototyping"
                    bg="#fdddf3"
                    />

                     <CourseList
                    img={require('../images/sketch.png')}
                    title="Sketch shortcuts and tricks"
                    bg="#fef8e3"
                    />

                     <CourseList
                    img={require('../images/ae.png')}
                    title="UI Motion Design in After Effects"
                    bg="#fcf2ff"
                    />
                    
                </ScrollView>

            </ImageBackground>
        );
    }
}