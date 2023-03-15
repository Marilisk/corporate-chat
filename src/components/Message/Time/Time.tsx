import { FC } from 'react';
import c from './Time.module.scss'
import arrows from './arrows.svg'


interface ITimeProps {
    time: string
    my: boolean
    isNew: boolean
}

export const Time: FC<ITimeProps> = ({ time, my, isNew }: ITimeProps) => {

    return <div className={c.wrap}>
        <div>
            {time}
            {
                (!my && !isNew) &&
                <img src={arrows} alt="arrows" />
            }
        </div>
    </div>
}