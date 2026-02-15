
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ScanScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('File');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Virus Scanner</Text>
          <TouchableOpacity onPress={() => router.push('/tabs/control-hub')}>
            <Text style={{ fontSize: 20 }}>🏠</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {['File', 'Folder', 'Drive'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* File Selection Box */}
        <View style={styles.selectionBox}>
          <Text style={styles.fileIcon}>📄</Text>
          <Text style={styles.selectionText}>
            1 Word Files Selected
          </Text>
        </View>

        {/* Start Scan Button */}
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => router.push('/tabs/scanresults')}
        >
          <Text style={styles.scanText}>START SCAN</Text>
        </TouchableOpacity>

        {/* View Summary Button */}
        <TouchableOpacity
          style={styles.summaryButton}
          onPress={() => router.push('/tabs/scanresults')}
        >
          <Text style={styles.summaryText}>
            📊 VIEW SCAN RESULTS SUMMARY
          </Text>
        </TouchableOpacity>

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

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 15,
    padding: 5,
    marginBottom: 25,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },

  tabText: {
    fontWeight: '500',
    color: '#555',
  },

  activeTabText: {
    color: '#2563EB',
    fontWeight: 'bold',
  },

  selectionBox: {
    borderWidth: 2,
    borderColor: '#2563EB',
    borderStyle: 'dashed',
    borderRadius: 20,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  fileIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  selectionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },

  scanButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },

  scanText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  summaryButton: {
    backgroundColor: '#6D28D9',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },

  summaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
