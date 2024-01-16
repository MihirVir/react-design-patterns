export const NumberedList = ({ items, sourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, idx) => (
                <>
                    <h2>{idx + 1}</h2>
                    <ItemComponent key = {idx} {...{ [sourceName]: item}}/>
                </>
            ))}
        </>
    )
}