import {useState} from "react";
function Accordion({items}){
    const renderedItems=items.map((item,index)=>{
        const[expandedIndex,setExpandedIndex]=useState(0);
        const isExpanded=expandedIndex===index;
        console.log(isExpanded);
        return(
            <div key={item.id}>
                <div>{item.label}</div>
                {isExpanded && <div>{item.content}</div>} 
            </div>
        );
    });

    return(
        <div>{renderedItems}</div>
    )
}

export default Accordion;