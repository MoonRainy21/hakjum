import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({

})

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whiteList: []
}

export const rootReducer = persistReducer(persistConfig, reducers)