"use strict";

var React = require('react');

var Card = React.createClass({
	render: function() {
		return (
			<div>
				<div>
                    <div className="composite">
                        <div className="footer">
                            <ul>
                                <li><img src="/images/logo.png"/></li>
                                <li>Home And Away</li>

                            </ul>
                        </div>

                    </div>
                </div>
			</div>
		);
	}
});

module.exports = Card;