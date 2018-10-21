import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = {
	card: {
		width: '32%',
		height: 'auto',
		margin: 5
	},
	media: {
		objectFit: 'cover'
	}
};

class HeroCard extends React.Component {
	state = {
		powers: false,
		identities: false
	};

	handleClickPowers = () => {
		this.setState((state) => ({ powers: !state.powers }));
	};
	handleClickIdentities = () => {
		this.setState((state) => ({ identities: !state.identities }));
	};

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.card}>
				<CardMedia
					component="img"
					alt={this.props.alt}
					className={classes.media}
					height="auto"
					image={this.props.image}
					title={this.props.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{this.props.name}
					</Typography>
					<ListItem button onClick={this.handleClickPowers}>
						<ListItemText primary="Powers" />
						{this.state.powers ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.powers} timeout="auto" unmountOnExit>
						{this.props.powers.map((p) => (
							<ListItem key={p}>
								<ListItemText secondary={p} />
							</ListItem>
						))}
					</Collapse>
					<ListItem button onClick={this.handleClickIdentities}>
						<ListItemText primary="Secret Identities" />
						{this.state.identities ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.identities} timeout="auto" unmountOnExit>
						{this.props.secretIdentities.map((s) => (
							<ListItem key={s}>
								<ListItemText secondary={s} />
							</ListItem>
						))}
					</Collapse>
					<ListItem>
						<ListItemText primary="Universe" secondary={this.props.universe} />
					</ListItem>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(HeroCard);
