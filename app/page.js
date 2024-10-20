"use client"
import Image1 from "./components/image1";
import Image2 from "./components/image2";
import { useState } from "react";
import { useEffect } from "react";
import Dropdown from "./components/dropdown";
import Image3 from "./components/image3";
import Image4 from "./components/image4";
import Image5 from "./components/image5";
import DragAndDrop from "./components/drag and drop";

// import Group 273 from "Group 273.svg"
// useEffect(()=>{
  
// },[arr])

export default function Home() {
  const [arr, setarr] = useState([])
  const save = () => {
    const b = arr.concat("Select an option")
    setarr(b)
  }
  const del = (index) => {
    // const b = arr
    // b.splice(index,1)
    // console.log(b)
    // console.log(arr)
    setarr(arr.slice(0, index).concat(arr.slice(index+1))) 
    // console.log(arr)
  }
  return (
    <div className="px-10 mx-10 py-2 my-2">
      <div className="px-4 py-4 my-4 mx-4 items-center justify-between flex space-x-96 bg-white h-16">
        <div className="align-text-bottom text-xl font-bold">
          devlinks
        </div>
        <div className="flex space-x-5"  >
          <button className="flex items-center text-[#633CFF] bg-[#EFEBFF] rounded-md px-3 py-2">
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66663 7.3333V8.66664H10.6666L6.99996 12.3333L7.94663 13.28L13.2266 7.99997L7.94663 2.71997L6.99996 3.66664L10.6666 7.3333H2.66663Z" fill="white" />
            </svg> */}
            <Image2 />
            Links</button>
          <button className="flex items-center"><Image3 /> profile details</button>
        </div>
        <button className="border border-[#633CFF] text-[#633CFF] rounded-md px-3 py-2">
          preview
        </button>
      </div>
      <div className="flex space-x-20 justify-around space-y-10">
        <Image1 />
        <div className="space-y-7">
          <div>
            <div className="font-bold text-2xl">Customize your Links</div>
            <div>Add/edit/remove links below and then share all your profiles with the world!</div>
          </div>
          <button onClick={() => { save() }} className="border border-[#633CFF] text-[#633CFF] rounded-md px-96 py-2 max-w-screen-xl">+ Add new link</button>
          <div>
            <h1>My Dropdown Example</h1>
          </div>
          {/* <DragAndDrop arr={arr} setarr={setarr} /> */}
          
          {/* <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#633CFF" stroke-width="2" />
            </svg>
            

           */}
          {
          arr.length === 0 ?
            <div className="px-44 text-center justify-center">
              <Image4 />
              <div className="text-center max-w-md text-2xl font-bold">Let’s get you started</div>
              <div className="text-center max-w-md">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</div>
            </div>
            :
            <>
              {Array.isArray(arr) && arr.map((item, index) => (
                // <DragAndDrop arr={arr} setarr={setarr}>
                <div key={index}>
                  <div className="flex justify-between ">
                    <div className="flex items-center text-lg gap-3">
                      <Image5 />
                      Link {index+1}
                    </div>
                    <button onClick={()=>{del(index)}}>Remove</button>
                  </div>
                  <div className="text-sm py-5">
                    Platform
                  </div>
                  <Dropdown />
                  <div  className="py-5" >
      <input className="px-96 py-3 max-w-screen-xl border border-[#633CFF] text-[#633CFF] rounded-md "style={{ width:'100%' , height:'100%' , cursor: 'pointer' }}/>
      </div>
                </div>
              ))}
            </>
          }
          <button className="border border-[#633CFF] text-white rounded-md px-10 py-2 bg-[#633CFF]" >Save</button>
        </div>
      </div>
    </div >
  );
}
