import {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchDialog } from '../../redux/messageSlice';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Message } from '../Message/Message';
import c from './Dialog.module.scss'

interface IDialogProps {
    activeChat: string
}

export const Dialog:FC<IDialogProps> = ({activeChat}:IDialogProps) => {
    const dispatch = useAppDispatch()
    const messages = useAppSelector(s => s.messages.messages.data)
    const activeTitle = useAppSelector(s => s.messages.activeTitle) 
    
    useEffect( () => {
        if (activeChat) {
            dispatch(fetchDialog(activeChat))
        }
    }, [dispatch, activeChat])

    if(!messages.length || !activeTitle) {
        return <div className={c.wrap}>Loading...</div>
    }

    return <div className={c.wrap}>

        <Header title={activeTitle} />

        <div className={c.dialogsFlex}>
        {messages.map((el, i) => (
            <Message key={el.id}
                my={el.user.you} 
                main={el.user.avatar !== ''}
                text={el.message}
                time={el.created_at}
                isNew={el.is_new && messages[i+1].is_new}
                avatar={el.user.avatar}
                name={el.user.name}
                surname={el.user.surname}
                 />
        ))}
        </div>

        <Input />        

    </div>
}