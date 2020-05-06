import {CHATS_SEND, chatsSend} from 'actions/chats';

export const bot = (store) => (next) => (action) => {
	const {author, chatId} = action.payload || '';
	const {dispatch, getState} = store;
	const state = getState();
	const {botted} = state.chats;
	console.log('middleware', state);
	console.log('middleware', action);
	if(!botted){
		switch(action.type){
			case CHATS_SEND: {			
				if(author !== 'bot'){
					console.log('WARNIIIIIIIIIIIIIIIIIIIIIING');
					setInterval(() => {
						dispatch(chatsSend({
						chatId,
						author: 'bot',
						text: `Довольно интересная мысль ${author}`
					}));
					
					}, 1000);
				}
			}
		}
	}else{
		
	}
	next(action);
}