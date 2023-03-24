import React,{useEffect, useState} from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout";
import Seo from "../components/head/seo";
import Header from "../components/layout/header/header";
import Main from "../components/layout/content/main";
import Footer from "../components/layout/footer/footer";

const Lang = ({children, data}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navactive = (Indexli) => {
      const navAktivMobile = document.querySelectorAll('.navMobile li');
      for (let i = 0; i < navAktivMobile.length; i++) {
          navAktivMobile[i].className = navAktivMobile[i].className.replace(" active", "");
      }
      navAktivMobile[Indexli-1].className += " active";
  }
  useEffect(() => {
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
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left:168px; width: 70px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left:178px; width: 66px';
                  }
                  
              } else if (window.scrollY >= contactTop ){
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left:323px; width: 56px';
                  }
              } else {
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left: 42px; width: 56px';
                  }
              }
          }else{
              if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left:108px; width: 60px';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left:116px; width: 65px';
                      }
                      navactive(2)
                  } 
                  else if (window.scrollY >= contactTop ){
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 215px; width: 62px';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 222px; width: 55px';   
                      }
                      navactive(3)
                  } 
                  else {
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 16px; width: 50px';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 0; width: 55px';
                      }
                      navactive(1)    
              }
          }
      }
      window.addEventListener('scroll', handleScroll, { passive: true})
      return () => {
          document.removeEventListener('scroll', handleScroll);
        }
  })
    return(
        <Layout page={data.lang}>
              <Header data={data.lang} scroll={scrollPosition} />
              <Main data={data.lang} scroll={scrollPosition} />
              <Footer data={data.lang}/>
            {children}
        </Layout>
    )
}
export const Head = ({data}) => {
  const s = data.lang
  return(
    <>
      <Seo 
        desc= {s.description}
        keyword ={s.keyword}
        lang = {s.lang}
        language = {s.language}
        />
    </>
  )
}



export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    lang
    language
    description
    keyword
    menu {
      name
      link
    }
    headline {
      h1
      h2
    }
    popbutton
    textbutton
    contact {
      button
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: BLURRED
            formats: JPG
            layout: FULL_WIDTH
          )
        }
      }
      text
      alt
    }
    services {
      alt
      credit
      description
      title
      icon
      link
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: JPG
          )
        }
      }
    }
    slide {
      alt
      image {
        childImageSharp {
          gatsbyImageData(
            formats: JPG
            quality: 80
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
}
`

export default Lang