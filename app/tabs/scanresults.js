import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ScanResults() {
  const router = useRouter();

const [selectedFile, setSelectedFile] = useState(null);

  const threatsFound = 0;
  const safeFiles = 1;

  /* -------- Pick File From Phone -------- */
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.canceled === false) {
        setSelectedFile(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to select file');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Scan Results</Text>

          {/* Better Back Button */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        </View>

        {/* Result Cards */}
        <View style={styles.resultRow}>
          <View style={styles.threatCard}>
            <Text style={styles.threatNumber}>{threatsFound}</Text>
            <Text style={styles.threatText}>THREATS FOUND</Text>
          </View>

          <View style={styles.safeCard}>
            <Text style={styles.safeNumber}>{safeFiles}</Text>
            <Text style={styles.safeText}>SAFE FILES</Text>
          </View>
        </View>

        {/* Filter */}
        <Text style={styles.sectionLabel}>Filter by Category</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text>Show Infected Files (Threats)</Text>
          <Text>▼</Text>
        </TouchableOpacity>

        {/* File Selection */}
        <Text style={styles.sectionLabel}>Select File to Take Action</Text>
        <TouchableOpacity style={styles.selectBox} onPress={pickFile}>
          <Text style={{ color: selectedFile ? '#000' : '#777' }}>
            {selectedFile || 'Tap to select a file'}
          </Text>
          <Text>📁</Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[
              styles.quarantineBtn,
              !selectedFile && { opacity: 0.5 },
            ]}
            disabled={!selectedFile}
          >
            <Text style={styles.quarantineText}>
              📦 QUARANTINE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.repairBtn,
              !selectedFile && { opacity: 0.5 },
            ]}
            disabled={!selectedFile}
          >
            <Text style={styles.repairText}>
              🔧 REPAIR
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  backIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  threatCard: {
    flex: 1,
    backgroundColor: '#F8D7DA',
    padding: 20,
    borderRadius: 15,
    marginRight: 10,
    alignItems: 'center',
  },

  safeCard: {
    flex: 1,
    backgroundColor: '#D4EDDA',
    padding: 20,
    borderRadius: 15,
    marginLeft: 10,
    alignItems: 'center',
  },

  threatNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DC2626',
  },

  threatText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#B91C1C',
    marginTop: 5,
  },

  safeNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#16A34A',
  },

  safeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#15803D',
    marginTop: 5,
  },

  sectionLabel: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
  },

  dropdown: {
    backgroundColor: '#E5E7EB',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2563EB',
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  quarantineBtn: {
    flex: 1,
    backgroundColor: '#9CA3AF',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 10,
  },

  quarantineText: {
    fontWeight: 'bold',
    color: '#fff',
  },

  repairBtn: {
    flex: 1,
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: 10,
  },

  repairText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
