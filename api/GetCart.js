import { AsyncStorage } from 'react-native'

const getCart = async ()=>{
    try{
        const cartArray = await AsyncStorage.getItem('KEY:CARTS');
        console.log('------ GET CART ------ '+cartArray);
        if(cartArray !== null){
            return JSON.parse(cartArray);
        }
    }catch(error){
        console.log(error);
        return [];
    }
}

export default getCart;