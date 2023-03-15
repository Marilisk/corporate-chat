import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { IChatItemsListProps } from '../../interface/interface';
import { Chat } from './Chat/Chat';
import c from './ChatItemsList.module.scss'

export const ChatItemsList: FC<IChatItemsListProps> = ({ activeChat }: IChatItemsListProps) => {

    const chats = useAppSelector(s => s.messages.chats.data)

    if (!chats.length) {
        return <div>Loading...</div>
    }

    return <div className={c.wrap}>
        <div className={c.header}>
            <h2>All Chats</h2>
        </div>
        {chats.map(el => (
            <Chat key={el.id} chat={el} isActive={activeChat === el.id} />
        ))}
    </div>
}