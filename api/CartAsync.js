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
        const cartArray = AsyncStorage.getItem('KEY:CARTS');
        console.log('------ GOT CART ------');
        return cartArray ? [] : cartArray;
    }catch(error){
        console.log(error);
    }
}

export default saveCart;
export default getCart;