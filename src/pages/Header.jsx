import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import clear from '@/lib/clear.js'

export default function Header () {

  return (
    <div className="header">
      <div>
        LOGO
      </div>
      <div className="btn-group">
      <NavLink >Рейтинг</NavLink>
        <NavLink >Оценка</NavLink>
        <NavLink >Участники</NavLink>
        <NavLink >Профиль</NavLink>
        <div className="slide">
          <div className="box">
            <NavLink >Настройки</NavLink>
            <NavLink >Эксперты</NavLink>
            <hr style={{width: '100%', margin: '0'}}/>
            {localStorage.auth && <Button onClick={clear} className="btn-header">Выход</Button>}
          </div>
        </div>
        
      </div>
    </div>
  )
}