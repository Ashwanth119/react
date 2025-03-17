import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, OrderDelivery, Product, User } from "../common/Interfaces";

/* 
  --> userIndex to store the current logged in user, initially it will be -1 and upon window or page reload it will take the value from the localStorage.
  --> userData to store the all logged in users data from the localStorage if not initial value will be assigned. 
  --> productsArray to store the data fetched from the API.
  --> cartArray to store the cart items. Initially it will be empty, upon window or page reload it will take the value from the localStorage.
  --> ordersArray to store the order items. Initially it will be empty, upon window or page reload it will take the value from the localStorage.
  --> orderDelivery to store the price and date of the corresponding order from the orderArray. Initially it will be empty, upon window or page reload it will take the value from the localStorage.
*/
const userIndex: number = localStorage.getItem("userIndex")
  ? Number(JSON.parse(localStorage.getItem("userIndex") as string))
  : -1;

const userData: User[] = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData") as string)
  : [{ userName: "Ashwanth", password: "123", logged: false }];

const productsArray: Product[] = [];

const cartArray: Cart[] =
  userIndex !== -1 &&
  localStorage.getItem(userData[userIndex].userName + "cartArray")
    ? JSON.parse(
        localStorage.getItem(
          userData[userIndex].userName + "cartArray"
        ) as string
      )
    : [];

const ordersArray: Cart[][] =
  userIndex !== -1 &&
  localStorage.getItem(userData[userIndex].userName + "ordersArray")
    ? JSON.parse(
        localStorage.getItem(
          userData[userIndex].userName + "ordersArray"
        ) as string
      )
    : [];

const orderDelivery: OrderDelivery[] =
  userIndex !== -1 &&
  localStorage.getItem(userData[userIndex].userName + "orderDelivery")
    ? JSON.parse(
        localStorage.getItem(
          userData[userIndex].userName + "orderDelivery"
        ) as string
      )
    : [];

const initialState = {
  productsArray,
  cartArray,
  ordersArray,
  userData,
  orderDelivery,
  userIndex,
};

export const Slice = createSlice({
  name: "eCommerce",
  initialState,
  reducers: {
    storeProducts: (state, action: PayloadAction<Product[]>) => {
      state.productsArray = action.payload;
    },
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.cartArray = [...state.cartArray, action.payload];
      state.userIndex !== -1 &&
        localStorage.setItem(
          state.userData[state.userIndex].userName + "cartArray",
          JSON.stringify(state.cartArray)
        );
    },
    deleteFromCart: (state, action: PayloadAction<Cart>) => {
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload.id
      );
      state.userIndex !== -1 &&
        localStorage.setItem(
          state.userData[state.userIndex].userName + "cartArray",
          JSON.stringify(state.cartArray)
        );
    },
    decrementItemCount: (state, action: PayloadAction<Cart>) => {
      state.cartArray = state.cartArray.map((item) => {
        item.id === action.payload.id ? item.count-- : item.count;
        return item;
      });
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload.id
      );
      state.userIndex !== -1 &&
        localStorage.setItem(
          state.userData[state.userIndex].userName + "cartArray",
          JSON.stringify(state.cartArray)
        );
    },
    incrementItemCount: (state, action: PayloadAction<Cart>) => {
      state.cartArray = state.cartArray.map((item) => {
        item.id === action.payload.id ? item.count++ : item.count;
        return item;
      });
      state.userIndex !== -1 &&
        localStorage.setItem(
          state.userData[state.userIndex].userName + "cartArray",
          JSON.stringify(state.cartArray)
        );
    },
    placeOrder: (
      state,
      action: PayloadAction<{ cartItemsArray: Cart[]; totalPrice: number }>
    ) => {
      state.ordersArray = [action.payload.cartItemsArray, ...state.ordersArray];
      state.cartArray = [];
      let date: Date = new Date();
      const dateString: string =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      state.orderDelivery.unshift({
        price: action.payload.totalPrice,
        date: dateString,
      });
      localStorage.setItem(
        state.userData[state.userIndex].userName + "ordersArray",
        JSON.stringify(state.ordersArray)
      );
      localStorage.setItem(
        state.userData[state.userIndex].userName + "orderDelivery",
        JSON.stringify(state.orderDelivery)
      );
      localStorage.setItem(
        state.userData[state.userIndex].userName + "cartArray",
        JSON.stringify(state.cartArray)
      );
    },
    setUser: (
      state,
      action: PayloadAction<{ index: number; logged: boolean }>
    ) => {
      state.userData[action.payload.index].logged = action.payload.logged;
      action.payload.logged
        ? (state.userIndex = action.payload.index)
        : (state.userIndex = -1);
      localStorage.setItem("userIndex", JSON.stringify(state.userIndex));
      localStorage.setItem("userData", JSON.stringify(state.userData));
      state.cartArray =
        state.userIndex !== -1 &&
        localStorage.getItem(
          state.userData[state.userIndex].userName + "cartArray"
        )
          ? JSON.parse(
              localStorage.getItem(
                state.userData[state.userIndex].userName + "cartArray"
              ) as string
            )
          : [];
      state.ordersArray =
        state.userIndex !== -1 &&
        localStorage.getItem(
          state.userData[state.userIndex].userName + "ordersArray"
        )
          ? JSON.parse(
              localStorage.getItem(
                state.userData[state.userIndex].userName + "ordersArray"
              ) as string
            )
          : [];
      state.orderDelivery =
        state.userIndex !== -1 &&
        localStorage.getItem(
          state.userData[state.userIndex].userName + "orderDelivery"
        )
          ? JSON.parse(
              localStorage.getItem(
                state.userData[state.userIndex].userName + "orderDelivery"
              ) as string
            )
          : [];
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.userData = [
        ...state.userData,
        {
          userName: action.payload.userName,
          password: action.payload.password,
          logged: action.payload.logged,
        },
      ];
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
  },
});

export const {
  storeProducts,
  addToCart,
  deleteFromCart,
  decrementItemCount,
  incrementItemCount,
  placeOrder,
  setUser,
  addUser,
} = Slice.actions;

export default Slice.reducer;
