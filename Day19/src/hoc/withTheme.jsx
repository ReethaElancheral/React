

const themes = {
  light: {
    backgroundColor: '#fff',
    color: '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  dark: {
    backgroundColor: '#333',
    color: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)',
  },
};

const withTheme = (WrappedComponent) => {
  const ThemedComponent = ({ theme = 'light', ...props }) => {
    const themeStyles = themes[theme] || themes.light;

    return (
      <div style={themeStyles}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  ThemedComponent.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ThemedComponent;
};

export default withTheme;
