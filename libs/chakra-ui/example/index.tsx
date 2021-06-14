import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, ChakraProvider, theme } from '../.';

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Button>test</Button>
      </ChakraProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
