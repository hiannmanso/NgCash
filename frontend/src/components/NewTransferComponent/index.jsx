import { useContext, useState } from 'react'
import UserContext from '../../contexts/userContext.jsx'
import * as s from './style.jsx'
import axios from 'axios'
export default function NewTransferComponent() {
	const [username, setUsername] = useState('')
	const [value, setValue] = useState('')
	const { displayModal, setDisplayModal } = useContext(UserContext)

	function newTransaction(e) {
		e.preventDefault()
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_API_URL}/transactions/cash-in`,
			data: {
				username,
				value,
			},
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setUserTransaction(response.data)
				setDisplayModal('none')
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
				<form action={newTransaction} className='formModal'>
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
