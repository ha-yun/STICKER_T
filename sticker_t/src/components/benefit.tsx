import img_controller from '../assets/img/controller.png';
import img_heart from '../assets/img/heart.png';
import img_group from '../assets/img/group.png';
import img_pen from '../assets/img/pen.png';


function Benefit(){
    return(
        <div id="benefit">
            <h2>Benefit</h2>
            <div>
                <span><img src={img_controller} alt="controller" /><br /><br />즐길거리<br />
                    새로운 재미요소</span>
                <span><img src={img_heart} alt="heart" /><br /><br />홍보<br />
                    일러스트 홍보</span>
                <span><img src={img_group} alt="group" /><br /><br />언택트 소통<br />
                    소통의 부재를 해결 가능</span>
                <span><img src={img_pen} alt="pen" /><br /><br />에듀테인먼트<br />
                    사물에 대해 학습</span>
            </div>
        </div>
    )
}
export default Benefit;