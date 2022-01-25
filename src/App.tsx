import * as React from 'react';
import './App.css';
import SignUpPage from './features/sign_up/components/sign_up_page';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

function App(): ReactJSXElement {
  return (
    <SignUpPage />
  );
}

export default App;
