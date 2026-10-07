import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../redux/counterSlice';
import { RootState } from '../redux/store';

export default function SettingsScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.description}>
        This is the Settings screen
      </Text>

      <Text style={styles.count}>
        {count}
      </Text>

      <Text style={styles.label}>
        Current Count
      </Text>

      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 30,
  },

  count: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  label: {
    fontSize: 18,
    marginBottom: 25,
  },

  button: {
    width: 160,
  },
});