import * as s from './style'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

import exit from './../../Assets/exit.svg'
import remove from './../../Assets/ant-design_minus-circle-outlined.svg'
import UserContext from '../../contexts/userContext.jsx'
import NewTransferComponent from '../../components/NewTransferComponent/index.jsx'

export default function Home() {
	const navigation = useNavigate()
	const [loadTransactions, setLoadTransactions] = useState(false)
	const [userInfos, setUserInfos] = useState()
	const [total, setTotal] = useState(0)
	const [userTransaction, setUserTransaction] = useState()
	const token = localStorage.getItem('token')
	const { setDisplayModal, displayModal } = useContext(UserContext)
	useEffect(() => {
		console.log({ token })
		axios({
			method: 'get',
			url: 'http://localhost:5000/balance',
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setUserInfos(response.data)
				setTotal(response.data.balance)
				// setInfoUser(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	useEffect(() => {
		getMyTransfers()
	}, [])
	function getMyTransfers() {
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_API_URL}/transactions/`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setUserTransaction(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	function getMyCashIn() {
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_API_URL}/transactions/credited`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setUserTransaction(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	function getMyCashOut() {
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_API_URL}/transactions/debited`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response.data)
				setUserTransaction(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<s.Home>
			<header>
				{!userInfos ? (
					<h1>Carregando dados...</h1>
				) : (
					<h1>Olá, {userInfos.users.username}</h1>
				)}

				<img
					src={exit}
					alt='skip'
					onClick={() => {
						navigation('/sign-in')
					}}
				/>
			</header>
			<main>
				{!userTransaction ? (
					<h1>Não há registros de entrada ou saída</h1>
				) : (
					userTransaction.map((transaction) => {
						if (
							transaction
								.accounts_accountsTotransactions_creditedAccountId
								.users.username === userInfos.users.username
						) {
							return (
								<div key={transaction.id}>
									<div className='description'>
										<h3>
											{
												transaction
													.accounts_accountsTotransactions_debitedAccountId
													.users.username
											}
										</h3>
										{/* <h4>{transaction.description}</h4> */}
									</div>
									<div className='price'>
										<h2 className='green'>
											{Number(transaction.value).toFixed(
												2
											)}
										</h2>
									</div>
								</div>
							)
						} else {
							return (
								<div key={transaction.id}>
									<div className='description'>
										<h3>
											{
												transaction
													.accounts_accountsTotransactions_creditedAccountId
													.users.username
											}
										</h3>
										{/* <h4>{transaction.description}</h4> */}
									</div>
									<div className='price'>
										<h2 className='red'>
											{Number(transaction.value).toFixed(
												2
											)}
										</h2>
									</div>
								</div>
							)
						}
					})
				)}
				<div className='total'>
					<p className='saldo'>SALDO</p>

					{Number(total) > 0 ? (
						<p className='green'> {Number(total).toFixed(2)}</p>
					) : (
						<p className='red'> {Number(total).toFixed(2)}</p>
					)}
				</div>
			</main>
			<footer>
				<button onClick={getMyCashOut}>
					<img src={remove} alt='add' />
					<h1>Transferências Feitas</h1>
				</button>
				<button onClick={getMyCashIn}>
					<img src={remove} alt='add' />
					<h1>Transferências Recebidas</h1>
				</button>
				<button onClick={getMyTransfers}>
					<img src={remove} alt='add' />
					<h1>Todas as Transferências</h1>
				</button>

				<button onClick={() => setDisplayModal('flex')}>
					<img src={remove} alt='remove' />
					<h1>Nova Transferência</h1>
				</button>
			</footer>
			<NewTransferComponent />
		</s.Home>
	)
}
