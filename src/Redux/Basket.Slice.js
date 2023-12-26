
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    items: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : []
  },
  reducers: {
    addtoBasket: (state, action) => {
      const target = state.items.find(item => item.id == action.payload.id)
      if (target) {
        target.count = target.count + 1
        target.totalPrice = target.count * target.product.price
        state.items = [...state.items.filter(item => item.id !== target.id), target]
        localStorage.setItem("basketItems", JSON.stringify([...state.items]))
      }
      else {
        const basketItem = {
          id: action.payload.id,
          product: action.payload,
          count: 1,
          totalPrice: action.payload.price
        }
        state.items = [...state.items, basketItem]
        localStorage.setItem("basketItems", JSON.stringify([...state.items]))
      }
      toast.success('Book added to the Basket!', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id != action.payload.id)
      localStorage.setItem("basketItems", JSON.stringify([...state.items]))
      toast.error('Deleted From Basket!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    decreaseBtn: (state, action) => {
      const target = state.items.find(item => item.id == action.payload.id)
      if (target && target.count > 1) {
        target.count = target.count - 1
        target.totalPrice = target.count * target.product.price
        localStorage.setItem("basketItems", JSON.stringify([...state.items]))
      }
    },
    increaseBtn: (state, action) => {
      const target = state.items.find(item => item.id == action.payload.id)
      if (target) {
        target.count = target.count + 1
        target.totalPrice = target.count * target.product.price
        localStorage.setItem("basketItems", JSON.stringify([...state.items]))
      }
    }
  }
})

export const { addtoBasket, deleteFromBasket, decreaseBtn, increaseBtn } = BasketSlice.actions
export default BasketSlice.reducer
