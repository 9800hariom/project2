import { FaHeart, FaRegEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { BsBrowserChrome } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoTrashBinSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { useState } from "react";

const Card = (value) => {
  const { email, id, imgurl, name, phone, url } = value.value;
  const [isred, setIsred] = useState(false);

  const handIeRed = () =>{
    setIsred (!isred);
    // if(isred=== true){
    //setisred(false)S
    //esle if (isred=== flase){
      //setIsred(true)
   // }
    //}
    console.log('asdfsad')
  }

  return (
    <div className="border-2 border-black h-fit w-[300px]">
      <div className="bg-[#f5f5f5] flex justify-center items-center">
        <img src={imgurl} alt="" />
      </div>

      <div className="p-4">
        <p className="font-bold text-start">{name}</p>
        <div className="flex gap-2 items-center">
          <FaRegEnvelope />
          <p>{email}</p>
        </div>
        <div className="flex gap-2 items-center ">
          <IoIosCall />
          <p>{phone}</p>
        </div>
        <div className="flex gap-2 items-center">
          <BsBrowserChrome />
          <p>{url}</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] flex justify-between cursor-Pointer ">
        <div   onClick ={handIeRed} className="border-r-2 p-4 w-1/3 flex  justify-center ">
        
        
          {isred ? <FaHeart/> : <FcLike />}
        
        </div>
        <div className="border-r-2 p-4 w-1/3 flex justify-center ">
          <FaPencil />
        </div>
        <div className="border-r-2 p-4 w-1/3 flex justify-center">
          <IoTrashBinSharp />
          
        </div>
      </div>
    </div>
  );
};

export default Card;
