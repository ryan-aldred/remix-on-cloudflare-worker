import { Link, NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header className="px-20 py-10 shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)]">
      <div className='flex justify-between'>
        <NavLink to='/' className='hover:text-pink-500'>Ryan Aldred</NavLink>
        <nav>
          <ul>
            {linkList.map(({to, name}) => (
              <li key={to}>
                <NavLink to={to} className={({isActive}) =>
                `hover:text-pink-500 ${isActive ? 'text-pink-300': ''}`
                }>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

const linkList = [{name: '1) What', to: '/about'}];