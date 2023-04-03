import React from 'react';
import Main from './src/Components/main';
import { NativeRouter } from "react-router-native"


export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}


