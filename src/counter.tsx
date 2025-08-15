import React, { Component } from 'react';

// Step 1: Define interfaces for props and state
interface CounterProps {
  // No props for now
}

interface CounterState {
  count: number; // state has a single 'count' property
}

// Step 2: Extend Component with types for props and state
class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Initialize state with proper type
  state: CounterState = {
    count: 0
  };

  // Step 4: Define increment method
  increment = () => {
    // TypeScript ensures 'count' is a number
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 5: Export component
export default Counter;
export {}; // Ensures TypeScript treats this as a module

