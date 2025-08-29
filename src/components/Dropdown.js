import Panel from "./Panel"
import {useState,useEffect,useRef} from "react";
import { GoChevronDown } from "react-icons/go";


function Dropdown({options , value , onChange}){
    const[isOpen,setOpen]=useState(false);

    const divEl=useRef();

    useEffect(()=>{
        const handler=(event)=>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setOpen(false);
            }
        }
        document.addEventListener("click",handler,true);
    },[]);


    const handleOptionClick=(option)=>{
        setOpen(false);
        onChange(option)
    }

    const handleClick=()=>{
        setOpen(!isOpen);
        console.log(isOpen);
    }

    const renderedOptions=options.map((option)=>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1"  onClick={()=>handleOptionClick(option)} key={option.value} >{option.label}</div>
    })
    
    return <div ref={divEl} className="w-48 relative">
        <Panel
         className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleClick}> {value?.label ||  "...select"} <GoChevronDown className="text-lg"/>
         </Panel>
        {isOpen && <Panel className="absolute top-full left-0 right-0   z-10">{renderedOptions}</Panel>}
    </div>
};
export default Dropdown;