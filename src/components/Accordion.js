import {useState} from "react";
import { GoChevronDown,GoChevronLeft} from "react-icons/go";
function Accordion({items}){
    const[expandedIndex,setExpandedIndex]=useState(-1);

    const handleClick=(nextIndex)=>{
        if(expandedIndex===nextIndex){
            setExpandedIndex(-1);
        }
        else{
        setExpandedIndex(nextIndex);
        }
    }

    const renderedItems=items.map((item,index)=>{
        const isExpanded=expandedIndex===index;
        console.log(isExpanded);

        const icon=<span className="text-2xl">
            {isExpanded?<GoChevronDown/>:<GoChevronLeft/>}
        </span>

        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"onClick={()=>{handleClick(index)}}>{item.label}{icon}</div>
                {isExpanded && <div className="border-b border-gray-200 p-3">{item.content}</div>} 
            </div>
        );
    });

    return(
        <div>{renderedItems}</div>
    )
}

export default Accordion;