import React, { useState } from 'react';
import cn from 'classnames';
import { Collapse } from '@material-ui/core';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatOneRoundedIcon from '@material-ui/icons/RepeatOneRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

import { ListItem } from 'ui-neumorphism';

import Album from 'components/Album';
import IconButton from 'components/IconButton';
import PlayButton from 'components/PlayButton';
import Slider from 'components/Slider';
import Text from 'components/Text';

import s from './Player.module.css';

export default function Player({
  className,
  isSmallDisplay,
  songs,
  activeSong,
  setActiveSongId,
  toggleSongLike,
  switchSong,
}) {
  const songLength = 256 * 60;
  const [time, setTime] = useState(121 * 60);
  const [showSongs, setShowSongs] = useState(false);

  return (
    <div
      className={cn(className, s.root, { [s.smallDisplay]: isSmallDisplay })}
    >
      {isSmallDisplay ? (
        <Album
          isSmallDisplay
          activeSong={activeSong}
          toggleSongLike={toggleSongLike}
        />
      ) : null}
      <div className={s.playerActionsRow}>
        <div className={s.playerActions}>
          <IconButton noShadows className={s.playerAction}>
            <ShuffleRoundedIcon />
          </IconButton>
          <IconButton noShadows className={s.playerAction}>
            <RepeatOneRoundedIcon />
          </IconButton>
        </div>

        <div className={s.playerActions}>
          <PlayButton
            small
            className={s.playerAction}
            onClick={() => switchSong(-1)}
          >
            <NavigateBeforeRoundedIcon />
          </PlayButton>

          <PlayButton className={s.playerAction}>
            <PauseRoundedIcon />
          </PlayButton>
          <PlayButton
            small
            className={s.playerAction}
            onClick={() => switchSong(1)}
          >
            <NavigateNextRoundedIcon />
          </PlayButton>
        </div>

        <div className={s.playerActions}>
          <IconButton noShadows className={s.playerAction}>
            <RepeatRoundedIcon />
          </IconButton>
          <IconButton
            noShadows
            className={s.playerAction}
            onClick={() => setShowSongs(!showSongs)}
          >
            <QueueMusicRoundedIcon />
          </IconButton>
        </div>
      </div>

      <Slider
        className={s.slider}
        max={songLength}
        value={time}
        onChange={setTime}
      />
      <div className={s.timeRow}>
        <Text color="highlight">
          {new Date(time * 1000).toISOString().substr(11, 8)}
        </Text>
        <Text color="highlight">
          {new Date(songLength * 1000).toISOString().substr(11, 8)}
        </Text>
      </div>

      <Collapse in={showSongs} collapsedHeight={0}>
        <div>
          {songs.map(song => (
            <ListItem
              key={song.id}
              link
              raised
              rounded
              title={<Text variant="subtitle">{song.name}</Text>}
              subtitle={<Text>{song.artist}</Text>}
              onClick={() => setActiveSongId(song.id)}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
}
