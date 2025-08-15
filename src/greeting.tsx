import React from 'react';

// Step 1: Define an interface for the component props
interface GreetingProps {
  name: string; // 'name' is a required string
}

// Step 2: Use the interface in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
export {}; // Ensures TypeScript treats this as a module

