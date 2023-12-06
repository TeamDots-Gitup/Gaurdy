import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const policeStations = [
{ id: 1, name: 'Police Station 1', latitude: 6.938, longitude: 79.85636603, address: 'Pettah' },
    { id: 2, name: 'Police Station 2', latitude: 6.9311, longitude: 79.8611, address: 'Keselwatta' },
    { id: 3, name: 'Police Station 3', latitude: 6.9369, longitude: 79.847, address: 'Dam Street' },
    { id: 4, name: 'Police Station 4', latitude: 6.9402, longitude: 79.8628, address: 'Wolfendhal Street' },
    { id: 5, name: 'Police Station 5', latitude: 6.9319, longitude: 79.8478, address: 'Fort' },
    { id: 6, name: 'Police Station 6', latitude: 6.9307, longitude: 79.8535, address: 'Slave Island' },
    { id: 7, name: 'Police Station 7', latitude: 6.9404, longitude: 79.8659, address: 'Maradana' },
    { id: 8, name: 'Police Station 8', latitude: 6.9365, longitude: 79.8726, address: 'Maligawatta' },
    { id: 9, name: 'Police Station 9', latitude: 6.9271, longitude: 79.8449, address: 'Colombo Harbour' },
    { id: 10, name: 'Police Station 10', latitude: 6.9385, longitude: 79.8541, address: 'Foreshore' },
    { id: 11, name: 'Police Station 11', latitude: 6.9484, longitude: 79.8706, address: 'Modara' },
    { id: 12, name: 'Police Station 12', latitude: 6.9536, longitude: 79.8647, address: 'Kotahena' },
    { id: 13, name: 'Police Station 13', latitude: 6.9597, longitude: 79.8762, address: 'Mattakkuliya' },
    { id: 14, name: 'Police Station 14', latitude: 6.9349, longitude: 79.8761, address: 'Bluemandal' },
    { id: 15, name: 'Police Station 15', latitude: 6.9612, longitude: 79.8655, address: 'Grandpass' },
    { id: 16, name: 'Police Station 16', latitude: 6.9412, longitude: 79.8733, address: 'Dematagoda' },
    { id: 17, name: 'Police Station 17', latitude: 6.9168, longitude: 79.8496, address: 'Kollupitiya' },
    { id: 18, name: 'Police Station 18', latitude: 6.9054, longitude: 79.8564, address: 'Bambalapitiya' },
    { id: 19, name: 'Police Station 19', latitude: 6.8914, longitude: 79.8629, address: 'Kirulapone' },
    { id: 20, name: 'Police Station 20', latitude: 6.8783, longitude: 79.8612, address: 'Wellawatta' },
    { id: 21, name: 'Police Station 21', latitude: 6.9143, longitude: 79.873, address: 'Narahenpita' },
    { id: 22, name: 'Police Station 22', latitude: 6.9065, longitude: 79.8647, address: 'BMICH' },
    { id: 23, name: 'Police Station 23', latitude: 6.9275, longitude: 79.8724, address: 'Borella' },
    { id: 24, name: 'Police Station 24', latitude: 6.9074, longitude: 79.8605, address: 'Cinnamon Garden' },
    { id: 25, name: 'Police Station 25', latitude: 6.8917, longitude: 79.8885, address: 'Mirihana' },
    { id: 26, name: 'Police Station 26', latitude: 6.8466, longitude: 79.9585, address: 'Maharagama' },
    { id: 27, name: 'Police Station 27', latitude: 6.8514, longitude: 79.9225, address: 'Boralesgamuwa' },
    { id: 28, name: 'Police Station 28', latitude: 6.944, longitude: 79.8828, address: 'Wellampitiya' },
    { id: 29, name: 'Police Station 29', latitude: 6.9312, longitude: 79.9899, address: 'Thalangama' },
    { id: 30, name: 'Police Station 30', latitude: 6.9275, longitude: 79.8563, address: 'Welikada' },
    { id: 31, name: 'Police Station 31', latitude: 6.8466, longitude: 79.9763, address: 'Nawagamuwa' },
    { id: 32, name: 'Police Station 32', latitude: 6.9276, longitude: 79.9506, address: 'Mulleriyawa' },
    { id: 33, name: 'Police Station 33', latitude: 6.8426, longitude: 80.0034, address: 'Homagama' },
    { id: 34, name: 'Police Station 34', latitude: 6.8354, longitude: 80.0314, address: 'Kottawa' },
    { id: 35, name: 'Police Station 35', latitude: 6.9069, longitude: 79.9771, address: 'Athurugiriya' },
    { id: 36, name: 'Police Station 36', latitude: 6.9072, longitude: 80.114, address: 'Padukka' },
    { id: 37, name: 'Police Station 37', latitude: 6.9203, longitude: 80.0845, address: 'Hanwella' },
    { id: 38, name: 'Police Station 38', latitude: 6.9456, longitude: 79.966, address: 'Gothatuwa' },
    { id: 39, name: 'Police Station 39', latitude: 6.8392, longitude: 80.0656, address: 'Meepe' },
    { id: 40, name: 'Police Station 40', latitude: 6.8323, longitude: 79.8647, address: 'Mount Lavinia' },
    { id: 41, name: 'Police Station 41', latitude: 6.8016, longitude: 79.9225, address: 'Piliyandala' },
    { id: 42, name: 'Police Station 42', latitude: 6.0261, longitude: 80.217, address: 'Galle Fort' },
    { id: 43, name: 'Police Station 43', latitude: 5.9613, longitude: 80.4264, address: 'Habaraduwa' },
    { id: 44, name: 'Police Station 44', latitude: 5.9926, longitude: 80.3873, address: 'Akmeemana' },
    { id: 45, name: 'Police Station 45', latitude: 6.104, longitude: 80.3189, address: 'Udugama' },
    { id: 46, name: 'Police Station 46', latitude: 6.0461, longitude: 80.217, address: 'Karapitiya' },
    { id: 47, name: 'Police Station 47', latitude: 5.9485, longitude: 80.5418, address: 'Matara Fort' },
    { id: 48, name: 'Police Station 48', latitude: 6.1214, longitude: 80.5862, address: 'Kamburupitiya' },
    { id: 49, name: 'Police Station 49', latitude: 5.9665, longitude: 80.713, address: 'Dikwella' },
    { id: 50, name: 'Police Station 50', latitude: 7.2516, longitude: 80.3464, address: 'Kegalle' },
    { id: 51, name: 'Police Station 51', latitude: 7.2479, longitude: 80.5467, address: 'Mawanella' }
];

const NearestPoliceStation = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please enable location services to use this feature.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setCurrentLocation(region);
      setMapRegion(region);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'An error occurred while fetching the location.');
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleShowAllPoliceStations = () => {
    const sriLankaRegion = {
      latitude: 7.8731,
      longitude: 80.7718,
      latitudeDelta: 6,
      longitudeDelta: 6,
    };
    setMapRegion(sriLankaRegion);
  };

  return (
    <View style={styles.container}>
      {currentLocation ? (
        <MapView style={styles.map} region={mapRegion}>
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Your Location"
            pinColor="blue"
          />
          {policeStations.map((policeStation) => (
            <Marker
              key={policeStation.id}
              coordinate={{
                latitude: policeStation.latitude,
                longitude: policeStation.longitude,
              }}
              title={policeStation.name}
            />
          ))}
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}

      <TouchableOpacity style={styles.centerButton} onPress={handleShowAllPoliceStations}>
        <Text>Show All Police Stations</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centerButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
});

export default NearestPoliceStation;
