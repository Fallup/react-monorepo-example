import React, { useState } from 'react';
import './App.css';

import CORE_CONSTS from '@monorepo-example-local/core/constants'
import THEME_CONSTS from '@monorepo-example-local/theme/constants'

import useTimeout from '@monorepo-example-local/core/hooks/useTimeout'

const App: React.FC = () => {
  const [message, setMessage] = useState('Message will change in 2 seconds...')
  useTimeout(() => setMessage('Yup changed!'), 2000)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message}
        </p>
        <p>
          Constant from "@monorepo-example-local/core" => {CORE_CONSTS.NORMAL_CONSTANT}
        </p>
        <p>
          Constant from "@monorepo-example-local/theme" => {THEME_CONSTS.Color.RED}
        </p>
      </header>
    </div>
  );
}

export default App;
