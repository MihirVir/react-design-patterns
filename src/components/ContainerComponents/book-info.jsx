export const BookInfo = ({ book }) => {
    const { name, title, price, pages } = book || {};

    return book ? (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Title: {title}</h3>
            <p>Number of pages: {pages}</p>
        </>
    ) : (
        <>
            <h2>Loading...</h2>
        </>
    );
};