import React, { useState } from 'react';
import cn from 'classnames';

import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatOneRoundedIcon from '@material-ui/icons/RepeatOneRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

import IconButton from 'components/IconButton';
import PlayButton from 'components/PlayButton';
import Slider from 'components/Slider';
import Text from 'components/Text';

import s from './Player.module.css';

export default function Player({ className }) {
  const songLength = 256 * 60;
  const [time, setTime] = useState(121 * 60);

  return (
    <div className={cn(className, s.root)}>
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
          <PlayButton small className={s.playerAction}>
            <NavigateBeforeRoundedIcon />
          </PlayButton>

          <PlayButton className={s.playerAction}>
            <PauseRoundedIcon />
          </PlayButton>
          <PlayButton small className={s.playerAction}>
            <NavigateNextRoundedIcon />
          </PlayButton>
        </div>

        <div className={s.playerActions}>
          <IconButton noShadows className={s.playerAction}>
            <RepeatRoundedIcon />
          </IconButton>
          <IconButton noShadows className={s.playerAction}>
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
        <Text>{new Date(time * 1000).toISOString().substr(11, 8)}</Text>
        <Text>{new Date(songLength * 1000).toISOString().substr(11, 8)}</Text>
      </div>
    </div>
  );
}
