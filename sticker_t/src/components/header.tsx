import img_Title from '../assets/img/Title.png';

function Nav(props:any){
    const lis = [];
    for(let i=0; i<props.menus.length; i++){
        let t = props.menus[i]
        lis.push(<a key={t.id} href={t.id}>{t.title}</a>)
    };

    return(
        <nav className="menubar">
            <button type='button' id="menu">=</button><br />
            {lis}
        </nav>
    )
}

function Header(){
    const menus = [
        {id:'#skill', title:'skill'},{id:'#about', title:'about'},
        {id:'#detail', title:'detail'},{id:'#benefit', title:'benefit'}
    ];
    const scrollHeader = () => {
        let window_scroll = window.scrollY;
        let HeaderColor = document.querySelector("header");
        if(window_scroll>0){
            HeaderColor?.classList.remove('headerBColor');
        }
        else{
            HeaderColor?.classList.add('headerBColor');
        }
    }
    window.addEventListener("scroll", scrollHeader);
    return(
        <header>
            <div className="header">
                <a href="index.html">
                <img src={img_Title} alt="Catch Ketch Sticker" />
                </a>
            </div>
            <Nav menus={menus}></Nav>
        </header>
    )
}
export default Header;


let menu = document.getElementById("menu")?.style.display;
let menubar = document.querySelectorAll<HTMLElement>('.menubar > a');

// accordian menu
menubar.forEach((val)=>{val.style.display = 'none'});
const menuClick = () => {
    if (menubar[0].style.display === 'none'){
        menubar.forEach((val)=>{val.style.display = 'block'});
    }else{
        menubar.forEach((val)=>{val.style.display = 'none'});
    }
}
document.getElementById("menu")?.addEventListener('click',menuClick);

// responsive
const Resize = () => {
    window.addEventListener("resize",function(){
        let width = this.window.outerWidth;
        if (width < 1024){
            menu = 'inline-block';
            menubar.forEach((val)=>{val.style.display = 'none'});
        }else{
            menu = 'none';
            menubar.forEach((val)=>{val.style.display = 'inline-block'});
        }
    })
}
Resize();