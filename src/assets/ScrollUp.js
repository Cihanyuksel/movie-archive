import { useState } from 'react';
import { Icon } from './Icons';

export default function ScrollUp() {

    const [visible, setVisible] = useState(false);

    // SCROLL UP
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100){
        setVisible(true)
      } 
      else if (scrolled <= 50){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <>
        <button onClick={scrollToTop} className={`scrollup-btn ${visible ? 'scale-90' : 'scale-0'}`}><Icon name='arrow' size={32} /></button>
    </>
  )
}
