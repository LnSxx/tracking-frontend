import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './features/sign_up/components/sign_up_page';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface sdkc {
  asc: String
}

function App(): ReactJSXElement {
  return (
    <SignUpPage />
  );
}

export default App;
