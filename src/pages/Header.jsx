import { NavLink } from 'react-router-dom'
import Button from '@/components/Button'
import clear from '@/lib/clear.js'

export default function Header (props) {
console.log(props)

  const {user} = props

  return (
    
    <div className='header'>
      <div>
        LOGO
      </div>
      {user 

      ?  <div className='cm-e-menu'>
          <ul>
            <li className='topmenu'><NavLink to='/top'>Рейтинг</NavLink> </li>
            <li className='topmenu'><NavLink to='/mark'>Оценка</NavLink> </li>
            <li className='topmenu'><NavLink to='/competitors'>Участники</NavLink> </li>
            <li className='topmenu'><NavLink to='/profile'>Профиль</NavLink> 
              <ul className='submenu'>
                <li>
                  <NavLink >Настройки</NavLink>
                </li>
                <li>
                  <NavLink to='/experts'>Эксперты</NavLink>
                </li>
                <li>
                  {localStorage.auth && <Button onClick={clear} className='btn-header'>Выход</Button>}
                </li>
              </ul>
            
            </li>
          </ul>
        </div>
      : ""
      
      }
    </div>
  )
}