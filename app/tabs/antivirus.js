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

export default function Antivirus() {
  const router = useRouter();
  const [quarantinedFiles, setQuarantinedFiles] = useState([]);

  const files = [
    { name: 'virus.docm', status: 'Infected', virus: 'Virus 1' },
    { name: 'new.dotm', status: 'Clean', virus: 'Virus 2' },
    { name: 'main.xlsm', status: 'Infected', virus: 'Virus 2' },
    { name: 'fyp.pptm', status: 'Infected', virus: 'Virus 1' },
    { name: 'new.docm', status: 'Clean', virus: 'Virus 1' },
  ];

  const pickQuarantinedFiles = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ multiple: true });
      if (result.type === 'success') {
        setQuarantinedFiles(prev => [...prev, result]);
      }
    } catch (err) {
      console.log('Error picking files:', err);
    }
  };

  const startDisinfection = () => {
    if (quarantinedFiles.length === 0) {
      Alert.alert('No files selected', 'Please select files to disinfect.');
      return;
    }

    // For demo: just show an alert
    Alert.alert(
      'Disinfection Started',
      `Disinfecting ${quarantinedFiles.length} file(s)...`
    );
    setQuarantinedFiles([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Antivirus</Text>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Scanned Files</Text>

        {/* Table Header */}
        <View style={[styles.row, styles.tableHeader]}>
          <Text style={[styles.cell, styles.headerText]}>File Name</Text>
          <Text style={[styles.cell, styles.headerText]}>Status</Text>
          <Text style={[styles.cell, styles.headerText]}>Virus</Text>
        </View>

        {/* Table Rows */}
        {files.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text
              style={[
                styles.cell,
                item.status === 'Infected' ? styles.infected : styles.clean,
              ]}
            >
              {item.status}
            </Text>
            <Text style={styles.cell}>{item.virus}</Text>
          </View>
        ))}

        {/* Quarantine Section */}
        <Text style={styles.sectionTitle}>Quarantined Files</Text>

        <TouchableOpacity style={styles.dropdown} onPress={pickQuarantinedFiles}>
          <Text style={styles.dropdownText}>
            {quarantinedFiles.length > 0
              ? `${quarantinedFiles.length} file(s) selected`
              : 'Select Quarantined Files'}
          </Text>
          <Text>▼</Text>
        </TouchableOpacity>

        {/* Disinfection Button */}
        <TouchableOpacity
          style={[
            styles.disinfectBtn,
          ]}        
        >
          <Text style={styles.disinfectText}>Start Disinfection</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  backArrow: {
    fontSize: 20,
    marginRight: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },

  tableHeader: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#AAA',
  },

  cell: {
    flex: 1,
    fontSize: 14,
  },

  headerText: {
    fontWeight: '600',
  },

  infected: {
    color: '#E53935',
    fontWeight: '600',
  },

  clean: {
    color: '#43A047',
    fontWeight: '600',
  },

  dropdown: {
    marginTop: 10,
    backgroundColor: '#EAEAEA',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownText: {
    fontSize: 14,
  },

  disinfectBtn: {
    marginTop: 25,
    backgroundColor: '#5E4B8B',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },

  disinfectText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
