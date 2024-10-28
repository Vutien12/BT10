import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const cartItems = [
  {
    id: 1,
    name: "Orange Juice",
    brand: "Lauren's",
    price: 149,
    quantity: 2,
    image: require('../assets/Rectangle 31.png'),
  },
  {
    id: 2,
    name: "Skimmed Milk",
    brand: "Baskin's",
    price: 129,
    quantity: 2,
    image: require('../assets/Rectangle 31 (1).png'),
  },
  {
    id: 3,
    name: "Aloe Vera Lotion",
    brand: "Marley's",
    price: 1249,
    quantity: 2,
    image: require('../assets/Rectangle 45.png'),
  },
];

export default function CartScreen({ navigation }) {
  const [items, setItems] = useState(cartItems);

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      {/* Back Button with Gray Circle */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.backButtonContainer}>
          <Ionicons name="chevron-back" size={24} color="#F08F5F" />
        </View>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Your Cart 👍🏻</Text>

      {/* Cart Items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.cartList}
      />

      {/* Total and Checkout Button */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>₹ {calculateTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  backButton: {
    marginTop: 40,
    marginBottom: 40,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#F8F8FB', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 26,
  },
  cartList: {
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  brand: {
    fontSize: 12,
    color: '#888',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#F08F5F',
    marginTop: 4,
    fontWeight: '700',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    color: '#FF7F50',
    paddingHorizontal: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Black color for "Total" text
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E47A3F', // Orange color for the amount
  },
  checkoutButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
