import {
	CHAT_FLASH,
	CHATS_LOAD,
	CHATS_SEND,
	CHAT_ADD, 
	CHAT_DELETE,
	CHATS_REQUEST,
	CHATS_SUCCESS,
	CHATS_FAILTURE
} from 'actions/chats';


const initialState = {
	loading: false,
	error: false,
	entries: {}
};

export const chatsReducer = (state = initialState, action) => {
	switch(action.type){
		case CHATS_LOAD: {
			return {
			...state,
			entries: dataBackend
		}};
		case CHATS_SEND: {
			const author = action.payload.author || '';
			if(author === 'bot'){
				return {
					...state,
					entries: {
						...state.entries,
						[action.payload.chatId]: {
							...state.entries[action.payload.chatId],
							messages: [
								...state.entries[action.payload.chatId].messages,
								{
									text: action.payload.text,
									author: action.payload.author,
								}
							]
						}
					},
				}
			}
			if(author !== 'bot'){
				return {
					...state,
					entries: {
						...state.entries,
						[action.payload.chatId]: {
							...state.entries[action.payload.chatId],
							messages: [
								...state.entries[action.payload.chatId].messages,
								{
									text: action.payload.text,
									author: action.payload.author,
								}
							]
						}
					},
				}
			}
		};
		case CHAT_ADD: {
			const {chatId, name} = action.payload;
			return {
				...state,
				entries: {
					...state.entries,
					[chatId]: {
						...state.entries[chatId],
						name,
						messages: []
					}
				}
			}
		}
		case CHAT_FLASH: {
			const {chatId, flashState} = action.payload;
			return {
				...state,
				entries: {
					...state.entries,
					[chatId]: {
						...state.entries[chatId],
						flashing: flashState
					}
				}
			}
		}
		case CHAT_DELETE: {
			const chatId = action.payload;
			const keys = Object.keys(state.entries);
			const id = keys.findIndex((el) => {
				el == chatId
			});
			const newEntries = {};
			for(let el in state.entries){
				if(el != chatId){
					newEntries[el] = {...state.entries[el]};
				}
			}
			return {
				...state,
				entries: {
					...newEntries
				}
			};
		}
		case CHATS_REQUEST: {
			return {
				...state,
				loading: true,
				error: false
			};
		}
		case CHATS_SUCCESS: {
			return {
				...state,
				loading: false,
				entries: action.payload
			};
		}
		case CHATS_FAILTURE: {
			return {
				...state,
				error: true,
				loading: false
			}
		}
		default: return state;
	}
}