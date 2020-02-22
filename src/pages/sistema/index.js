import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';
import './style.css';


import ListItem from '../../components/ListItem/'
function Sistema() {
	const history = useHistory();
	const [itens, setItens] = useState([]);

	useEffect(() => {
		
		loadItens();
		checkToken();
	},[]);
	async function loadItens(){
		const response = await api.get("/cadastros");
		setItens(response.data);
	}
    async function checkToken(){
		const keyAuth = localStorage.getItem("auth");
		console.log();
		if(keyAuth){
			await api.get(`/checkAuth/${keyAuth}`)
			.then(res => {
				if(res.data === false){
					localStorage.removeItem("auth");
					history.push("/");
				}
			});
		}else{
			localStorage.removeItem("auth");
			history.push("/");
		}
	}

	function logout(){
		localStorage.removeItem("auth");
		history.push("/");
	}


	const nome = localStorage.getItem("nome");
	
	return(
		<>
		<h1>{nome}</h1>
		<button class="btn-danger" onClick={logout}>Sair</button>
		<div class='clear'></div>
		<main>
        	<ul>
          		{itens.map(item => ( <ListItem key={item._id} dev={item} /> ))}
        	</ul>
      	</main>
		  </>
	);
}

export default Sistema;