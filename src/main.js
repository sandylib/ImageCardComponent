
"use strict";

var React = require('react');
var Card = require('./components/CardComponent');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Card/>
			</div>
		);
	}
});

React.render(<Home />, document.getElementById('app'));
