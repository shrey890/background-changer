import { useState } from 'react'
const App = () => {
  const [color, setColor] = useState('white')
  return (
    <>
      <div style={ { background: color  , height:'100vh'} }>
        <div >  <button onClick={()=>setColor('red')}  style={ { background: 'red' ,width:'70px',  borderRadius:'1rem' , border:'transparent',color:'white' ,padding:'5px', margin:'5px'} }>red</button></div>
        <div > <button  onClick={()=>setColor('green')} style={ { background: 'green',width:'70px',borderRadius:'1rem' , border:'transparant',color:'white' ,padding:'5px', margin:'5px' } }>green</button></div>
        <div >  <button onClick={()=>setColor('blue')}  style={ { background: 'blue',width:'70px', borderRadius:'1rem' , border:'transparant',color:'white' ,padding:'5px', margin:'5px' } }>blue</button></div>
        <div >  <button onClick={()=>setColor('plum')}  style={ { background: 'plum',width:'70px', borderRadius:'1rem' , border:'transparant',color:'white' ,padding:'5px', margin:'5px' } }>plum</button></div>
        <div >  <button onClick={()=>setColor('purple')}  style={ { background: 'purple',width:'70px', borderRadius:'1rem' , border:'transparant',color:'white' ,padding:'5px', margin:'5px' } }>purple</button></div>
      </div >
    </>
  )
}

export default App