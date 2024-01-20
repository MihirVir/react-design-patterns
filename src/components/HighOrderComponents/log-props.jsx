// HOC starts with lowercase
export const logProps = (Component) => {
    // These props are coming as args of the param component
    // which we are passing to the component
    return (props) => {
        console.log(props);
        return <Component {...props} />
    };
};