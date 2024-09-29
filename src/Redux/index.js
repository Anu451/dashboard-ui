import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navSlice from './navSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
	navBarReducer: navSlice,
});

const persistConfig = {
	key: 'root',
	storage,
	wishlist: [rootReducer],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducers,
});

const persistor = persistStore(store);

export { store, persistor };
