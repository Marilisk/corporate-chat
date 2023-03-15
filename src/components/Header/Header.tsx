import { FC } from 'react';
import c from './Header.module.scss'
import icon from './Shape.svg'

interface IHeaderProps {
    title: string
}

export const Header: FC<IHeaderProps> = ({ title }: IHeaderProps) => {

    return <div className={c.wrap}>
        <img alt='icon' src={icon} />
        <h2>
            {title}
        </h2>
    </div>
}