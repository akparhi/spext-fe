import React from 'react';
import Album from 'components/Album';
import Player from 'components/Player';

import s from './App.module.css';

export default function App() {
  return (
    <div className={s.frame}>
      <Album />
      <Player />
    </div>
  );
}
