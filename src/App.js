import Accordion from "./components/Accordion"

function App(){
    const items=[
        {id:"ew4564",
        label:"Js",
         content:"Js is super fun!"
        },

        {
         id:"fdf5",   
        label:"C",
         content:"C is super fun!"
        },

        {
        id:"ghjn88",
        label:"C++",
         content:"C++ is super fun!"
        }
    ]
    return(
        <div><Accordion items={items}/></div>
    )
}

export default App;