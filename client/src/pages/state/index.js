import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isCartOpen:false,
    cart:[],
    items:[]
} 

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setItems:(state,action)=>{ //Change state 
            state.items =action.payload;
        },
        addToCart:(state,action)=>{ //Add new items on to of what exists already
            state.cart=[...[state.cart,action.payload.item]]
        },
        removeFromCart:(state,action)=>{ //Keep all items that are not equal to passed on ID
            state.cart=state.cart.filter((item)=>item.id !==action.payload.id)
        },
        increaseCount:(state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id===action.payload.id){
                    item.count++
                }
                return item
            })
        }
    },

    decreaseCount:(state,action)=>{
        state.cart = state.cart.map((item)=>{
            if(item.id===action.payload.id && item.count>1){
                item.count--
            }
            return item
   
        }) 
     },

     setIsOpen:(state)=>{
        //Check if cart is open and flip the state
        state.isCartOpen=!state.isCartOpen
     }
},


)
//Export our reducer functions
export const {setItems,addToCart,removeFromCart,setIsOpen,increaseCount,decreaseCount} = cartSlice.actions;

export default cartSlice.reducer;