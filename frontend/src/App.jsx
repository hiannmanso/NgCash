//reset css
// import './css/reset.css'

import { SignUp } from './pages/SignUp/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import GlobalStyles from './GlobalStyles/index.jsx'
import { SignIn } from './pages/SignIn/index.jsx'
import Home from './pages/Home/index.jsx'
import UserContext from './contexts/userContext.jsx'
import { useState } from 'react'
// import './css/global.css'
export default function App() {
	const [displayModal, setDisplayModal] = useState('flex')
	return (
		<>
			<BrowserRouter>
				<UserContext.Provider value={{ displayModal, setDisplayModal }}>
					<Routes>
						<Route path='/sign-up' element={<SignUp />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/home' element={<Home />} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	)
}
