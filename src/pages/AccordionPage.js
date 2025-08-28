import Accordion from "../components/Accordion"

function AccordionPage(){
    const items=[
        {id:"ew4564",
        label:"Js",
         content:"JavaScript is the language of the web, making websites dynamic, interactive, and engaging. Unlike C and C++, it runs directly in browsers and powers everything from animations to full web applications. With frameworks like React and Node.js, JavaScript has grown far beyond the browser into a versatile, modern programming language."
        },

        {
         id:"fdf5",   
        label:"C",
         content:"C is known as the “mother of all programming languages.” It is a powerful, low-level language that gives direct control over memory and hardware. Because of its speed and efficiency, C is widely used in operating systems, embedded systems, and performance-critical applications."
        },

        {
        id:"ghjn88",
        label:"C++",
         content:"C++ builds on C by adding object-oriented features like classes and objects. It balances performance with abstraction, allowing developers to write fast programs while also managing complexity. From game engines to high-performance applications, C++ is a backbone of modern software development."
        }
    ]
    return(
        <div><Accordion items={items}/></div>
    )
}

export default AccordionPage;