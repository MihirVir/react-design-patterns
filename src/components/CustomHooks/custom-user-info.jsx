// import { useCurrentUser } from "./current-user.hook.jsx";
// import { useUser } from "./user.hook.jsx";
// import { useResource } from "./resource.hook.jsx";
import { useDataSource } from "./data-source.hook.jsx";
import axios from "axios";

const fetchFromServer = (resourceURL) => async () => {
  const response = await axios.get(resourceURL);
  return response.data;
};

const getDataFromLocalStorage = key => () => {
  return localStorage.getItem(key);
}

export const CustomUserInfo = ({ userId }) => {
  const user = useDataSource(fetchFromServer(`http://localhost:9090/user/${userId}`));
  const message = useDataSource(getDataFromLocalStorage("msg"));
   //const user = useResource(`http://localhost:9090/user/${userId}`);
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
