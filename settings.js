import socketIOClient from "socket.io-client";
//export const SERVER_URL = "https://powerful-badlands-91453.herokuapp.com/";
export const SERVER_URL = "http://localhost:3000/";
//export const CLIENT_URL = " https://fast-forest-66628.herokuapp.com/";
export const CLIENT_URL = "http://localhost:8000/";
export const socket = socketIOClient("http://localhost:3000");
