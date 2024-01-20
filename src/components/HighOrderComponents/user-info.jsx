export const HOCUserInfo = ({ user }) => {
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age} </p>
            <p>Country: {country}</p>
            <h4>Books</h4>
            {books.map((book) => <p key = {book}>{book}</p>)}
        </>
    ) : (
        <>
            <h1>Loading...</h1>
        </>
    );
};
