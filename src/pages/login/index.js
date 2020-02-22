import React, { useState, useEffect } from 'react';
import './style.css'
import api from '../../service/api.js';
import { useHistory } from 'react-router-dom'
function Login() {
	const history = useHistory();
	const [ email, setEmail ] = useState('');
	const [ senha, setSenha ] = useState('');
	useEffect(() => {
		checkToken();
	}, []);
	async function checkToken(){
		const keyAuth = localStorage.getItem("auth");
		console.log(keyAuth);
		await api.get(`/checkAuth/${keyAuth}`)
		.then(res => {
			if(res.data === true){
				history.push("/list");
			}else{
				console.log("Houve um problema com login.");
			}
		});
	}

	async function hundleSubmit(e) {
		e.preventDefault();
		await api.post(`/auth`, { email, senha })
	    .then(res => {
			console.log(res);
			if(res.data.status == true){
				localStorage.setItem("nome", res.data.auth.nome);	
				localStorage.setItem('auth', res.data.auth.token);
			} else{
				alert("Erro ao realizar login.");
			}
	    });
	    checkToken();
    }

	return(
		<form className="formulario" onSubmit={hundleSubmit}>
      		<div className="form-group">
        		<label> Seu melhor email: </label>
        		<input 
			        type="email"
			        className="form-control" 
			        placeholder="exemplo@email.com"
			        value={email}
			        onChange={e => setEmail(e.target.value)}
			        required
			    />
        	</div>
        	<div className="form-group">
        		<label> Sua senha: </label>
        		<input 
        			type="password"
			        className="form-control" 
			        placeholder="*******"
			        value={senha}
			        onChange={e => setSenha(	e.target.value)}
			        required
			    />
        	</div>
        	<input type="submit" className="btn btn-primary float-right" value="Acessar" />
        	<div className="clear"></div>
      	</form>
	);
}

export default Login;