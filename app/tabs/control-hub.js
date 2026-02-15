import { useRouter } from 'expo-router';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default function ControlHub() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Virus & Antivirus —{'\n'}Control Hub
      </Text>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => console.log('Start Injection')}
      >
        <Text style={[styles.buttonText, styles.primaryText]}>
          Start New Injection
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Scan Now')}
      >
        <Text style={styles.buttonText}>Scan Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Antivirus')}
      >
        <Text style={styles.buttonText}>Antivirus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Reports')}
      >
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Help & Info')}
      >
        <Text style={styles.buttonText}>Help & Information</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,

    // Shadow for Android
    elevation: 3,
  },

  primaryButton: {
    backgroundColor: '#1976D2',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },

  primaryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
