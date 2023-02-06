import React,{useState} from "react"
import styled from "styled-components";

function Form() {

const[code,setCode]=useState()
const[name,setName]=useState()
const[price,setPrice]=useState()
const[showList,setShowList]=useState(false)
const [rows, initRow] = useState([]);

const handleCode=(e)=>{
  setCode(e.target.value)
}

const handleName=(e)=>{
  setName(e.target.value) 
}

const handlePrice=(e)=>{
  setPrice(e.target.value)
}

const handleAdd=(e)=>{
e.preventDefault();
const data = {
  code:code,name:name,price:price
};
initRow([...rows, data]);
setShowList(true)
}

 
return (
    <StyledWrapper>
      <h1>Payeshgaran Modiriat Tarh</h1>
      <div>
    <StyledWrapperLeft>
<StyledForm onSubmit={handleAdd}>
  <StyledInput>
    <input placeholder="code" type="text" onChange={handleCode} required/>
  </StyledInput>
  <StyledInput>
    <input placeholder="name" type="text" onChange={handleName} required/>
  </StyledInput>
  <StyledInput>
    <input placeholder="price" type="text" onChange={handlePrice} required/>
  </StyledInput>
  <button type="submit">
Add Product
  </button>
</StyledForm>
    </StyledWrapperLeft>
    <StyledWrapperRight>
    {showList &&
        <StyledItems>
           <StyledItem>
                    <span>
                    Code
                    </span>
                    <span>
                    Name
                    </span>
                    <span>
                   Price
                    </span>
                    </StyledItem>
          {
                rows.map((item,index)=>{
                  return(
                    <StyledItem key={index}>
                    <span>
                      {item.code}
                    </span>
                    <span>
                      {item.name}
                    </span>
                    <span>
                      {item.price}
                    </span>
                    </StyledItem>
                  )
                })
          }
</StyledItems>
}
        </StyledWrapperRight>
        </div>
        </StyledWrapper>

  );
}

const StyledWrapper= styled.main`
padding-top:100px;
h1{
  color: #fff;
  text-align: center;
  letter-spacing: 6px;
margin-bottom:30px;
}
background:#081229;
min-height:100vh;
  >div{
    display:flex;
  justify-content:center;
  margin:0 auto;
  @media(max-width:768px){
    display: inline;
    >div{
      width:100%;
    }
        }
  }

`
const StyledWrapperLeft = styled.div`
`
const StyledForm = styled.form` 
width:300px;
max-width:100%;
margin:0 auto;
button{
  width:100%;
  padding: 10px;
  border-radius: 5px;
  background: #000;
    border: 1px solid #ec5990;
    color: #fff;
    cursor:pointer;
    font-size:20px;
}
`
const StyledInput= styled.div` 
width: 100%;
margin: 20px auto;
background: #fff;
border-radius: 5px;
input{
  width:100%;
  padding: 10px;
  background: none;
  box-shadow: none;
  font-size:16px;
}
`

const StyledWrapperRight = styled.div`
`
const StyledItems = styled.ul`
width: 400px;
max-width:100%;
margin:15px 20px;
padding-right:15px;
height: 234px;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  width: 5px; 
}

&::-webkit-scrollbar-track {
  background: #b8cfc2;
}

&::-webkit-scrollbar-thumb {
  background-color:  #fff;
  border-radius: 20px;
  border: 3px solid #b8cfc2;
}
@media(max-width:768px){
margin:15px auto;
}
`

const StyledItem= styled.li`
list-style-type:none;
border-bottom: 1px solid #ec5990;
color: #fff;
height: 35px;
display:flex;
justify-content:space-between;
span{
  padding:5px 10px;
  width:33%;
  text-align:center;
}
`

export default Form;
