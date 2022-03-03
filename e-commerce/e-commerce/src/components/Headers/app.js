import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [menu, setMenu] = useState([
    {
      name: 'a',
      subMenu: {
        active: false,
        sub: [
          {
            name: 'a1'
          },
          {
            name: 'a2'
          },
          {
            name: 'a3'
          },
        ]
      }
    },
    {
      name: 'b',
      subMenu: {
        active: false,
        sub: [
          {
            name: 'b1'
          },
          {
            name: 'b2'
          },
          {
            name: 'b3'
          },
          {
            name: 'bb',
            subMenu: {
              sub: [
                {
                  name: 'bb1'
                },
                {
                  name: 'bb2'
                },
                {
                  name: 'bbb',
                  subMenu: {
                    sub: [
                      {
                        name: 'bbb1'
                      },
                      {
                        name: 'bbb2'
                      },
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ])

  const handleUnHideSubMenu = (index) => {
    const newMenu = [...menu];
    const newMenuSub = newMenu[index];
    newMenuSub.subMenu.active = !newMenuSub.subMenu.active;
    setMenu(newMenu)
  }

  const menus = menu.map((m, index) => {
    return (
      <li className='menu-part'>
        <span onClick={() => handleUnHideSubMenu(index)} key={index}>{m.name}</span>
        <div className={m.subMenu.active
          ? 'submenu active'
          : 'submenu'}>
          {m.subMenu.sub.map((s, index) => {
            return <li key={index}>{s.subName}</li>
          })}
        </div>
      </li>
    )
  })

  const showList = (arr) => {
    return (<div>{arr.map((value, key) => {
      if (value.subMenu) {
        return <div>
          <li key={key}>{value.name}</li>
          <div style={{ marginLeft: "30px" }}>{showList(value.subMenu.sub)}</div>
        </div>
      } else {
        return <li key={key}>{value.name}</li>
      }
    })}</div>)
  }

  return (
    <div className='menu'>
      <ul>
        {showList(menu)}
      </ul>
    </div>
  )
}

export default App