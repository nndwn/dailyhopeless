import React, { Fragment, useEffect} from "react";

const Nav = ({data, ul, li}) => {
    const navigation = () => {
        const service = document.querySelector('#mainTitleArea');
        const serviceTop = service.offsetTop;
        const contact = document.querySelector('#contact');
        const contactTop = contact.offsetTop - 100;
        const navAktivMobile = document.querySelectorAll('.navMobile li');
        if(window.outerWidth >= 992) {
            if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
                document.querySelector('.currentLine').style.cssText = 'left:172px; width: 60px';
            } else if (window.scrollY >= contactTop ){
                document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
            } else {
                document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
            }
        }else{
            if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
                document.querySelector('.navMobile .currentLine').style.cssText = 'left:108px; width: 60px';
                navAktivMobile[0].classList.remove('active');
                navAktivMobile[1].classList.add('active');
                navAktivMobile[2].classList.remove('active');
                } else if (window.scrollY >= contactTop ){
                    document.querySelector('.navMobile .currentLine').style.cssText = 'left: 215px; width: 62px';
                    navAktivMobile[0].classList.remove('active');
                    navAktivMobile[1].classList.remove('active');
                    navAktivMobile[2].classList.add('active');
                } else {
                document.querySelector('.navMobile .currentLine').style.cssText = 'left: 16px; width: 50px';
                navAktivMobile[0].classList.add('active');
                navAktivMobile[1].classList.remove('active');
                navAktivMobile[2].classList.remove('active');
            }
        }
    }
    useEffect (() => {
        window.addEventListener('scroll', navigation )

    }, [])
    return(
    <ul className={ul}>
        {data.menu.map(node => (
            <Fragment key={node.name}>
                <li className={li}>
                    <a href={`#${node.link}`}>{node.name}</a>
                </li>
            </Fragment>
        ))}
        <li className="currentLine" style={{left: "40px", width: "50px"}}></li>
    </ul>
)}

export default Nav