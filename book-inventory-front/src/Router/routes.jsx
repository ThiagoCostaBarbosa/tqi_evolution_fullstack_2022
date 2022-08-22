import { Login, Books, NewBook, Error404 } from '../Containers';

export const routes = () => [
	{
		path: '/',
		component: Books,
		exact: true,
	},
	{
		path: '/login',
		component: Login,
		exact: true,
	},
	{
		path: '/books',
		component: Books,
		exact: true,
	},
	{
		path: '/books/register',
		component: NewBook,
		exact: true,
	},
	{
		path: '/404',
		component: Error404,
		exact: false,
	}
];
export default routes;
