import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data); // Lưu dữ liệu sau khi quét
    alert(`Đã quét mã loại ${type} với dữ liệu: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Đang yêu cầu quyền truy cập camera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Không có quyền truy cập camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[
          BarCodeScanner.Constants.BarCodeType.aztec,
          BarCodeScanner.Constants.BarCodeType.ean13,
          BarCodeScanner.Constants.BarCodeType.ean8,
          BarCodeScanner.Constants.BarCodeType.qr,
          BarCodeScanner.Constants.BarCodeType.pdf417,
          BarCodeScanner.Constants.BarCodeType.upc_e,
          BarCodeScanner.Constants.BarCodeType.datamatrix,
          BarCodeScanner.Constants.BarCodeType.code39,
          BarCodeScanner.Constants.BarCodeType.code93,
          BarCodeScanner.Constants.BarCodeType.itf14,
          BarCodeScanner.Constants.BarCodeType.codabar,
          BarCodeScanner.Constants.BarCodeType.code128,
          BarCodeScanner.Constants.BarCodeType.upc_a,
        ]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <>
          <Button title={'Nhấn để quét lại'} onPress={() => setScanned(false)} />
          <TouchableOpacity style={styles.addToCartButton} onPress={() => alert(`Thêm sản phẩm ${scannedData} vào giỏ hàng`)}>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
