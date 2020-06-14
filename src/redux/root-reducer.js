import { combineReducers } from 'redux'
import { UserReducer } from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);