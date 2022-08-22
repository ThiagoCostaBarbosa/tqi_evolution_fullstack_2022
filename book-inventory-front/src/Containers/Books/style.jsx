import styled from 'styled-components';

export const Main = styled.div`
display: flex;
justify-content: center;
`
export const Content = styled.div`
	align-self: center;
	width:90%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	padding: 2rem;
  gap: 2rem;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
    filter: saturate(1);
`
export const CardOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  padding: 0;
  background-color: #000a;
  overflow: hidden;
  transition: 0.3s ease;
`
export const Title = styled.h6`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
`
export const Author = styled.h6`
  color: #ffffff;
  font-size: 1.2rem;
  margin:0;
`
export const Info = styled.div`
	height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
`
export const BookFlexCol = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`
export const PublisherDate = styled.h6`
  margin: 0;
  color: #ffffff;
`
export const Publisher = styled.h6`
  margin: 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
`
export const InventoryLabel = styled.h6`
  margin: 0;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 400;
`
export const Inventory = styled.h6`
  margin: 0;
  font-size: 1rem;
  color: #fff;
`
export const Button = styled.button`
	flex:1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;
  border: none;
  border-radius: 0;
  cursor: pointer;
  background: #fff;
  color: #ffffff;
`
export const ButtonBuy = styled(Button)`
  background-color: #58f;
  
  &:hover {
    background-color: #47f;
  }
`
export const ButtonSell = styled(Button)`
  background-color: #5b6;
  
  &:hover {
    background-color: #3b4;
  }
`
export const Actions = styled.div`
display:flex;
`
export const Card = styled.div`
  position: relative;
  aspect-ratio:0.7;
  box-shadow: 0.12rem 0.12rem 0.36rem #3336;
  
  line-height:1.1;
  gap: 0.1rem;
  overflow:hidden;
  
  &:hover ${Image} {
    filter: saturate(0);
  }
  
  &:hover ${CardOverlay} {
    height: 100%;
  }
`