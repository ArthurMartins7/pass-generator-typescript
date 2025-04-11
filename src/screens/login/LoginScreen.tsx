import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>SIGN IN</Text>
          <TextInput style={styles.textInput}>KAKKAKAK</TextInput>
          <TextInput style={styles.textInput}>KAKAKA</TextInput>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#8d0000',
        fontWeight: 'bold',
    },
    textInput: {
        color: '#c31208',
        //width: 150,
    }
  });
  