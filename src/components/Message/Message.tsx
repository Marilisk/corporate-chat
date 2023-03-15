import { FC } from 'react';
import { Avatar } from '../Avatar';
import { determinateTime } from '../ChatItemList/Chat/determinate';
import { NewMessages } from '../NewMessages/NewMessages';
import c from './Message.module.scss'
import { Time } from './Time/Time';

interface IMessageProps {
    my: boolean
    main: boolean
    text: string
    time: number
    isNew: boolean
    avatar: string
    name: string
    surname: string
}

export const Message: FC<IMessageProps> = ({ my, main, text, time, isNew, avatar, name, surname }: IMessageProps) => {

    const formattedTime = determinateTime(time)

    return <div className={c.wrap}>

        {isNew && <NewMessages />}

        <div className={my ? c.myMsg : c.anotherMsg}>

            {main && my &&
                <div className={c.avaWrapper}>
                    <Avatar src={avatar} size={'sm'} />
                </div>
            }

            <div>

                {my && <div className={c.name}>
                    {name} {surname}
                </div>}

                <div className={c.textContainer}>
                    {text}
                    <Time my={my} time={formattedTime} isNew={isNew} />
                </div>
                
            </div>
        </div>

    </div>
}