import { useContext, useState } from 'react'
import UserContext from '../../contexts/userContext.jsx'
import * as s from './style.jsx'
import axios from 'axios'
export default function NewTransferComponent() {
	const [username, setUsername] = useState('')
	const [value, setValue] = useState('')

	const {
		displayModal,
		setDisplayModal,
		setLoadTransactions,
		loadTransactions,
	} = useContext(UserContext)
	const token = localStorage.getItem('token')

	function newTransaction(e) {
		e.preventDefault()
		console.log(token)
		console.log

		axios({
			method: 'post',
			url: `${import.meta.env.VITE_API_URL}/cash-in`,
			data: {
				username,
				value: parseFloat(value),
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setDisplayModal('none')
				setLoadTransactions(!loadTransactions)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<s.ModalContainer display={displayModal}>
			<div
				className='opacity'
				onClick={() => {
					setDisplayModal('none')
				}}
			></div>
			<div className='modal'>
				<form onSubmit={newTransaction} className='formModal'>
					<h1> Nova Transferência</h1>
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder='usuário'
					/>
					<input
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='valor'
					/>
					<button type='submit'>Transferir</button>
				</form>
			</div>
		</s.ModalContainer>
	)
}
