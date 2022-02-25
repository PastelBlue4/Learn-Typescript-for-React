import React from 'react';
import styled from "styled-components";
import Circle from './Circle';


function App() {
  return(
    <div>
      <Circle bgColor="tomato"/>
      <Circle bgColor="skyblue" borderColor="blue" />
    </div>
    );
}

export default App;