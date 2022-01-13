import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import subjectClassReducer from './subjectClass/subjectClassSlice';
import subjectReducer from './subject/subjectSlice';
import { ISubject } from "./subject/utils";

const reducers = combineReducers({
    subjectClass: subjectClassReducer,
    subject: subjectReducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whiteList: []
}

export const selectSubjectClass = (state:any) => state.subjectClass.currentSubjectClass
export const selectSubject = (state:any) => state.subject

export const rootReducer = persistReducer(persistConfig, reducers)