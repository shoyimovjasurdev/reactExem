import {configureStore} from "@reduxjs/toolkit"
import {cardReducer} from "./card"

const store = configureStore({
  reducer:{
    card:cardReducer
  }
});

export default store;