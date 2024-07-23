import React, { useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll'; 
import { CartContext } from '../context/CartContext';
import gsap from "gsap"


function Navbar() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/cart");
  };
  const { cart } = useContext(CartContext); // Destructure only the `cart` from context
  const hl=()=>{
    var element=document.getElementById("h");
    element.scrollIntoView()
  }
  React.useEffect(() => {
    gsap.fromTo(
      '#l',
      { x: -300 },
      {
        x: 0,
        duration: 2,
        ease: 'bounce.out', // Use bounce easing to create a collision effect
        delay: 1
      }
    );
  }, []);

  return (
    <header className='bg-gradient-to-r from-white to-purple-100'>
      <nav className='flex justify-between items-center'>
        <RouterLink to={"/"}> 
          <img src="src/assets/images.png" alt="Logo" width={80} height={80} className='ml-2'/>
        </RouterLink>
        <div className='flex'>
        <Link 
            to="kidsSection" 
            smooth={true} 
            duration={500} 
            className='p-3 m-2 hover:bg-black hover:text-white rounded-md cursor-pointer'
          >New</Link>
        <Link 
            to="shops" 
            smooth={true} 
            duration={500} 
            className='p-3 m-2 hover:bg-black hover:text-white rounded-md cursor-pointer'
          >Shop</Link>
         <Link 
            to="footers" 
            smooth={true} 
            duration={500} 
            className='p-3 m-2 hover:bg-black hover:text-white rounded-md cursor-pointer'
          >Socials</Link>
        </div>
        <div className='flex items-center cursor-pointer' onClick={handleclick}>
          <img id='l' src="src/assets/6805150.png" alt="Cart" width={40} height={40}/>
          <div className='m-6 bg-red-400 text-white px-3 py-2 rounded-3xl'>{cart.length}</div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
