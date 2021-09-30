import React from 'react';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { nav } from '../components/Navigation';

import '../src/constants/firebase';

interface LoginProp {
  navigation: NativeStackNavigationProp<nav, 'Login'>
}

const Login: React.FC<LoginProp> = ({navigation}) => {
  const signInWithGoogleAsync = async () => {
		try {
			const result = await Google.logInAsync({
			androidClientId: '777031348415-3a41qnqofe71k54e99io3v3fba2pi118.apps.googleusercontent.com',
			iosClientId: '777031348415-u1edi1ut86tovag4ovakckmspkqf2epe.apps.googleusercontent.com',
			scopes: ['profile', 'email'],
		});
		
			if (result.type === 'success') {
        navigation.navigate('Home')
				return result.accessToken;
			} else {
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
		}
	};

    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
           style={{width: 70, height: 70}} />
          <Text style={styles.text}>
              Infinity Home
          </Text>
          <Button
            title="Sign In With Google"
            onPress={signInWithGoogleAsync}
            color="red"
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            color="red"
          />
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'black',
  }
});

export default Login;