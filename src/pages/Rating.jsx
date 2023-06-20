import Table from '@/components/Table'

export default function Rating (props) {
  const { top } = props
  
  return (
    <div className='container'>
      <Table
        label='Топ 10 участников'
        head={
          <>
            <td />
            <td>Позиция</td>
            <td>Сумма</td>
            <td>Почта</td>
            <td>Имя</td>
            <td>Фамилия</td>
          </>
        }
        children={top.map((x, idx) => {
          return (
            <tr key={idx}>
              <td><img className='avatar small' src={x.avatar} /></td>
              <td>{x.position}</td>
              <td>{x.sum}</td>
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
