import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './Layout.sass';
import {Messenger} from '../Messenger';
import {ChatHeader} from '../ChatHeader';
import {ChatList} from '../ChatList';

export class Layout extends React.Component{
	
	state = {
		chats: [
			'chat1',
			'chat2',
			'chat3',
			'chat4',
			'chat5'
		]
	}
	
	render(){
		const {chats} = this.state;
		const {params} = {...this.props.match.params};
		console.log('params', params);
		return (
			<div className="chatout">
				<ChatHeader />
				<div className="chatout__room">
					<ChatList 
						chats={chats}
						className="chatout__chatlist"
						{...this.props.match.params}/>
					<Messenger 
						className="chatout__messenger"
						{...this.props.match.params}/>
				</div>
			</div>
		)
	}
}