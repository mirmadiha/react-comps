function Dropdown({options}){

    const renderedOptions=options.map((option)=>{
        return option.label;
    })


    return <div>
        <div>Select...</div>
        <div>{renderedOptions}</div>
    </div>
};

export default Dropdown;