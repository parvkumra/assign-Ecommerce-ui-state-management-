import React from 'react'



function Contacts() {
  return (
    <footer id='footers'>
        <center><img src='src/assets/newspaper05.jpg.jpg' width={200} height={60}/></center>
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex justify-between w-600'>
        <div className='ml-2 mr-20'><a href='mailto:parvkumra2003@gmail.com'><span className="material-symbols-outlined h-50">
mail
</span></a></div>
        <div className='ml-20 mr-2'><a href='sms:+917042292704'><span className="material-symbols-outlined">
call
</span></a></div>
</div>
     
    </div>
    <hr className='border-1 border-solid border-black mt-4'></hr>
   <center> <div className='mt-3 text-xl'>copyrights reserved@2024</div></center>
    </footer>
  )
}

export default Contacts;
