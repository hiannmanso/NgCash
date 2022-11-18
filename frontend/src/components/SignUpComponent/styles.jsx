import styled from 'styled-components'

export const SignUpContainer = styled.div`
	background: white;
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	padding-top: 1%;
	align-items: center;
	a {
		text-decoration: none;
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;
		margin-top: 36px;
		color: #ff00ff;
	}
	form {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.submit {
			opacity: 0.5;
			background: #ff00ff;
			text-decoration: none;
			border: none;
			border-radius: 5px;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;
			color: #ffffff;
			:hover {
				opacity: 1;
			}
		}
	}
	input:focus {
		outline: none;
	}
	input {
		opacity: 0.8;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
		font-family: 'Raleway';
		background-color: #88888813;
		box-sizing: border-box;
		width: 100%;
		max-width: 400px;
		height: 58px;
		margin-bottom: 13px;
		border: none;
		border-radius: 10px;
		padding: 18px 0 17px 15px;
		:hover {
			cursor: pointer;
			opacity: 1;
		}
		::placeholder {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;
			color: #000000;
		}
	}
`
export const Logo = styled.img`
	width: 300px;
	height: auto;
	margin-bottom: 24px;
`
