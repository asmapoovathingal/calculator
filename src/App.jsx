
import { Stack,Button } from '@mui/material';
import './App.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const[principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[intrest,setIntrest]=useState(0)
  const[isPrincipleInvalid,setIsPrincipleInvalid]=useState(false)
  const[isRateInvalid,setIsRateInvalid]=useState(false)
  const[isYearInvalid,setIsYearInvalid]=useState(false)
// input validation function
const validateInput=(inputTag)=>{
  // destructuring
  const{name,value}=inputTag
  console.log(name,value);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  console.log(!!value.match(/^\d*\.?\d+$/));
if(name=="principle"){
  setPrinciple(value)
  !!value.match(/^\d*\.?\d+$/)?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
}else if(name=="rate"){
  setRate(value)
  !!value.match(/^\d*\.?\d+$/)?setIsRateInvalid(false):setIsRateInvalid(true)

}else if(name=='year'){
  setYear(value)
  !!value.match(/^\d*\.?\d+$/)?setIsYearInvalid(false):setIsYearInvalid(true)

}
}


const handleCalculate =(e)=>{
  e.preventDefault()
  console.log("inside handle calculate function");
  if(principle&&rate&&year){
    setIntrest(principle*rate*year/100)
  }else{
    alert("please fill the form completely")
  }
}
const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrincipleInvalid(false)
  setIsRateInvalid(false)
  setIsYearInvalid(false)
  setIntrest(0)
}
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3 >Simple Calculator App</h3>
<p>calculate your simple intrest easily</p>
<div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning rounded shadow p-3'>
  <h1> {intrest}</h1>
  <p className='fw-bolder'>Total Simple Intrest</p>
</div>
<form className='mt-5' action="">
<div className="mb-3">
<TextField value={principle||""} onChange={e=>validateInput(e.target)} name='principle' id="outlined-basic" className='w-100' label="principle amount" variant="outlined" />
</div>
{
  isPrincipleInvalid &&
  <div className="mb-3 text-danger fw-bolder">Invalid principle amount</div>

}

<div className="mb-3">
<TextField value={rate||""} onChange={e=>validateInput(e.target)} name='rate' id="outlined-basic1" className='w-100' label="rate of intrest (p.a)%" variant="outlined" />
</div>
{
  isRateInvalid &&
  <div className="mb-3 text-danger fw-bolder">Invalid rate</div>

}
<div className="mb-3">
<TextField value={year||""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic2" className='w-100' label="time period (Yr)" variant="outlined" />
</div>
{
  isYearInvalid &&
  <div className="mb-3 text-danger fw-bolder">Invalid Year</div>

}
<Stack direction="row" spacing={2}>
<Button disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
<Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
</Stack>
</form>
</div>
    </div>
  )
}

export default App
