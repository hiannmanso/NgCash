import styled from 'styled-components'

export const Home = styled.div`
	background: black;
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	header {
		padding: 25px 24px 22px 24px;
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		h1 {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 26px;
			line-height: 31px;

			color: #ffffff;
		}
		img {
			:hover {
				cursor: pointer;
			}
		}
	}
	main {
		overflow: auto;
		padding: 10px;
		margin-bottom: 13px;
		position: relative;
		width: 326px;
		height: 446px;
		flex-direction: column;
		background: #ffffff;
		border-radius: 5px;
		display: flex;
		/* justify-content: center;
		align-items: center; */
		.green {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: green;
		}
		.red {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: red;
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.description {
				h3 {
					margin-right: 10px;
					font-family: 'Raleway';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 19px;

					color: #c6c6c6;
				}
				h4 {
					font-family: 'Raleway';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 19px;

					color: #000000;
				}
				.prince {
					/* box-sizing: border-box; */
					display: flex;
					flex-direction: row;
					/* h5 {
						margin-left: 10px;
						width: 40px;
						height: auto;
					} */
				}
			}
		}
		h1 {
			width: 180px;
			height: 46px;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;
			text-align: center;

			color: #868686;
		}
	}
	footer {
		width: 85%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		button {
			margin: 15px;
		}
	}
	button {
		display: flex;
		flex-direction: column;
		padding: 9px 0 9px 8px;
		img {
		}
		h1 {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 15px;
			line-height: 20px;
			text-align: left;

			color: #ffffff;
		}
		border: none;
		width: 155px;
		height: 114px;
		opacity: 0.9;
		background: #ff00ff;
		border-radius: 5px;
		:hover {
			opacity: 1;
		}
	}
	.total {
		position: relative;

		bottom: 10px;
		left: 10px;
		right: 10px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		.saldo {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 17px;
			line-height: 20px;
			color: #000000;
		}
	}
`
