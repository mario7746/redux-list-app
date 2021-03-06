import React from 'react'

const List = ({list, toggle, remove}) => {
  return (
    <ul>
      {
        list.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => toggle && toggle(item.id)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}
          >
            {item.name}
          </span>
          <button onClick={() => remove(item)}>
            X
          </button>
        </li>
        ))
      }
    </ul>
  )
}

export default List