import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import config from '../services/config.json';
import { LOGIN_REQUEST, memberlogFail, memberlogSuccess } from "./action";
function * login(action){

    try{
         const response = yield axios.post(`${config.api_base_url}/member/enter`,{
             username: action.payload.email,
             password: action.payload.password,
         });
         if( response.status ===200){
            if(response.data.message){
                  yield put(memberlogFail());
            } 
            else{
                yield put(memberlogSuccess());
            }
         }
         else{
             throw  new Error('Request failed');
         }
    }
    catch(error){
          yield put(memberlogFail());
          console.error(error);
    }
}

function * memberSaga(){
    yield takeLatest(LOGIN_REQUEST, login);
}

export default memberSaga;