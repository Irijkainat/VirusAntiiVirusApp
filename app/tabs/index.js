import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Virus AntiVirus App</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/tabs/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/tabs/signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:25, backgroundColor:'#EDE7F6' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:40, textAlign:'center' },
  button: { backgroundColor:'#D1C4E9', padding:12, borderRadius:25, marginTop:10, width:'60%', alignItems:'center' },
  buttonText: { fontWeight:'bold', color:'#000' }
});
