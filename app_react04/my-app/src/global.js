import  { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
        *,body{
            margin:0;
            padding:0;
        
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
` 
