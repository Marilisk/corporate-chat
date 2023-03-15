import { FC } from "react";
import { ChatItemsList } from "../../components/ChatItemList/ChatItemList";
import { Dialog } from "../../components/Dialog/Dialog";
import { useAppSelector } from "../../redux/hooks";
import c from './index.module.scss'

export const PageIndex: FC = () => {

    const activeChat = useAppSelector(s => s.messages.activeDialog)

    return <>
        <div className={c.wrap}>
            <ChatItemsList activeChat={activeChat} />
            <Dialog activeChat={activeChat} />
        </div>
        <div className={c.empty}>
            ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </div>
    </>
}