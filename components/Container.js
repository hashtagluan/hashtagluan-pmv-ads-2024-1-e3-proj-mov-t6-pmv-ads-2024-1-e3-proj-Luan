import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
});

export default Container;
