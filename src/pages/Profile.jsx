import { useEffect, useState } from 'react'
import API from '@/lib/api'
import Image from '@/components/Image'

import Table from '@/components/Table'

export default function Profile (props) {
  const {user, mark} = props

  const [marks, setMarks] = useState([])

  const isMarks = marks.length !== 0
  const expert = user.expert ? 'Эксперт' : 'Не эксперт'
  const admin = user.admin ? 'Админ' : 'Не админ'
  
  const pointAmount = marks.length && marks.reduce((x, y)=> x + y.value, 0)
  
  const competitors = marks.map(x => x.competitor._id)
  const competitorsAmount = new Set(competitors)

  useEffect(() => {
    if(user._id) {
      API.getUserMarks(`/marks/user/${user._id}`)()
      .then(setMarks)
      .catch(console.log)
    }
  }, [user])

  return (
    <div className='container'>
    <div className='profile-style'>
      <div className='one-x-three-greed'>
        <div className='div1-1x3'>
          <Image 
            editable={mark}
            className='avatar' 
            src={user.avatar} 
            alt={user.firstName} 
          />
        </div>
        <div className='div2-1x3'>
          <ul>
            <li><h3>{user.firstName} &nbsp; {user.lastName}</h3></li>
            <li><h3>{user.email}</h3></li>
            <li><h3>{admin}</h3></li>
            <li><h3>{expert}</h3></li>
            <li><h3>Множитель: {user.multiplier}</h3></li>
          </ul>
          { user.expert 
          ?
          <ul>
            <li><h3>Проставлено оценок: {isMarks ? marks.length : 0}</h3></li>
            <li><h3>Оценено участников: {isMarks ? competitorsAmount.size : 0}</h3></li>
          </ul>
          :
          <ul>
            <li><h3>Место в рейтинге: {user.position ? user.position : 'нет данных'}</h3></li>
            <li><h3>Всего очков: {isMarks ? pointAmount : 0}</h3></li>
          </ul>
          }
        </div>
      </div>
    </div>
    {!mark && isMarks && !user.expert &&
      <Table head='Мои оценки'>
        <tr>
          <td>Параметр</td>
          <td>Эксперт</td>
          <td>Оценка</td>
        </tr>
        {
          marks.map((x, idx) => {
            return (
              <tr key={idx}>
                <td>{x.markType.title}</td>
                <td>{`${x.expert.firstName} ${x.expert.lastName}`}</td>
                <td>{x.value}</td>
              </tr>
            )
          })
        }
    </Table>
    }
    {!mark && isMarks && user.expert &&
      <Table head="Мои оценки">
      <tr>
        <td>Параметр</td>
        <td>Участник</td>
        <td>Оценка</td>
      </tr>
      {
        marks.map((x, idx) => {
          return (
            <tr key={idx}>
              <td>{x.markType.title}</td>
              <td>{`${x.competitor.firstName} ${x.competitor.lastName}`}</td>
              <td>{x.value}</td>
            </tr>
          )
        })
      }
      </Table>
    }
    </div>
  )
}


