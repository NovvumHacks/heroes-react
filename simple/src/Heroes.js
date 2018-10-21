import React from 'react';
import HeroCard from './HeroCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Heroes = (props) => (
	<div class="heroes">
		<Query query={HEROES_QUERY}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				return data.allHeroes.map((h) => (
					<HeroCard
						key={h.id}
						image={h.avatar}
						alt={h.name}
						name={h.name}
						powers={h.powers}
						secretIdentities={h.secretIdentities}
						universe={h.universe}
					/>
				));
			}}
		</Query>
	</div>
);

const HEROES_QUERY = gql`
	{
		allHeroes {
			id
			avatar
			name
			powers
			universe
			secretIdentities
		}
	}
`;

export default Heroes;
