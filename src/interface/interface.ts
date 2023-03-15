export interface IAvatar {
    src?: string,
    size?: "md" | "sm"
}

export interface IChatItemsListProps {
    activeChat: string
}

export interface IMessagesInitState {
    chats: {
        data: IChat[],
        status: string
    }
    messages: {
        data: IDialog[],
        status: string
    }
    activeDialog: string
    activeTitle: string
}

export interface IChat {
    id: string
    created_at: number
    title: string
    avatar: string
    private: boolean
    last_message: {
        created_at: number
        user_id: string
        user_name: string,
        user_surname: string,
        you: boolean,
        message: string
    }
}

export interface IDialog {
    id: string
    created_at: number
    user: {
        id: string
        name: string
        surname: string
        avatar: string,
        you: boolean
    }
    message: string
    is_new: boolean
}