import React, { useState } from 'react';
import useWindowSize from 'utils/useWindowSize';
import Album from 'components/Album';
import Player from 'components/Player';

import s from './App.module.css';

const findAndUpdateItem = (arr, findBy, updatedItem) => {
  if (!Array.isArray(arr)) return [];
  const i = arr.findIndex(el => el[findBy] === updatedItem[findBy]);
  return i === -1
    ? arr
    : [...arr.slice(0, i), updatedItem, ...arr.slice(i + 1)];
};

export default function App() {
  const size = useWindowSize();
  const isSmallDisplay = size?.width < 960;
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      album: 'woodstock',
      liked: false,
    },
    {
      id: 2,
      name: "I don't know why",
      artist: 'AVAION',
      album: '',
      liked: false,
    },
    {
      id: 3,
      name: 'Hope on',
      artist: 'AVAION',
      album: '',
      liked: false,
    },
  ]);
  const [activeSongId, setActiveSongId] = useState(1);
  const activeSong = songs?.find(t => t.id === activeSongId);
  const toggleSongLike = updt => setSongs(findAndUpdateItem(songs, 'id', updt));
  const switchSong = step => {
    const songId = activeSongId + step;
    if (songId <= songs.length && songId > 0) setActiveSongId(songId);
  };

  return (
    <div className={s.frame}>
      {isSmallDisplay ? null : (
        <Album activeSong={activeSong} toggleSongLike={toggleSongLike} />
      )}
      <Player
        isSmallDisplay={isSmallDisplay}
        songs={songs}
        activeSong={activeSong}
        setActiveSongId={setActiveSongId}
        toggleSongLike={toggleSongLike}
        switchSong={switchSong}
      />
    </div>
  );
}
