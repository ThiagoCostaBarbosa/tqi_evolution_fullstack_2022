import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
	flex:1;
	display: flex;
  justify-content: center;
	max-width: 1200px;
	padding: 2rem;
`
export const Form = styled.form`
flex:1;
gap: 2rem;
max-width: 800px;

& > div {
display: grid;
gap: 0.5rem;
}
`
export const FlexCol = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	gap: 0.5rem;
	
	& > div {
	display: flex;
	flex-direction: column;
	width: auto;
	flex: 1;
	}
`
export const Grid2Col = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 0.5rem 2em;
& > div {
display: flex;
flex-direction: column;
`
export const Input = styled.input`
	margin: 0.5rem 0;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
	background: #fff;
  color: #666;
  outline: 0;
  border: 0;
  box-shadow: #0002 0px 0px 4px 0px,
    #0001 0px 0px 2px 0px;
  font-size: 1.2rem;
`
export const Label = styled.label` `
export const LabelValidation = styled.label`
 font-size: 1rem;
 color: #f00;
`
export const ButtonSubmit = styled.button.attrs({type: "submit"})`
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 1rem;
  color:#fff;
	background-color: #5b6;
  box-shadow: #0001 0 0 0.2rem 0, #0001 0 0 0.1rem 0;
  font-size: 1.6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  
  transition: box-shadow .1s ease;
	&:hover {
		background-color: #3b4;
		box-shadow: #0001 0 0.1rem 0.1rem, #0001 0 0.2rem 0.1rem, #0001 0 0.4rem 0.2rem;
	}
`
