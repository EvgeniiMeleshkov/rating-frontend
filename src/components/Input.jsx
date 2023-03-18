export default
  function Input ({ type, name, label }) {
    return (
      <label> {label || name}
        <input type={type} name={name} />
      </label>
    )
}
