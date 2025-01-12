import getButtonStyling from "./getButtonStyleType";


function Button({buttonType,text, styleType, onClickHandler}){
      
return (
    <>
         <button 
         type={buttonType}
         onClick={onClickHandler}
         className={`px-4 py-2 ${getButtonStyling(styleType)} text-blue-50 rounded-md bg-blue-500 active:bg-blue-700 transition-all`}>
       
        {text}
    </button>
    
    </>
   
);

}
export default Button;