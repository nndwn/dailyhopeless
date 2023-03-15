import React,{useEffect, useState} from "react";
import Css from "../rootCss";
import Header from "./header/header";
import Main from "./content/main";
import Footer from "./footer/footer";


const Layout = ({page, children}) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const scroll = window.scrollY
        setScrollPosition(scroll)
        navigation()
    }
    const navigation = () => {
        const service = document.querySelector('#mainTitleArea');
        const serviceTop = service.offsetTop;
        const contact = document.querySelector('#contact');
        const contactTop = contact.offsetTop - 100;
        if(window.outerWidth >= 992) {
            if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
                if (page.lang ===  "en") {
                    document.querySelector('.currentLine').style.cssText = 'left:168px; width: 70px';
                } else {
                    document.querySelector('.currentLine').style.cssText = 'left:178px; width: 66px';
                }
                
            } else if (window.scrollY >= contactTop ){
                if (page.lang ===  "en") {
                    document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
                } else {
                    document.querySelector('.currentLine').style.cssText = 'left:323px; width: 56px';
                }
            } else {
                if (page.lang ===  "en") {
                    document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
                } else {
                    document.querySelector('.currentLine').style.cssText = 'left: 42px; width: 56px';
                }
            }
        }else{
            if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
                    if (page.lang ===  "en") {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left:108px; width: 60px';
                    } else {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left:116px; width: 65px';
                    }
                    navactive (2)
                } 
                else if (window.scrollY >= contactTop ){
                    if (page.lang ===  "en") {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 215px; width: 62px';
                    } else {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 222px; width: 55px';   
                    }
                    navactive (3)
                } 
                else {
                    if (page.lang ===  "en") {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 16px; width: 50px';
                    } else {
                        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 20px; width: 55px';
                    }
                    navactive (1)
                    
            }
        }
    }
    const navactive = (Indexli) => {
        const navAktivMobile = document.querySelectorAll('.navMobile li');
        for (let i = 0; i < navAktivMobile.length; i++) {
            navAktivMobile[i].className = navAktivMobile[i].className.replace(" active", "");
        }
        navAktivMobile[Indexli-1].className += " active";
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true})
    })
    return(
    <Css>
        <Header data={page} scroll={scrollPosition} />
        <Main data={page} scroll={scrollPosition} />
        <Footer data={page}/>
        {children}
    </Css>
)}

export default Layout