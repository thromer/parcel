'use server-entry';

import Container from './Container.js';
import {Counter} from './Counter.js';
import Button from './Button.js';
import {Files} from './Files';
import {Suspense} from 'react';
import './App.css';
import {getServerState} from './ServerState';
import {like} from './actions.js';
import {Resources} from '@parcel/runtime-rsc';
import './bootstrap';

export default async function App() {
  return (
    <html>
      <head>
        <title>RSC</title>
        <Resources />
      </head>
      <body>
        <Container>
          <h1>{getServerState()}</h1>
          <Counter />
          <div>
            <Button action={like.bind(null, 'hi')}>Like server action</Button>
          </div>
          <form>
            <button formAction={like.bind(null, 'yoo')}>Like form</button>
          </form>
        </Container>
        <Suspense fallback={<>Loading files...</>}>
          <Files />
        </Suspense>
      </body>
    </html>
  );
}
