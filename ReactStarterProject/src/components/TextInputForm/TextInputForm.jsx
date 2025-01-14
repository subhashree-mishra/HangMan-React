import TextInput from"../Textinput/Textinput";
import Button from"../Button/Button";


function TextInputForm({handleFormSubmit,handleTextInputChange,value,inputType="text",setInputType }){
    
    return(
        <form  className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 
                label="Enter a word or phrase"
                type={inputType}
                value={value}
                onChange={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                styleType="warning"
                style={{backgroundColor:'blue'}}
                text={inputType=='password'?"Show":"Hide"}
                onClickHandler={()=>setInputType(inputType=='password'?"text":"password")}
                />
            </div>

            <div>
                    <Button
                    text="OK"
                    type="submit"
                    />

                </div>
                

        </form>
    );

}
export default TextInputForm;
