import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as s from './../SignUpComponent/styles.jsx'
import logo from './../../Assets/logo_ng.png'

export default function SignIpComponent() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	function login(e) {
		e.preventDefault()
		axios({
			method: 'post',
			url: `${import.meta.env.VITE_API_URL}/signin`,
			data: {
				username,
				password,
			},
		})
			.then(({ data: { token } }) => {
				console.log(token)
				localStorage.setItem('token', token)
				localStorage.setItem('username', username)
				navigate('/home')
			})
			.catch((error) => {
				console.log(error)
				alert(error.response.data)
			})
	}
	return (
		<s.SignUpContainer>
			<s.Logo classname='logo' src={logo} alt='logo' />
			<form onSubmit={login}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					type='password'
					placeholder='Senha'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input className='submit' type='submit' value='Entrar' />
			</form>
			<Link to='/sign-up'>Não possui conta? Crie aqui!</Link>
		</s.SignUpContainer>
	)
}
