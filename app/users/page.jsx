import React from 'react'

const UsersPage =async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    next:{
      revalidate: 10
    }
  })
  const users = await res.json()
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(user => <li key={user.id}>{user.name}</li> )}
    </>
  )
}

export default UsersPage
