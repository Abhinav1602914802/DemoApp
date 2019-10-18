import React from 'react';
import { ToastAndroid, StyleSheet, View } from 'react-native';

const ToastShowScreen = () => {
    return(
       ToastAndroid.show('Everything is fine')
    );
}

const Styles = StyleSheet.create({});

export default ToastShowScreen;