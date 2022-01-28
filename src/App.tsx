import * as React from 'react';
import './App.css';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import SignUpPage from './features/sign_up/components/sign_up_page';

function App(): ReactJSXElement {
  return (
    <SignUpPage />
  );
}

export default App;
