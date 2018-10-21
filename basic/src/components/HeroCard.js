import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CollapsableList from './CollapsableList';

const styles = {
	card: {
		width: '32%',
		maxWidth: '300px',
		height: 'auto',
		margin: 5
	},
	media: {
		objectFit: 'cover'
	}
};

const HeroCard = (props) => {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				alt={props.alt}
				className={classes.media}
				height="auto"
				image={props.image}
				title={props.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				<CollapsableList name="Powers" items={props.powers} />
				<CollapsableList
					name="Secret Identities"
					items={props.secretIdentities}
				/>
				<ListItem>
					<ListItemText primary="Universe" secondary={props.universe} />
				</ListItem>
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(HeroCard);
