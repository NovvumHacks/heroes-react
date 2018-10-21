import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		width: 300,
		height: 'auto',
		margin: 5
	},
	media: {
		objectFit: 'cover'
	}
};

function HeroCard(props) {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={props.alt}
					className={classes.media}
					height="140"
					image={props.image}
					title={props.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.name}
					</Typography>
					<ul>
						{props.powers.map((p) => (
							<Typography key={p} gutterBottom variant="li" component="h2">
								{p}
							</Typography>
						))}
					</ul>
					<Typography component="p">{props.universe}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

HeroCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroCard);
