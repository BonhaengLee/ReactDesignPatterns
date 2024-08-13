import { ComponentType, CSSProperties } from 'react';

interface PageProps {
  style?: CSSProperties;
}

export default function WithStyles(Component: ComponentType<PageProps>) {
  const WrappedComponent = (props: PageProps) => {
    const style = {
      color: 'red',
      fontSize: '20px',
    };
    return <Component {...props} style={style} />;
  };

  WrappedComponent.displayName = `WithStyles(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}

WithStyles.displayName = 'WithStyles';
