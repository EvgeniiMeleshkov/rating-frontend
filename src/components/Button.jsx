export default
function Button (props) {
  return <button className={ props.desabled ? 'buttonDesabled' : '' }>{props.children}</button>
}
