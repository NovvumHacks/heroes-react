import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default class CollapsableList extends React.Component {
	state = {
		open: false
	};

	handleClick = () => {
		this.setState((state) => ({ open: !state.open }));
	};

	render() {
		const { items, name } = this.props;
		return (
			<div>
				<ListItem button onClick={this.handleClick}>
					<ListItemText primary={name} />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					{items.map((p) => (
						<ListItem key={p}>
							<ListItemText secondary={p} />
						</ListItem>
					))}
				</Collapse>
			</div>
		);
	}
}
