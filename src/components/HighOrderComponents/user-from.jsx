import {includeUpdatableUser} from "./user-upadatable-user.jsx"

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
}, "3")
