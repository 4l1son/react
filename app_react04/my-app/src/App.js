import React from "react";
import { H1,Content,Row} from "./styles";
import Input from './components/Input/index'
import Button from "./components/Button/index";
import {useState} from 'react';
function App  ()  {
  
  const [currentNumber,setCurrentNumber]=useState(0);
  const [operation, setOperation] = useState('');
  const handleAddNumber = (number) =>{
    
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  
  }
  
  const handleClear = (number) =>{
    setCurrentNumber('0')
    setOperation('+')
  }

  const [firstNumber,setFirstNumber] = useState('0');


  const handleSum = () =>{
    if (firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
  }
  else{
    const sum = Number(firstNumber)+Number(currentNumber)
    setCurrentNumber(String(sum))
  }

}

const handleSub = () =>{
  if (firstNumber === '0') {
  setFirstNumber(String(currentNumber));
  setCurrentNumber('0');
}
else{
  const sum = Number(firstNumber)-Number(currentNumber)
  setCurrentNumber(String(sum))
}

}

const handleMuT = () =>{
  if (firstNumber === '0') {
  setFirstNumber(String(currentNumber));
  setCurrentNumber('0');
}
else{
  const sum = Number(firstNumber)*Number(currentNumber)
  setCurrentNumber(String(sum))
}

}




  return (
    <div className="App">
      <H1>
      <Content>
            <Input value={currentNumber} />
            <Row>        
              <Button label={7}  onClick={ () =>handleAddNumber('7')}/>
              <Button label={8}  onClick={ () =>handleAddNumber('8')}/>
              <Button label={9}  onClick={ () =>handleAddNumber('9')}/>
              <Button label={0}  onClick={ () =>handleAddNumber('0')}/>
              
              <Button label={'C'} onClick={handleClear}/>
            
            
            </Row>
            <Row>        
              <Button label={4}  onClick={ () =>handleAddNumber('4')}/>
              <Button label={5}  onClick={ () =>handleAddNumber('5')}/>
              <Button label={6}  onClick={ () =>handleAddNumber('6')}/>
              <Button label={' * '} onClick={handleMuT}/>
              <Button label={'/'} onClick={ () =>handleAddNumber('/')}/>
            </Row>
            <Row>        
              <Button label={1} onClick={ () =>handleAddNumber('1')}/>
              <Button label={2} onClick={ () =>handleAddNumber('2')}/>
              <Button label={3} onClick={ () =>handleAddNumber('3')}/>
              <Button label={'+'} onClick={handleSum}/>
              <Button label={'-'} onClick={ handleSub }/>
            </Row>




            </Content>
      </H1>
      
 </div>
      
  );
}

export default App;
