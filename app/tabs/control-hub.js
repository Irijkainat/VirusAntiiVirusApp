import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function ControlHub() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Virus & Antivirus —{'\n'}Control Hub
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Start Injection')}
      >
        <Text style={styles.buttonText}>
          Start New Injection
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Scan Now')}
      >
        <Text style={styles.buttonText}>
          Scan Now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => router.push('/tabs/antivirus')}
      >
        <Text style={[styles.buttonText, styles.primaryText]}>
          Antivirus
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 40,
    color: '#111',
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 20,
    alignItems: 'center',

    // iOS Shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,

    // Android Shadow
    elevation: 4,
  },

  primaryButton: {
    backgroundColor: '#2F80ED',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
  },

  primaryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
