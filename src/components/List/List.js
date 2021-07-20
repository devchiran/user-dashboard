import React from 'react'
import ListItem from './ListItem';

function List(props) {
  const { items } = props;
  return (
    <div className="user-list__wrapper">
      <ul className="list-group rounded-0" data-testid="user-list">
        {
          items.length ? items.map(item => {
            return <li key={item.id} className="list-group-item user-list__item p-0" data-testid="user-list__item">
              <ListItem data={item} />
            </li>
          }) : <div className="text-center text-info" data-testid="user-list__info">No User Found</div>
        }
      </ul>
    </div>
  )
}

export default List;
