import { useState } from "react";

function Skills(){
    const [ key, index] = useState(1);
    const [content , active] = useState(
        <li className="active">
            <h3>사용자 취향에 맞춘 SNG 게임</h3>
            catch한 객체를 sketch하여 sticker처럼<br />
            사용자의 공간을 꾸밀 수 있는 게임 애플리케이션</li>)
    function Slide(){
        if (key===1){
        active(
            <li className="active">
            <h3>사용자 취향에 맞춘 SNG 게임</h3>
            catch한 객체를 sketch하여 sticker처럼<br />
            사용자의 공간을 꾸밀 수 있는 게임 애플리케이션</li>
        )
        }else if(key===2){
            active(
                <li className="active" >
                    <h3>실물 이미지 기반 다양한 이미지 추천</h3>
                실물 이미지를 업로드 하면 협업 필터링 기반으로<br />
                사용자의 정보와 비슷한 작가의 추상 이미지 추천</li>
            )
        }else if(key===3){
            active(
                <li className="active"><h3>사용자 취향에 맞는 새로운 추상 이미지 생성</h3>
                사용자만이 가지고 있는 단 하나의 아이템 생성</li>
            )
        }else{
            active(
                <li className="active"><h3>추상 이미지를 활용한 커스터마이징 맵 서비스</h3>
                사용자 취향에 맞게 새로 생성된 이미지를 활용하여<br />
                본인만의 개성 있는 공간을 꾸밀 수 있다</li>
            )
        }
    }
    
    return(
        <div id="skill">
            <div id="prev">
                <button type="button" onClick={event => {
                    if(key === 1){
                        index(4);
                    }else{
                        index(key-1)
                    }
                    Slide();
                }}>
                    <span className="prev_btn">Prev</span>
                </button>
            </div>

            <ul id="skill_slide">
                {content}
            </ul>

            <div id="next">
                <button type="button">
                    <span className="next_btn" onClick={event => {
                        if(key === 4){
                            index(1);
                        }else{
                            index(key+1)
                        }
                        Slide();
                    }}>Next</span>
                </button>
            </div>
        </div>
    )
}

export default Skills;