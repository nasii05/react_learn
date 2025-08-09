import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 26},
        {id: 3, name: "Charley", age: 32},
    ]

    return <div>
        {users.map(user => (
            <div key={user.id}>
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
            </div>
        ))}
    </div>
}
export default UserList
