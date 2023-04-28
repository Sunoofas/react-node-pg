import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import memberReducer from './reducer';
import memberSaga from './saga';

const rootReducer = combineReducers({
      user: memberReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({

      reducer: rootReducer,
      middleware: [sagaMiddleware],
});


sagaMiddleware.run(memberSaga);



export default store;