import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import ErrorPage404 from './error-page-404';
import Root, { loader as rootLoader, action as rootAction } from './Root';
import Student, {
	loader as studentLoader,
} from './Student';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: '/students/:studentId',
				element: <Student />,
				loader: studentLoader,
			},
		],
	},


]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);