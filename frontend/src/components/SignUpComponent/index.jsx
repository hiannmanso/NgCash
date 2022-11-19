import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as s from './styles.jsx'
import logo from './../../Assets/logo_ng.png'

export default function SignUpComponent() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const navigate = useNavigate()
	function createNewAccount(e) {
		e.preventDefault()
		axios({
			method: 'post',
			url: `${import.meta.env.VITE_API_URL}/signup`,
			data: {
				username,
				password,
				confirmPassword,
			},
		})
			.then((response) => {
				console.log(response.data)
				navigate('/sign-in')
			})
			.catch((error) => {
				console.log(error)
				alert(error.response.data)
			})
	}
	return (
		<s.SignUpContainer>
			<s.Logo classname='logo' src={logo} alt='logo' />
			<form onSubmit={createNewAccount}>
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
				<input
					type='password'
					placeholder='Confirme a senha'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<input className='submit' type='submit' value='Criar Conta' />
			</form>
			<Link to='/sign-in'>Já tem uma conta? Entre agora!</Link>
		</s.SignUpContainer>
	)
}
