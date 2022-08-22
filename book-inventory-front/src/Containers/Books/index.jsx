import {useQuery} from 'react-query';
import booksApi from "../../Commons/Api/booksApi";
import {
  Main, Content,
  Card,
  Image,
  CardOverlay,
  Info,
  Title,
  Author,
  Publisher,
  PublisherDate,
  Actions,
  ButtonBuy,
  ButtonSell, BookFlexCol, InventoryLabel, Inventory,
} from './style';
import {useNavigate} from 'react-router-dom';

const Books = () => {
  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery("books", booksApi.getAll);



  const navigate = useNavigate();

  const purchaseLink=(data)=>navigate('/purchases/register',{state: data});

  const orderLink=(data)=>navigate('/orders/register',{state: data});



  let content = isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    books.map((book) => {
      return (
        <div key={book.id}>
          <Card>
            <Image src={book.image} alt="Avatar"/>
            <CardOverlay>
              <Info>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <BookFlexCol>
                  <PublisherDate>{book.publisherDate}</PublisherDate>
                  <Publisher>{book.publisher}</Publisher>
                </BookFlexCol>
                <BookFlexCol>
                  <InventoryLabel>Estoque:</InventoryLabel>
                  <Inventory>{book.inventory}</Inventory>
                </BookFlexCol>
              </Info>
              <Actions>
                <ButtonBuy onClick={() => purchaseLink(book)} >Comprar</ButtonBuy>
                <ButtonSell onClick={() => orderLink(book)} >Vender</ButtonSell>
              </Actions>
            </CardOverlay>
          </Card>
        </div>
      );
    })
  );

  return (
    <Main>
      <Content>
        {content}
      </Content>
    </Main>
  );
};


export default Books;
