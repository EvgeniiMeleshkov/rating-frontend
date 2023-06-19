import { NavLink } from 'react-router-dom'
import Button from '@/components/Button'
import clear from '@/lib/clear.js'
import logo from '@/assets/ucdev.png'

export default function Header (props) {
  console.log(props)

  const { user } = props

  return (

    <div className='header'>

      <img src={logo} />

      {user

        ? <div className='cm-e-menu'>
          <ul>
            <li className='topmenu'><NavLink to='/top'>Рейтинг</NavLink> </li>
            {user.expert
              ? <>
                <li className='topmenu'><NavLink to='/mark'>Оценка</NavLink> </li>
                <li className='topmenu'><NavLink to='/competitors'>Участники</NavLink> </li>
              </>
              : ''}
            <li className='topmenu'><NavLink to='/profile'>Профиль</NavLink>
              <ul className='submenu'>

                {user.admin

                  ? <>
                    <li><NavLink to='/experts'>Эксперты</NavLink></li>
                    <li><NavLink to='/settings'>Настройки</NavLink></li>
                  </>
                  : ''}
                <li>
                  {localStorage.auth && <Button onClick={clear} className='btn-header'>Выход</Button>}
                </li>
              </ul>

            </li>
          </ul>
          </div>
        : ''}
    </div>
  )
}
