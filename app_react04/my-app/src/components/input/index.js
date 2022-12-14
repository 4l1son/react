import {InputContainer} from './styles';
const  Input = ({value}) => {
    return (
      <div className="App">
      <InputContainer>
        <input  value={value}></input>
              </InputContainer>
       
      </div>
    );
    }
export default Input;