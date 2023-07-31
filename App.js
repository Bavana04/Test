import React, {useState} from "react";
import { View, TextInput, Button, Text, StyleSheet} from 'react-native';
import { firebase1 } from './firebase';
import { ref, set } from "firebase/database";

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);

const handleNameChange = (text)  => {
 setName (text);
};

const handleAgeChange = (text) => {
 setAge(text);
};

const handleGenderChange = (text) => {
    setGender(text);
  }
 
const handlePress = () => {
  
  if ( !name || !age || !gender) {
    setError ("Please fill all the details");
  }

else {
  setError('');
  dataAddon();
  setshowSuccessMessage(true);
}
};

const dataAddon = () => {
    set(ref(firebase1, "posts/" + name), {
    name: name,
    age : age,
    gender : gender,
  }
  );
    setName("");
    setAge("");
    setGender("");
  };

return (
  <View style = {StyleSheet.container}>
    <Text style = {styles.label}> Name:</Text>
    <TextInput
    style={styles.input}
    placeholder=" Enter your name"
    value = {name}
    onChangeText= {handleNameChange}
    />

    <Text style = {styles.label}> Age:</Text>
    <TextInput
    style={styles.input}
    placeholder=" Enter your Age"
    value = {age}
    onChangeText= {handleAgeChange}
    />

    <Text style = {styles.label}> Gender:</Text>
    <TextInput
    style={styles.input}
    placeholder=" Enter your Gender"
    value = {gender}
    onChangeText= {handleGenderChange}
    />

    <Button style = {styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </Button>
    
    {error ? <Text style = {{ color:'red', marginVertical: 10}} >{error} </Text> : null}

    {showSuccessMessage &&(
      <Text style={styles.successMessage}>Record Added Successfully</Text>
    )}
   
    </View>
    );
};
  

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  label:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginStart:600,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  successMessage:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
});

export default Form;
