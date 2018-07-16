import { AsyncStorage } from 'react-native'

const saveCart = async (cartArray)=>{
    try{
        await AsyncStorage.setItem('KEY:CARTS',JSON.stringify(cartArray));
        console.log('------ SAVED CART ------');
    }catch(error){
        console.log(error);
    }
}

const getCart = async ()=>{
    try{
        const cartArray = await AsyncStorage.getItem('KEY:CARTS');
        console.log('------ GOT CART ------ '+cartArray);
        if(cartArray !== null){
            return JSON.parse(cartArray);
        }
    }catch(error){
        console.log(error);
        return [];
    }
}

export default getCart;
export default saveCart;
