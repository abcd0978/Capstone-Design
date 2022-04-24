import {AUTH_LOGIN,AUTH_REGISTER,AUTH_USER,AUTH_LOGOUT,POST_POSTING,POST_GETPOST,COMMENT_SETCOMMENT,COMMENT_GETCOMMENT} from "./types";
import { ROOM_GET,ROOM_JOIN,ROOM_OUT } from "./types";
import * as authApi from '../api/auth'
import * as roomApi from '../api/room'
import * as postApi from '../api/post'
export async function registerUser(data){
    const req = await authApi.register(data)
    .then(res=>(res.data))
    return {
        type:AUTH_REGISTER,
        payload: req
    }
}
export async function loginUser(data){
    const req = await authApi.login(data)
    .then(res=>res.data)

    return {
        type:AUTH_LOGIN,
        payload: req
    }
}
export async function authUser(){
    const req = await authApi.auth()
    .then(res=>res.data)

    return {
        type:AUTH_USER,
        payload: req
    }
}

export async function logoutUser(){
    const req = await authApi.logout()
    .then(res=>res.data);

    return {
        type:AUTH_LOGOUT,
        payload:req
    }
}

export async function getRoom(){
    const req = await roomApi.getRoom()
    .then(res=>res.data);

    return {
        type:ROOM_GET,
        payload:req
    }
}
//posting
export async function UserPosting(data){
    const req = await postApi.postings(data)
    .then(res=>(res.data))
    return {
        type:POST_POSTING,
        payload: req
    }
}

export async function GetPost(){
    const req = await postApi.getpost()
    .then(res=>res.data);
    return {
        type:POST_GETPOST,
        payload:req
    }
}

export async function SetComment(){
    const req = await postApi.setcomment()
    .then(res=>res.data);
    return {
        type:COMMENT_SETCOMMENT,
        payload:req
    }
}

export async function GetComment(){
    const req = await postApi.getcomment()
    .then(res=>res.data);
    return {
        type:COMMENT_GETCOMMENT,
        payload:req
    }
}