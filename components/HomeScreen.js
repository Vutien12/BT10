import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/HomeScreenStyles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile section */}
      <View style={styles.profileSection}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Tiến - CMC</Text>
        </View>
        <Image
          source={{ uri: 'https://topshare.vn/wp-content/uploads/2022/07/hinh-anh-cute-topsharevn-3.jpg' }}
          style={styles.profileImage}
        />
      </View>

      {/* Your Insights section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Ionicons name="scan-outline" size={40} color="#706FD3" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubTitle}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="alert-circle-outline" size={40} color="#F19066" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubTitle}>Counterfeited 32</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="checkmark-circle-outline" size={40} color="#33D9B2" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubTitle}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="calendar-outline" size={40} color="#34ACE0" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubTitle}>History 26</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;