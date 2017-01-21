import React from 'react';

export default class Product extends React.Component{

	constructor (props){
		super(props)
		this.state = {
			watched: props.watched
		};
	}


	static get defaultProps(){
		return {
			title: 'Unititled',
			description: 'This product has no description',
			watched: false,
			category: 'Furniture'
		}
	}

	_handleWatchClick() {
		this.setState({
			watched: !this.state.watched
		});
	}

	componentWillMount() {
		console.log(this.props);
		console.log(document.getElementsByClassName('prod'));
	}

	componentDidMount() {
		console.log(document.getElementsByClassName('prod'));
	}

/*
	static get defaultProps(){
		return {
			title: "No title"
		}
	}

	static get propTypes(){
		return {
			title: React.PropTypes.string
		}
	}
*/
	render() {
		const watched = this.state.watched;
		return (
			<div style={{border: '1px solid grey', padding: '20px', margin: '20px 0 20px 0'}} className="prod">
				
				<h2> {this.props.nr + 1}. {this.props.title} </h2>
				<p>{this.props.description}</p>
				<p>{this.props.category}</p>
				<p>
				<button onClick={this._handleWatchClick.bind(this)}>{watched ? 'Unwatch' : 'Watch!'}</button>
				{watched ? 'You are watching the product' : ''}
				</p>
			</div>
		);
	}

}