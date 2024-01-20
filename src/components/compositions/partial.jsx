/*
  Partial Components are a part of the Component 
  rather than the entire component
 */

// It receives a component and then it passses some partial props 
// along with the original props
export const partialComponent = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <>
      <button style = {{
        fontSize: size === 'small' ? '8px' : '32px',
        backgroundColor: color
      }}>
        {text}
      </button>
    </>
  );
};

export const RedButton = partialComponent(Button, { color: 'crimson' });

export const SmallRedButton = partialComponent(Button, { color: "crimson", size: "small" });

export const LargeRedButton = partialComponent(RedButton, { size: "large" });
