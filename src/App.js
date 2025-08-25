import Button from './Button';
import { GoBell , GoHorizontalRule   ,GoKebabHorizontal} from "react-icons/go";
function App(){
    return(
        <div>
        <div>
            <Button success rounded outline>click me! <GoBell/> </Button>
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

export default App;