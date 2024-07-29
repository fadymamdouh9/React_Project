import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'


function App() {

  useEffect(() => {
    window.addEventListener("scroll" , ()=>{
      if (window.scrollY > 300) {
        setshowscrollbtn(true)
      }else{
        setshowscrollbtn(false)
      }
      
    });
  }, []);
  const [showscrollbtn, setshowscrollbtn] = useState(false);
  return (
    <div id='up' className='container'>
      
      <Header />
      
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' /> 
      <Footer />

    

<a style={{opacity:showscrollbtn? 1 : 0 ,transition:"1s"}} href="#up">
<button className='icon-arrow_upward  scroll'></button>
</a>

    
      
    </div>

  )
}

export default App
