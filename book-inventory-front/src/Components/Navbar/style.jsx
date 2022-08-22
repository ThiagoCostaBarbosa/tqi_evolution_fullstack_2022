import styled from 'styled-components';
import image from '../../Assets/tqi.svg';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  margin: 0;
  padding: 0;
  box-shadow: #0001 0px 0px 4px 0px, #0001 0px 0px 2px 0px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background: #eee;
  padding: 0;
`;
export const SearchHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 3rem;
  background: #eeba0b;
  box-shadow: #0001 0px 0px 4px 0px;
  color: white;
  padding: 0.8rem;
  margin: 0;
`;
export const Logo = styled.img`
  content: url(${image});
  width: 8rem;
`;
export const SearchBox = styled.input.attrs({ type:"search", placeholder:"Pesquisar" })`
  flex: 1;
  background: #fff;
  color: #666;
  outline: 0;
  overflow: hidden;
  border-radius: 1rem;
  font-size: 1.1rem;
  padding: 1rem;
  border: 0.1em solid #eee;
  box-shadow: #0001 0 0 0.2rem 0, #0001 0 0 0.1rem 0;
  transition: border .1s ease, box-shadow .1s ease;
	&:hover,
	&:focus{
		box-shadow: #0001 0 0.1rem 0.1rem, #0001 0 0.2rem 0.1rem, #0001 0 0.5rem 0.2rem, #5551 0 0.8rem 0.5rem, #0001 0 1rem 0.8rem;
	  border: 0.1em solid #ccc;
	}
`;
export const CartBox = styled.button`
  display: flex;
  align-items: center;
	gap:1.5em;
	background: #fff;
  color: #666;
  outline: 0;
  overflow: hidden;
  border-radius: 1rem;
  padding: 0 0 0 3rem;
	cursor: pointer;
  border: 0;
  box-shadow: #0001 0 0 0.2rem 0, #0001 0 0 0.1rem 0;
  transition: box-shadow .1s ease;
	&:hover,
	&:focus{
		box-shadow: #0001 0 0.1rem 0.1rem, #0001 0 0.2rem 0.1rem, #0001 0 0.5rem 0.2rem, #5551 0 0.8rem 0.5rem, #0001 0 1rem 0.8rem;
	}
`
export const CartLabel = styled.div`
	margin: 0;
	padding: 0;
	font-size: 1rem;
`
export const CartTotalValue = styled.div`
	margin: 0;
	padding: 0;
	font-size: 1.3rem;
	font-weight: bold;
	color: #a33;
`
export const CartIcon = styled.div`
  width: 3.8rem;
  height: 100%;
  margin: 0;
  border-radius: 1rem 0 0 1rem;
  background-color: #333;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
	&:hover {
	  background-color: #ee4400;
	  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
	    rgba(0, 0, 0, 0.08) 0px 8px 4px;
	}
`
export const NavLink = styled(Link)`
	padding: 0.3rem 2rem 0.5rem;
	text-decoration: none;
	color: #333;
	font-weight: bold;
	border-radius: 0 0 1rem 1rem;
  box-shadow: inset 0 0 0 0 #eeba0b;
  transition: color .1s ease, box-shadow .1s ease;

	&:hover {
	  color: #fff;
	  box-shadow: inset 0 200px 0 0 #eeba0b;
	}
`
