import react from 'react'
import select from 'react-select'


function bgcolor()
var colors=
[
{
    value:1,
    label1:"red"
      
},
{
    value:2,
    label1:"red"
      
},
{
    value:3,
    label1:"red"
      
},
{ 
    value:4,
    label1:"red"
      
}
]
var [setbgcolor,ddvalue]=usestate(colors,label)
var ddhandle = e =>
  {
ddvalue (e.label)


  }
    
        
            
            

return(

<div>
<style>{'body {background-color:'+setbgcolor+''}</style>
<select options={colors} onchange={ddhandle}></select>
<center>

    <b> the color is {setbgcolor}: </b>
</center>




</div>


)
export default bgcolor