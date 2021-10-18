import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { authMethod, firebase } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { LoginNavProps } from '../Navigation/Params';

const SignUp: React.FC<LoginNavProps<'SignUp'>> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const onSignUp = async () => {
    if (name && phone && address && email && password && conformPassword) {
      if (password != conformPassword) {
        Alert.alert(`Error`, `Passwork Mismatch`);
      } else {
        try {
          const { user } = await authMethod.createUserWithEmailAndPassword(
            email,
            password
          );
          if (user) {
            console.log(JSON.stringify(user));
            firebase
              .database()
              .ref('/users/' + user?.uid)
              .set({
                userName: name,
                userEmail: user.email,
                userPhone: phone,
                userAddress: address,
              });
          }
        } catch ({ message }) {
          Alert.alert(
            'Sign UP Failed',
            JSON.stringify(message, Object.getOwnPropertyNames(message)),
            [
              {
                text: 'Try Again',
              },
            ]
          );
        }
      }
    } else {
      Alert.alert(`Error`, `Missing Fields`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 50, color: "#fff"}}>New{"\n"}Account</Text>
        <Text style={{
                fontSize: 30, 
                color: "#fff",  
                position: 'absolute',
                right: 25,
                bottom: 5}}>Steps{"\n"} 1 / 2</Text>
      </View>
        <TextInput
          style={styles.input}
          placeholder={'Name'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setName(text)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setEmail(text)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder={'Phone Number'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Address'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setAddress(text)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder={'Confirm Password'}
          placeholderTextColor="#93969e"
          onChangeText={(text) => setConformPassword(text)}
          secureTextEntry
        /> */}
        <Button
            title="Proceed"
            onPress={() => navigation.navigate('SignUpFinal')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#444956',
  },
  input: {
    width: '100%',
    marginVertical: 15,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c",
  },
});

export default SignUp;
