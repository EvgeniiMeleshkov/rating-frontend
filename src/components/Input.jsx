export default
function Input (props) {
  const { label, name, onChange, ...rest } = props
  const upload = rest.type !== 'file'
  
  return (
    <label className='container' onClick={upload ? onChange : ()=>{}}> {label || name}
      <input
         style={{display: !upload ? "none" : "block"}}
         name={name}  
         onChange={!upload ? onChange : ()=>{}} 
         {...rest}
       />
    </label>
  )
}
