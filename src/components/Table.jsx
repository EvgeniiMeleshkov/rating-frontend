export default function Table (props) { 

  return (
      <table>
        <label>
          {props.label}
        </label>
        <thead>
          <tr>{props.head}</tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
  )
}