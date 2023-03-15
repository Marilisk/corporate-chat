import { FC } from 'react';
import c from './Input.module.scss'
import sendIcon from './sendIcon.svg'
import addFileIcon from './addFileIcon.svg'


export const Input: FC = () => {

    const handleChange = (e) => {
        console.log(e.currentTarget.innerHTML)
    }

    return <div className={c.wrap}>
        <div className={c.container}>

            <div contentEditable={true} suppressContentEditableWarning={true} 
                onChange={(e) => handleChange(e)} className={c.textarea}>
                Type message
            </div>

            <div className={c.iconsWrapper}>
                <img alt='addfile' src={addFileIcon} />
                <img alt='send' src={sendIcon} />
            </div>

        </div>

    </div>
}