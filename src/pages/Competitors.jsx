import Table from '@/components/Table'

export default function Competitors (props) {
  const {competitors} = props
  return (
    <div className='container' >
      <Table label='Участники'
              head={<>
                <td></td>
                <td>Почта</td>
                <td>Имя</td>
                <td>Фамилия</td>
              </>}
              children={competitors.map((x, idx) => {
                return (
                  <tr key={idx}>
                    <td><img className='avatar small' src={x.avatar}/></td>
                    <td>{x.email}</td>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                  </tr>
                )
              })}
      />
    </div>
  )
}