import React from 'react'
import Popup from '../components/Popup/Popup'
import Update from './Update'

export default function Popuppage(){
    return(
        <div>
            <div className='blur-[1px]'>
                <Update/>
            </div>
            <Popup/>
        </div>
    )
}