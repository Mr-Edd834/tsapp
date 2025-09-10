// Counter.tsx
import React, { Component } from 'react';

// Create interface for component state
interface CounterState {
  count: number; // count should be a number type
}

// Convert class component to TypeScript with proper typing
class Counter extends Component<{}, CounterState> {
  // Initialize state with proper typing
  state: CounterState = {
    count: 0
  };

  // Add proper typing for methods
  increment = (): void => {
    this.setState(prevState => ({ 
      count: prevState.count + 1 
    }));
  };

  // Decrement method
  decrement = (): void => {
    this.setState(prevState => ({ 
      count: prevState.count - 1 
    }));
  };

  // Reset method
  reset = (): void => {
    this.setState({ 
      count: 0 
    });
  };

  render() {
    return (
      <div style={counterStyle}>
        <h2 style={titleStyle}>Counter</h2>
        <p style={countTextStyle}>Count: {this.state.count}</p>
        <div style={buttonContainerStyle}>
          <button 
            onClick={this.decrement}
            style={{...buttonStyle, backgroundColor: '#f44336'}}
          >
            -
          </button>
          <button 
            onClick={this.reset}
            style={{...buttonStyle, backgroundColor: '#ff9800'}}
          >
            Reset
          </button>
          <button 
            onClick={this.increment}
            style={{...buttonStyle, backgroundColor: '#4CAF50'}}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

// Styling for Counter component
const counterStyle: React.CSSProperties = {
  padding: '25px',
  margin: '20px',
  border: '2px solid #6A1B9A',
  borderRadius: '12px',
  backgroundColor: '#f3e5f5',
  textAlign: 'center',
  maxWidth: '350px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 20px 0',
  color: '#4A148C',
  fontSize: '24px'
};

const countTextStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#2E7D32',
  margin: '0 0 20px 0',
  padding: '10px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #ddd'
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px'
};

const buttonStyle: React.CSSProperties = {
  padding: '12px 20px',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  minWidth: '70px',
  transition: 'transform 0.1s, background-color 0.2s'
};

// Add hover effect using a class since CSSProperties doesn't support pseudoclasses
document.head.insertAdjacentHTML('beforeend', `
  <style>
    button:hover {
      transform: scale(1.05);
    }
    button:active {
      transform: scale(0.95);
    }
  </style>
`);

export default Counter;