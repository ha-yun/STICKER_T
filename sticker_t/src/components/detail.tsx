
function Details(){
    
    return(
        
        <div id="detail" onMouseEnter={event => {
            let detail_img1 = document.getElementById("detail_img1")?.querySelector('span');
            let detail_img2 = document.getElementById("detail_img2")?.querySelector('span');
            if (detail_img1 instanceof Element && detail_img2 instanceof Element){
                detail_img1.style.opacity = '1';
                detail_img2.style.opacity = '1';
            }
        }}
        onMouseLeave={event => {
            let detail_img1 = document.getElementById("detail_img1")?.querySelector('span');
            let detail_img2 = document.getElementById("detail_img2")?.querySelector('span');
            if (detail_img1 instanceof Element && detail_img2 instanceof Element){
                detail_img1.style.opacity = '0';
                detail_img2.style.opacity = '0';
            }
        }}>
            <p id="detail_img1">
                <span>마음에 드는 사물을 촬영하여 만드는 나만의 공간<br /><br />
                    나만의 공간은 2D부터 3D까지 자유롭게!</span>
            </p>
            <p id="detail_img2">
                <span>인공지능이 추천해주는 다양한 이미지를<br /><br />
                취향에 맞춰 자유롭게 꾸며 봐요!</span>
            </p>
        </div>
    )
}
export default Details;