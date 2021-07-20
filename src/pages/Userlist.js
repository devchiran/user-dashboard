import React, { useState, useEffect } from 'react'
import List from '../components/List/List'
import { getUsers } from '../api/users'

function Userlist() {
    const [users, setUsers] = useState([])
    const [visibleUsers, setVisibleUsers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await getUsers();
            if (allUsers) {
                setUsers(allUsers)
                setVisibleUsers(allUsers)
            }
          }
          fetchUsers()
    }, [])

    useEffect(() => {
        if (search === "") {
            setVisibleUsers(users);
        } else {
            console.log("searching: " + search)
            let searchStr = search.toLowerCase()
            let filteredList = users.filter(user => {
                return user.name.toLowerCase().indexOf(searchStr) >= 0 ||
                    user.username.toLowerCase().indexOf(searchStr) >= 0 ||
                    user.email.toLowerCase().indexOf(searchStr) >= 0
            })
            console.log("list: " + JSON.stringify(filteredList))
            setVisibleUsers(filteredList)
        }
    }, [search, users])

    /**
     * Handles the search input box entry and search within the list
     * @param {Object} e - Evevt details for search input box
     */
    const searchHandler = (e) => {
        const value = e.target.value.toString()
        setSearch(value);
    }

    /**
     * Handles the sort dropdown selection and list sorting
     * @param {Object} e - Event details for sort select selection
     */
    const sortHandler = (e) => {
        const selectedValue = e.target.value.toLowerCase()
        const sortedList = visibleUsers.sort((a, b) => {
            return a[selectedValue].localeCompare(b[selectedValue])
        })
        setVisibleUsers([...sortedList])
    }

    return (
        <>
            <div className="container user-list__header">
                <div className="row justify-content-center align-items-center mb-3 p-2">
                    <div className="list-title col-12 col-xl-8"><h1>Users</h1></div>
                    <div className="search-panel col-12 col-xl-2">
                        <label htmlFor="search-input" className="form-label m-0">Search</label>
                        <div className="input-group input-group-sm mb-3 mb-xl-0">
                            <input
                                type="text"
                                className="form-control"
                                id="search-input"
                                aria-describedby="Search"
                                value={search}
                                onChange={searchHandler}
                            />
                        </div>
                    </div>
                    <div className="filter-panel col-12 col-xl-2">
                        <span className="d-block">Sort By</span>
                        <select className="form-select form-select-sm " onChange={sortHandler} aria-label="sortby .form-select-sm">
                            <option value="name" defaultValue>Name</option>
                            <option value="Username">Username</option>
                            <option value="Email">Email</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container p-0">
                <List items={visibleUsers}/>
            </div>
        </>
    )
}

export default Userlist;