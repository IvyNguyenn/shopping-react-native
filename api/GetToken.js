import { AsyncStorage } from 'react-native'

const GetToken = async ()=>{
    try{
        const token = await AsyncStorage.getItem('KEY:TOKEN');
        console.log('------ GET TOKEN ------ '+token);
        if(token !== null){
            return token;
        }
        return '';
    }catch(error){
        console.log(error);
        return '';
    }
}

export default GetToken;