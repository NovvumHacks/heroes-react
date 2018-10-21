import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import Heroes from './Heroes';
import { ApolloProvider } from 'react-apollo';
import './styles.css';

const client = new ApolloClient({
	uri: 'https://api.graph.cool/simple/v1/cjni7fpei42as01327wl5m739'
});

const App = () => (
	<ApolloProvider client={client}>
		<Heroes />
	</ApolloProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
