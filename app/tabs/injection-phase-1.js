import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InjectionPhase1() {
  const router = useRouter();

  const [mutationLevel, setMutationLevel] = useState('Medium');
  const [replicationType, setReplicationType] = useState('Local');
  const [payloadType, setPayloadType] = useState('');
  const [behaviour, setBehaviour] = useState('Macro_Create_In_Template');

  return (
   <SafeAreaView style={styles.container}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 40 }}
  >

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Injection Phase 1</Text>
        <TouchableOpacity onPress={() => router.push('/tabs/control-hub')}>
            <Text style={{ fontSize: 20 }}>🏠</Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Virus Family */}
        <Text style={styles.label}>Virus Family</Text>
        <TextInput
          style={styles.input}
          value="Macro Virus"
          editable={false}
        />

        {/* Specific Behaviour */}
        <Text style={styles.label}>Specific Behaviour</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={behaviour}
            onValueChange={(itemValue) => setBehaviour(itemValue)}
          >
            <Picker.Item
              label="Macro_Create_In_Template"
              value="Macro_Create_In_Template"
            />
            <Picker.Item
              label="Macro_Overwrite_File"
              value="Macro_Overwrite_File"
            />
          </Picker>
        </View>

        {/* Mutation Level */}
        <Text style={styles.label}>Mutation Level</Text>
        <View style={styles.row}>
          {['Low', 'Medium', 'High'].map((level) => (
            <TouchableOpacity
              key={level}
              style={styles.radioRow}
              onPress={() => setMutationLevel(level)}
            >
              <View style={styles.radioOuter}>
                {mutationLevel === level && <View style={styles.radioInner} />}
              </View>
              <Text>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Replication Type */}
        <Text style={styles.label}>Replication Type</Text>
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setReplicationType('Local')}
        >
          <View style={styles.radioOuter}>
            {replicationType === 'Local' && (
              <View style={styles.radioInner} />
            )}
          </View>
          <Text>Local</Text>
        </TouchableOpacity>

        {/* Payload Type */}
        <Text style={styles.label}>Payload Type</Text>
        <View style={styles.rowWrap}>
          {[
            'Data Theft',
            'File Deletion',
            'Ransom',
            'destructive data loss',
          ].map((type) => (
            <TouchableOpacity
              key={type}
              style={styles.radioRow}
              onPress={() => setPayloadType(type)}
            >
              <View style={styles.radioOuter}>
                {payloadType === type && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/tabs/injection-phase-2')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 18,
    elevation: 4,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F3F3F3',
    padding: 12,
    borderRadius: 10,
  },

  pickerContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    marginRight: 15,
  },

  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1976D2',
  },

  nextButton: {
    backgroundColor: '#1976D2',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },

  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
