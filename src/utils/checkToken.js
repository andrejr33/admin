
import api from '../service/api.js';
import { Redirect } from 'react-router-dom';

function checkToken(){
	const getToken = localStorage.getItem('token').
	const token = api.get(`checkAuth/${getToken}`)
	.then(res =>{	
		if(token == true){
			return <Redirect to='/somewhere'/>;
		} else{
			alert("Login ou senha incorretos!");
		}
	});
}

export default checkToken;