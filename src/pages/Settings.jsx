import { NavLink } from 'react-router-dom'

export default function Settings () {
  return (
    <div className='profile-style'>
      <NavLink to='/settings/mark-types'>Создание типов оценок</NavLink>
      <hr />
    </div>
  )
}
