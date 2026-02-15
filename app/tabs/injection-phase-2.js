import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InjectionPhase2() {
  const router = useRouter();

  // Dummy file state (replace later with real picker)
  const [file] = useState({
    name: 'invoice.docm',
    type: '.docm',
    size: '58 KB',
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Injection Phase 2</Text>
        <TouchableOpacity onPress={() => router.push('/tabs/control-hub')}>
          <Ionicons name="home-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Drag & Drop Box */}
        <View style={styles.dragBox}>
          <Text style={styles.dragText}>Drag & Drop</Text>
        </View>

        {/* Select Individual Files Button */}
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectText}>Select Individual Files</Text>
        </TouchableOpacity>

        {/* File Details */}
        <View style={styles.fileInfo}>
          <View style={styles.fileRow}>
            <Text style={styles.label}>File Name</Text>
            <Text style={styles.value}>{file.name}</Text>
          </View>

          <View style={styles.fileRow}>
            <Text style={styles.label}>File Type</Text>
            <Text style={styles.value}>{file.type}</Text>
          </View>

          <View style={styles.fileRow}>
            <Text style={styles.label}>File Size</Text>
            <Text style={styles.value}>{file.size}</Text>
          </View>
        </View>

        {/* Start Injection Button */}
        <TouchableOpacity style={styles.injectButton}>
          <Text style={styles.injectText}>Start Injection</Text>
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
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },

  dragBox: {
    height: 120,
    borderWidth: 1.5,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  dragText: {
    fontSize: 18,
    color: '#444',
    fontWeight: '500',
  },

  selectButton: {
    backgroundColor: '#1976D2',
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  selectText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  fileInfo: {
    marginTop: 20,
  },

  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  label: {
    fontWeight: '600',
    fontSize: 15,
  },

  value: {
    fontSize: 15,
    color: '#333',
  },

  injectButton: {
    backgroundColor: '#1976D2',
    marginTop: 25,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },

  injectText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
