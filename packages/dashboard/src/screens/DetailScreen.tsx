import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const showNotImplementedAlert = () => Alert.alert('Not implemented yet');

const DetailScreen = () => {
  const route = useRoute();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Details page title
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          Manage
        </Button>
      </View>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          My Details Params: ${route.params && JSON.stringify(route.params)},
          path: ${route.path}, name: ${route.name}, key: ${route.key}
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          Manage
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  cardWidth: {
    width: 270,
  },
});

export default DetailScreen;
