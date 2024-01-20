import {includeUpdatableUser} from "./user-upadatable-user.jsx"
import { includeUpdatableResource } from "./include-updatable-resources.jsx";
/*
export const UserInfoForm = includeUpdatableUser(({
  user,
  onChangeUser,
  onPostUser,
  onResetUser
}) => {
  const {name, age} = user || {};

  return user ? (
    <>
      <label>
        Name:
        <input 
            name = "name" 
            type = "text" 
            placeholder = "name" 
            value = {name} 
            onChange = {e => onChangeUser({name: e.target.value})}/>
      </label>
      <label>
          Age:
          <input 
            name = "age"
            type = "number"
            value = {age}
            onChange = {e => onChangeUser({ age: Number(e.target.value) })}
          />
      </label>

      <button onClick = {onResetUser}>Reset User</button>
        
      <button onClick = {onPostUser}>Save User</button>
    </>
  ) : (
    <>
      <h3>Loading....</h3>
    </>
  )
}, "3") */ 

export const UserInfoForm = includeUpdatableResource(({
  user,
  onChangeUser,
  onPostUser,
  onResetUser
}) => {
    const { name, age } = user || {};
    
    return user ? (
      <>
         <label>
          Name:
          <input  value = {name} onChange = {e => onChangeUser({ name: e.target.value })} />
        </label>
        <label>
          Age:
          <input value = {age} onChange = {e => onChangeUser({ age: Number(e.target.value)})} 
          />
        </label>
        <button onClick = {onResetUser}> Reset User </button>
        <button onClick = {onPostUser}> save user </button>
      </>
    ) : (
      <>
          <h2>Loadign...</h2>
      </>
    )
}, "http://localhost:9090/user/3", 'user');
