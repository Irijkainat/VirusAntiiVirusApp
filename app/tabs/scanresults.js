import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ScanResults() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState("virus.exe");

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
    });

    if (!result.canceled) {
      setSelectedFile(result.assets[0].name);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Scan Results</Text>

        <TouchableOpacity onPress={() => router.push('/tabs/scan')}>
          <Text style={styles.backText}>←  Back to Scan</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Section */}
      <Text style={styles.label}>Filter Results</Text>
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Show Infected Files</Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      {/* Select File */}
      <Text style={styles.label}>Select File to Take Action</Text>
      <TouchableOpacity style={styles.selectBox} onPress={pickFile}>
        <Text style={styles.selectText}>
          {selectedFile}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.quarantineBtn}>
          <Text style={styles.quarantineText}>🗑  QUARANTINE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.repairBtn}>
          <Text style={styles.repairText}>🔧  REPAIR (Clean)</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  backText: {
    fontSize: 14,
    color: '#333',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 15,
  },

  dropdown: {
    backgroundColor: '#EAEAEA',
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  dropdownText: {
    fontSize: 15,
    color: '#333',
  },

  selectBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#2F80ED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectText: {
    fontSize: 15,
    color: '#333',
  },

  arrow: {
    fontSize: 14,
    color: '#555',
  },

  bottomRow: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    flexDirection: 'row',
  },

  quarantineBtn: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginRight: 10,
  },

  quarantineText: {
    fontWeight: '600',
    color: '#333',
  },

  repairBtn: {
    flex: 1,
    backgroundColor: '#2F80ED',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginLeft: 10,
    elevation: 4,
  },

  repairText: {
    fontWeight: '600',
    color: '#fff',
  },
});
