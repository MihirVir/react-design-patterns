// import { useCurrentUser } from "./current-user.hook.jsx";
// import { useUser } from "./user.hook.jsx";
import { useResource } from "./resource.hook.jsx";

export const CustomUserInfo = ({ userId }) => {
  const user = useResource(`http://localhost:9090/user/${userId}`);
  const { name, age, country, books } = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (<li key = {book}> {book} </li>) )}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
