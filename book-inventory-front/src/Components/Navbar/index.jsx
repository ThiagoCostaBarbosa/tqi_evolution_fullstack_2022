import {Header, Nav, SearchHeader, Logo, SearchBox, CartBox, CartLabel, CartTotalValue, CartIcon, NavLink,} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';

const Navbar = () => {
  return (
    <Header>
      <SearchHeader>
        <Logo/>
        <SearchBox
          name="inputSearch"
          id="inputSearch"
        />
        <CartBox>
          <div>
            <CartLabel>SubTotal</CartLabel>
            <CartTotalValue>R$0,00</CartTotalValue>
          </div>
          <CartIcon><FontAwesomeIcon icon={faCartShopping} /></CartIcon>
        </CartBox>
      </SearchHeader>
      <Nav>
        <NavLink to="/books/register">Cadastrar Livro</NavLink>
        <NavLink to="/books">Livros</NavLink>
      </Nav>
    </Header>
  )
}


export default Navbar;
