import styled from 'styled-components'

export const ModalContainer = styled.div`
	display: ${(props) => props.display};
	.opacity {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0.7;
	}
	.modal {
		position: absolute;
		z-index: 11;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		h1 {
			color: #e500e5;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;
		}
		form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		input {
			margin: 5px;
			width: 326px;
			height: 58px;
			outline: 0;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;

			color: #000000;

			background: #ffffff;
			border-radius: 5px;
		}
		button {
			width: 326px;
			height: 58px;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffffff;
		}
	}
`
