import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Starting } from './src/starting';

export default function App() {
  return (
      <View style={styles.container}>
        <Starting />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {

  }
})
