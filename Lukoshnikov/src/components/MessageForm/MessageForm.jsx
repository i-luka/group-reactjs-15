import React from 'react';

import './messageform.sass';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input';

const SendButton = styled(Button)({
		borderRadius: 70,
		margin: '0 20px 0 0',
		height: 50
	});
	
const MessageField =styled(Input)({
	width: '100%',
	borderRadius: 70,
	border: '1px solid #303f9f',
	margin: '0 10px 0 20px',
	outlineStyle: 'none',
	padding: '4px 13px',
	minHeight: 50
	
})

export class MessageForm extends React.Component{
		
	state = {
		author: 'John',
		text: ''
	}
	sendMessage = (e) => {
		e.preventDefault();
		const {onSend} = this.props;
		
		if(typeof(onSend) === 'function'){
			onSend(this.state);
		}
		this.setState({text: ''});
	}
	onInputChange = (e) => {
		const fieldName = e.target.name;
		this.setState({
			[fieldName]: e.target.value
		});
	}
	render(){
		const {author, text} = this.state;
		return (
			<form type="post" className="post__form">
				<MessageField 
					id="outlined-basic" 
					placeholder="Пиши"
					disableUnderline
					multiline
					rowsMax={3}
					name='text'
					onChange={this.onInputChange}
					value={text}
					/>
				<SendButton
					variant="contained"
					color="primary"
					name="author"
					onClick={this.sendMessage}
					endIcon={<Icon>send</Icon>}
					>
					Шли
				</SendButton>
			</form>
		)
	}
}