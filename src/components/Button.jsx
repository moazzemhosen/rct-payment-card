
// import './button.css'
import styled from 'styled-components'

// export const Button=({children,onClick})=>{
//     return(
//         <button onClick={onClick} className="btn">
//             {children}
//             </button>
//     ) 
// }
const Button = styled.button`
background-color: transparent;
border: none;


color: white;
font-weight: bold;
padding: 5px;
padding-top: 8px;
/* text-align: center; */

background:black;
cursor: pointer;
margin-top: 15px;

/* &:hover{
    box-shadow: rgb(8, 232, 23) 0px 5px 15px;
} */
`
export { Button }








