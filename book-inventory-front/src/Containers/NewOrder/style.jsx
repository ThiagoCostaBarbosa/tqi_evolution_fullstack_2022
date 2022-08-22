import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
	flex:1;
	display: flex;
  justify-content: center;
	max-width: 80rem;
	padding: 2rem;
`
export const Form = styled.form`
	flex: 1;
	max-width: 80rem;
	
	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap 2rem;
	}
`
export const Info = styled.div`
flex: 1;
	margin: 0;
	min-width: 26rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	& > div {
	width:100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		& > div {
		display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
`
export const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 0.7;
  min-width: 15rem;
  width: 100%;
  max-width: 20rem;
  transition: 0.3s ease;
  box-shadow: 0.12rem 0.12rem 0.36rem #3336;
`
export const Title = styled.h3`
	margin: 0;
	font-size: 2rem;
`
export const Author = styled.h4`
	margin: 0;
	font-size: 1.6rem;
`
export const Publisher = styled.h4`
	margin: 0;
	font-size: 1.4rem;
	font-weight: 400;
`
export const Input = styled.input`
	width: 10rem;
	margin: 0.5rem 0;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
	background: #fff;
  color: #666;
  outline: 0;
  border: 0;
  box-shadow: #0002 0 0 0.2rem 0,
    #0001 0 0 0.1rem 0;
  font-size: 1.2rem;
`
export const Label = styled.label`
 font-size: 1rem;`
export const LabelValidation = styled.label`
 font-size: 0.8rem;
 color: #f00;
`
