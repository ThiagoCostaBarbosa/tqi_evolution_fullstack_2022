import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Books, Error404, Login, NewBook} from '../Containers';
import { Navbar } from "../Components";
import NewPurchase from '../Containers/NewPurchase';
import NewOrder from '../Containers/NewOrder';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path="/" exact element={<Login />}/>
      <Route path="/books" exact element={<Books />}/>
      <Route path="/books/register" element={<NewBook />}/>
      <Route path="/purchases/register" element={<NewPurchase />}/>
      <Route path="/orders/register" element={<NewOrder />}/>
      <Route path="*" element={<Error404 />}/>
    </Routes>
  </BrowserRouter >
);

export default Router;
