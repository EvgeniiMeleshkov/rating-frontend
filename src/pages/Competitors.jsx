import Table from '@/components/Table'

export default function Competitors (props) {
  const {competitors} = props
  return (
    <div className='container' >
      <Table head='Участники'>
        <tr>
          <td></td>
          <td>Почта</td>
          <td>Имя</td>
          <td>Фамилия</td>
        </tr>
        {competitors.map((x, idx) => {
          return (
            <tr key={idx}>
              <td><img className='avatar small' src={x.avatar}/></td>
              <td>{x.email}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
            </tr>
          )
        })}
      </Table>
    </div>
  )
}