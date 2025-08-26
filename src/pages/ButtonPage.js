import Button from '../components/Button';
import { GoBell , GoHorizontalRule   ,GoKebabHorizontal} from "react-icons/go";
function ButtonPage(){
    const handleClick=()=>{
        console.log("click!!");
    }
    return(
        <div>
        <div>
            <Button secondary outline rounded onClick={handleClick}>click me! <GoBell className="mr-1"/> </Button>
        </div>

        <div>
            <Button danger outline>Buy Now! <GoHorizontalRule/> </Button>
        </div>

        <div>
            <Button warning>See Deals! <GoKebabHorizontal/> </Button>
        </div>

        <div>
            <Button secondary outline>Hide Ads!</Button>
        </div>

        <div>
            <Button primary rounded>Something!</Button>
        </div>
        
        </div>
    );     
};

export default ButtonPage;