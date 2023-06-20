import Table from '@/components/Table'
import { useEffect, useState } from 'react'
import api from '@/lib/api'

export default function MarkForm (props) {

  const {user, expert} = props

  const [markTypes, setMarkTypes] = useState([])
  const [marks, setMarks] = useState([])

  console.log(marks)
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    api.getMarkTypes()
      .then(setMarkTypes)
      .catch(console.log)
  }, [])

  useEffect(() => {
    if (user) {
      api.getUserMarks(`/marks/user/${user._id}`)()
      .then((res) => {
        console.log(res)
        const myMarks = res.filter(x => x.expert._id === expert._id)
        setMarks(myMarks)
      })
      .catch(console.log)
    }
  }, [user, flag])

  function createMark (markType, evt) {
    evt.preventDefault()

    const formData = new FormData(evt.target)
    const obj = Object.fromEntries(formData.entries())

    const newMark = {
      expert: expert._id,
      competitor: user._id,
      value: Object.values(obj)[0],
      markType: markType._id
    }
    
    if(expert && user && newMark.value !== 0 && markType) {
      api.createMark(JSON.stringify(newMark))
      .then((res)=>{
        document.getElementById('createMark').reset()
        setFlag(!flag)
      })
      .catch(console.log)
    } else {
      console.log('Неполные данные')
    }
    
  }

  return (
    <Table
      label='Выставление оценок'
      head={
        <>
          <td>Критерий</td>
          <td>Баллы</td>
          <td>Оценка</td>
        </>
      }
      children={
        markTypes.map((x, idx) => {
          return (
            <tr className='mark-data' key={idx}>
              <td>{x.title}</td>
              <td className='crore'>
                <form id='createMark' onSubmit={(evt)=>createMark(x, evt)}>
                  <div className='radio mark'>
                    {x.values.map((y, idx)=> {
                      return(
                        <label key={x.title+y+idx} htmlFor={`radio-${x.title+y+idx}`}>
                          {y}
                          <input id={`radio-${x.title+y+idx}`} type='radio' value={`${y}`} name={x.title} />
                        </label>
                      )
                    })}
                    
                  </div>
                  {marks.find(el => el.markType._id === x._id) ? '' :
                   <button>✅</button>
                  }
                 
                </form>
              </td>
              <td>
                {marks.map((z, idx)=> {
                
                  return (
                    <div key={x._id+z._id}>
                      {x._id === z.markType._id ? z.value : ''}
                    </div>
                  )
                })}
              </td>
            </tr>
          )
        })
      }
    />
  )
}
