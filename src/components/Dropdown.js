import {useState} from "react";

function Dropdown({options}){

    const renderedOptions=options.map((option)=>{
        return <div key={option.value}>{option.label}</div>
    })

    const handleClick=()=>{
        setOpen(!isOpen);
        console.log(isOpen);
    }

    const[isOpen,setOpen]=useState(false);
    return <div>
        <div>Select...</div>
        <div onClick={handleClick}>{renderedOptions}</div>
    </div>
};

export default Dropdown;