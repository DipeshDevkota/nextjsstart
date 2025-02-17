import React from 'react'
import ProductCard from '../components/ProductCard'


interface User
{
    id:number;
    email:string;
    name:string
}
const UsersPage = async () => {

    const res= await fetch("https://jsonplaceholder.typicode.com/users",
        {next: {revalidate:10 }}
    );
    const users:User[] = await res.json();
  return (
    <div>
<h1>Users</h1>
<ul>
    {users.map(user=> <li key ={user.id}>{user.name}</li>)}
</ul>
     
    </div>
  )
}

export default UsersPage
