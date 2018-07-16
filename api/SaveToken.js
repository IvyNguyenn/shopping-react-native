import { AsyncStorage } from 'react-native';

const SaveToken = async (token) => {
    try {
        await AsyncStorage.setItem('KEY:TOKEN', token);
        console.log('------ SAVED TOKEN ------');
    } catch(error){ 
        console.log(e) 
    }

}
export default SaveToken;
