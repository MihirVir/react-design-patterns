export const RegularList = ({ items, sourceName, ItemComponent }) => {
    
    return (
        <>
            {items.map((item, idx) => <ItemComponent key = {idx} {...{ [sourceName]: item }}/>)}
        </>
    )
}