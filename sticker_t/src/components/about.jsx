import img_kids from '../assets/img/kids.png';
import img_google from '../assets/img/google.png';
import img_apple from '../assets/img/apple.png';


function Abouts(){

    return(
        <div id="about">
            <img src={img_kids} alt="kids" />
            <p>이미지 인식을 통한 캐릭터 생성<br />
                커스터마이징 게임 서비스<br />
                <span>#시뮬레이션  #온라인  #오프라인  #싱글플레이어</span><br />
                <img src={img_google} alt="google" />
                <img src={img_apple} alt="apple" /></p>
        </div>
    )
}
export default Abouts;