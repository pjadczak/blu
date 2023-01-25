import { PERMISSIONS, request, requestMultiple, check, RESULTS, } from 'react-native-permissions';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import React, { useCallback, useEffect } from 'react';


const App = () => {

  useEffect(() => {

    req();

  }, []);

  const req = async () => {

  
    let permsRequire: any = [];
    if (Platform.OS === 'android'){
      permsRequire = [
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
      ];
  } else if (Platform.OS === 'ios'){
      permsRequire = [PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL];
  }
    
    const result = await requestMultiple(permsRequire);
    console.log('result!: ', result);

  }

  return (
    <View>
      <Text>Hello World</Text>
      <Button onPress={req} title="Skanuj" />
    </View>
  )
}

export default App;