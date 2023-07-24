import Header from './Header';
import React, { useState } from 'react';
const Home=()=> {
    const [isShow,setIsShow]=useState(false);
    const [isCt1Show,setIsCt1Show]=useState(false);
    // const [isCt2Show,setIsCt2Show]=useState(false);
    // const [isCt3Show,setIsCt3Show]=useState(false);
    
    // const [state, dispatch] = useReducer();
    const contents=[
        {
            id:1,
            name:'DOM manipulating'
        },
        {
            id:2,
            name:'Create react app'
        },
        {
            id:3,
            name:'JSX, Component, props'
        }
    ]
    const HandleShowClick=()=>{
        if(isShow){
            setIsShow(false);
            setIsCt1Show(false)
        }
        else setIsShow(true)
    }
    const HandleHoverEnter=()=>{
        setIsCt1Show(true)
    }

    // const HandleHoverLeave=useCallback((id)=>{
    //     (id===1||id===2)?(id===1?setIsCt1Show(false):setIsCt2Show(false)):setIsCt3Show(false)
    // },[isCt1Show,isCt2Show,isCt3Show])
    
return(
    <div>
<Header/>
<div className='main-content'>
    <button className='rounded md:p-1 p-2 m-10 border-solid hover:bg-blue-600 hover:text-white border-blue-400 border-2' onClick={HandleShowClick}>{isShow?'Hide':'Show Content'}</button>
{isShow&&(
       <>
       <ul className='ml-10 mb-2 text-blue-400 '>
       {contents.map((content)=>(
           <li 
           key={content.id} 
           className='hover:text-blue-200' 
           onMouseEnter={HandleHoverEnter}
        //    onMouseLeave={HandleHoverLeave}
           >
            {content.name}
            </li>
       ))}
       </ul>
       </>
)}
</div>
<div className='detail pt-10 pl-10'>
          {isCt1Show&isShow?(
        <table className='  items-center border-separate border-spacing-2  rounded'>
           
              <tr className=' '>
              {contents.map((content)=>(
                // const classNames='text-blue-300'
                // (content.id===3)&&  className +='hover:text-blue-200'
             <th key={content.id} className='text-blue-300'>{content.name}</th>
         ))}
              </tr>
         
            <tr className=''>
               
                <td className=' text-gray-700 border border-slate-300 rounded' >
                    <ul className='px-5 py-3'>
                        <li><b>Grabbing element references:</b> document.querySelector(),..</li>
                        <li><b>Creating and placing new nodes:</b> createTextNode(),Node.createElement();</li>
                        <li><b>Moving and removing elements:</b> Node.removeChild(),remove()</li>
                        <li><b>Manipulating styles:</b>Element.style.color = "white"</li>
                        <li><a className='text-blue-200' href="https://www.w3schools.com/js/js_htmldom_document.asp">More information</a></li>
                    </ul>
                </td>
                
              
              
                    <td  className=' text-gray-700 border border-slate-300 rounded'>
                    <ul className='px-5 py-3'>
                        <li>create-react-app my-app</li>
                        <li>cd my-app</li>
                        <li>npm start</li>
                    </ul>
                </td>
               
               
                 <td  className=' text-gray-700 border border-slate-300 rounded'>
                 <ul className='px-5 py-3'>
                     <li>JSX  stands for JavaScript XML, </li>
                     <li>allows us to write HTML elements in JavaScript and place them in the DOM.</li>
                     <li>JSX converts HTML tags into react elements.</li>
                     <li>Class components and Function components</li>
                     <li>Props are immutable.When you need interactivity, you’ll need to set state.</li>
                 </ul>
             </td>
               
            </tr>
        </table>
          ):''}
</div>
</div>
)
}
export default Home;