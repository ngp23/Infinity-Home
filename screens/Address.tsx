import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Address: React.FC = () => {  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello, How are you?</Text>
            <TextInput style={styles.input} placeholder={'First Name'}/>
            <TextInput style={styles.input} placeholder={'Last Name'}/>
            <TextInput style={styles.input} placeholder={'Address'}/>
            <TextInput style={styles.input} placeholder={'Country'}/>
            
            <View style={styles.row}>
                <View style={styles.column}>
                    <TextInput style={styles.inputState} placeholder={'State'}/>
                </View>
                <View style={styles.column}>
                    <TextInput style={styles.input} placeholder={'Zip'}/>
                </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    paddingBottom: 20,
  },
  text1:{
    fontSize: 30,
    paddingLeft: 170,
  },
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#6BD3FF',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10
  },
  inputState: {
    backgroundColor: 'white',
    width: '95%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  column: {
    flex: 1,
  },
});

export default Address;