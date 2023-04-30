import { NavLink } from 'react-router-dom'
import Button from '@/components/Button'
import clear from '@/lib/clear.js'

export default function Header () {

  return (
    <div className='header'>
      <div>
        LOGO
      </div>
      <div className='btn-group'>
      <NavLink to='/top'>Рейтинг</NavLink>
        <NavLink to='/mark'>Оценка</NavLink>
        <NavLink to='/competitors'>Участники</NavLink>
        <NavLink to='/profile'>Профиль</NavLink>
        <div className='slide'>
          <div className='box'>
            <NavLink >Настройки</NavLink>
            <NavLink to='/experts'>Эксперты</NavLink>
            <hr style={{width: '100%', margin: '0'}}/>
            {localStorage.auth && <Button onClick={clear} className='btn-header'>Выход</Button>}
          </div>
        </div>
        
      </div>
    </div>
  )
}