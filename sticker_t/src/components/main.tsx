import Skills from './skill';
import Details from './detail';
import Abouts from './about';
import Benefit from './benefit';
import { useState } from 'react';

function Main(){
    const [title, change_title] = useState('캐치케치 스티커')
    
    return(
        <main>
            <div className="main" onClick={event=>{
                if(title === '캐치케치 스티커'){
                    change_title('Catch Ketch Sticker')
                }else{change_title('캐치케치 스티커' )}
            }}>
                <div>{title}</div>
            </div>

            <Skills />
            <Abouts />
            <Details />
            <Benefit />
        </main>
    )
}

export default Main;