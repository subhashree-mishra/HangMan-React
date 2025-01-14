import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import {useNavigate} from "react-router-dom";
function StartGame(){
    const navigate= useNavigate();
    function handleSubmit(){
navigate('/play');
    }
    return(
        <div>
            <h1>Start Game</h1>
         <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>
    );
}
export default StartGame;

