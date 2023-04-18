import { ADD_TO_CART } from "../constant"
export const addToCart=(data)=>{
    // console.log("Action",data);
   return{
    data:data,
    type:ADD_TO_CART
   }
}