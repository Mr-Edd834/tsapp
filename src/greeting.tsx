// Greeting.tsx
import React from 'react';

// Define interface for component props
interface GreetingProps {
  name: string; // name should be a string type
}

// Convert to TypeScript functional component with proper typing
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div style={greetingStyle}>
      Hello, {name}!
    </div>
  );
};

// Styling for Greeting component
const greetingStyle: React.CSSProperties = {
  padding: '15px 20px',
  margin: '15px',
  border: '2px solid #2196F3',
  borderRadius: '8px',
  backgroundColor: '#e3f2fd',
  fontSize: '18px',
  fontWeight: '500',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  maxWidth: '300px'
};

export default Greeting;