import { AsyncStorage } from 'react-native';

const RemoveToken = async () => {
    try {
        await AsyncStorage.removeItem('KEY:TOKEN');
        console.log('------ REMOVED TOKEN ------');
    } catch(error){ 
        console.log(e) 
    }

}
export default RemoveToken;
