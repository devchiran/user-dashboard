import React from 'react'
import './ListItem.css'

function ListItem(props) {
    const { id, name, username, email } = props.data;
    const userClickHandler = (e) => {
        window.location = `/users/${e.target.closest('button').value}`
    }
    return (
        <button className="row btn btn-link d-flex w-100 align-items-center py-3 m-0 text-decoration-none" value={id} onClick={userClickHandler} data-testid="user-list__btn">
            <div className="user-list__avatar col-3 col-xl-1">
                <div className="user-list__image bg-secondary">
                    {/* <img src="#" alt="User" /> */}
                </div>
            </div>
            <div className="user-list__items col-9 col-xl-11 text-secondary">
                <div className="row text-start align-items-center">
                    <div className="col-12 col-xl-6">
                        <p className="d-block" data-testid="user-list__items-name">{ name }</p>
                        <p className="d-block" data-testid="user-list__items-username">{ username }</p>
                    </div>
                    <div className="col-12 col-xl-6 text-xl-end">
                        <a href={`mailto:${email}`} className="col-12 text-decoration-none text-info" data-testid="user-list__items-email">
                            {email}
                        </a>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ListItem;