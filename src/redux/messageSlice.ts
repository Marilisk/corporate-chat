import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/chat";
import { IMessagesInitState } from "../interface/interface";

export const fetchChat = createAsyncThunk('messages/fetchChat', async () => {
    const { data } = await instance.get('/chat.get?offset=0&limit=20');
    return data.response;
})

export const fetchDialog = createAsyncThunk('messages/fetchDialog', async (id: string) => {
    const { data } = await instance.get(`/message.get?chat_id=${id}&offset=0&limit=20`);
    return data.response;
})

const initialState: IMessagesInitState = {
    chats: {
        data: [],
        status: 'loaded',
    },
    messages: {
        data: [],
        status: 'loaded',
    },
    activeDialog: '',
    activeTitle: '',
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setActiveChat(state, action) {
            state.activeDialog = action.payload.id
            state.activeTitle = action.payload.title
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChat.pending, (state) => {
            state.chats.status = 'loading';
        })
            .addCase(fetchChat.fulfilled, (state, action) => {
                state.chats.status = 'loaded';
                state.chats.data = action.payload;
                state.activeDialog = action.payload[0].id
                state.activeTitle = action.payload[0].title
            })
            .addCase(fetchChat.rejected, (state) => {
                state.chats.status = 'error';
            })

            .addCase(fetchDialog.pending, (state) => {
                state.chats.status = 'loading';
            })
            .addCase(fetchDialog.fulfilled, (state, action) => {
                state.chats.status = 'loaded';
                state.messages.data = action.payload;
            })
            .addCase(fetchDialog.rejected, (state) => {
                state.chats.status = 'error';
            })
    },
});

export const { setActiveChat } = messagesSlice.actions;
export default messagesSlice.reducer;