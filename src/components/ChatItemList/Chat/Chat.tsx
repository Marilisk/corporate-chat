import { setActiveChat } from '../../../redux/messageSlice'
import { FC } from 'react';
import c from './Chat.module.scss'
import { Avatar } from '../../Avatar';
import { determinateTime } from './determinate';
import { useAppDispatch } from '../../../redux/hooks';
import { IChat } from '../../../interface/interface';

interface IChatProps {
    chat: IChat
    isActive: boolean
}

export const Chat: FC<IChatProps> = ({ chat, isActive }: IChatProps) => {
    const dispatch = useAppDispatch()

    const text = chat.last_message.message

    const time = determinateTime(chat.created_at)

    return <div className={c.wrap}
        style={isActive ? { background: 'rgba(64, 126, 201, 0.08)' } : { background: 'unset' }}
        onClick={() => dispatch(setActiveChat({ id: chat.id, title: chat.title }))} >

        <div className={c.avatarWrap}>
            <Avatar src={chat.avatar} size='md' />
        </div>

        <div>

            <div className={c.head}>
                <p className={c.name}>
                    {chat.last_message.user_name} {chat.last_message.user_surname}
                </p>
                <p className={c.time}>
                    {time}
                </p>
            </div>

            <div>
                <div className={c.msg}>
                    {text}
                </div>
            </div>

        </div>

    </div>
}