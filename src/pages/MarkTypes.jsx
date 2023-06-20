import { useEffect, useState } from 'react'
import Input from '@/components/Input.jsx'
import Table from '@/components/Table.jsx'
import api from '@/lib/api.js'
import { NavLink } from 'react-router-dom'

export default function MarkTypes (props) {
  const [markTypes, setMarkTypes] = useState([])
  const [a, setA] = useState(0)

  function create (evt) {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const obj = Object.fromEntries(formData.entries())
    obj.values = Array.from({ length: obj.values }, (_, i) => i + 1)

    const json = JSON.stringify(obj)
    if (obj.title && obj.values.length > 1 && obj.multiplier) {
      console.log('Отлично! \n', obj)
      api.createMarkType(json)
        .then(res => setA(a + 1))
        .then(clear)
        .catch(console.log)
    } else {
      console.log('Не полные данные')
    }
  }

  function clear () {
    document.getElementById('createMarkType').reset()
  }

  useEffect(() => {
    api.getMarkTypes()
      .then(setMarkTypes)
      .catch(console.log)
  }, [a])

  return (
    <div className='profile-style'>
      <NavLink to='/settings'>⮐ к настройкам</NavLink>
      <div className='settings'>
        <form id='createMarkType' onSubmit={create}>
          <h1>Создание типов оценок</h1>

          <hr />

          <Input label='Название' name='title' type='text' placeholder='Название оценки' />

          <hr />

          <div className='range'>
            <label htmlFor='values'>Градация оценки</label>
            <input name='values' type='range' min='1' max='10' step='1' list='range' defaultValue='5' />
            <datalist id='range'>
              <option value='0 to 10'>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </datalist>
          </div>

          <hr />

          <label>Множитель</label>
          <div className='radio'>

            <label htmlFor='radio-1'>
              1
              <input id='radio-1' type='radio' value='1' name='multiplier' />
            </label>

            <label htmlFor='radio-2'>
              2
              <input id='radio-2' type='radio' value='2' name='multiplier' />
            </label>

            <label htmlFor='radio-3'>
              3
              <input id='radio-3' type='radio' value='3' name='multiplier' />
            </label>

          </div>

          <hr />

          <button className='btn-carbon'>Создать</button>

        </form>
      </div>

      <Table
        label='Типы оценок'
        head={<>
          <td>Название</td>
          <td>Баллы</td>
          <td>Множитель</td>
              </>}
        children={markTypes.map((x, idx) => {
          return (
            <tr key={idx}>
              <td>{x.title}</td>
              <td>{`${x.values[0]} - ${x.values.length}`}</td>
              <td>{x.multiplier}</td>
            </tr>
          )
        })}
      />

    </div>
  )
}
