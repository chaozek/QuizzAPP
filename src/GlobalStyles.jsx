import { createGlobalStyle } from "styled-components";
export const theme = {
  color: {
    darkGray: "#121212",
    white: "white",
    blue: "#3bb6d7",
    customWhite: "#e8f9f2",
    gray: "##FEFEFE",
  },
};

export const GlobalStyles = createGlobalStyle`
input {
  all: unset;
}
  body {
    -webkit-appearance:none;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Quicksand', sans-serif;
    background-color: #FEFEFE;
    color:white;
    scroll-behavior: smooth;
    -ms-box-sizing:content-box;
-moz-box-sizing:content-box;
-webkit-box-sizing:content-box; 
box-sizing:content-box;

;
html{
  -webkit-appearance:none;
  margin: 0;
    padding: 0;
    background-color: ${theme.color.gray};
    scroll-behavior: smooth;
  box-sizing: border-box; 
    -ms-box-sizing:content-box;
-moz-box-sizing:content-box;
-webkit-box-sizing:content-box; 
box-sizing:content-box;

}
  }
a{
  text-decoration: none !important;

}
input, select {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
  ul{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  }


input:focus,textarea:focus {
    outline : none ;
}
input::-ms-clear {
    display : none ;
}
textarea {
    resize: none ;
    font-size:16px;
}
select{
  -webkit-appearance:none;
}
option{
  -webkit-appearance:none;
}
button{
  -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
-webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
input{
  -webkit-appearance:none;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}
}

input[type="date"].date-input--has-value::-webkit-datetime-edit-text,
input[type="date"].date-input--has-value::-webkit-datetime-edit-month-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-day-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-year-field {
}
input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
}

input[type="radio"]{
    -webkit-appearance: radio !important;
    padding: 0
}


`;
