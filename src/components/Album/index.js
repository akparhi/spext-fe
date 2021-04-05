import React from 'react';
import cn from 'classnames';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

import Text from 'components/Text';
import IconButton from 'components/IconButton';

import s from './Album.module.css';

export default function TrackInfo({ className }) {
  return (
    <div className={cn(className, s.root)}>
      <div className={s.artworkOuter}>
        <div className={s.artworkInner} />
      </div>

      <div className={s.albumInfo}>
        <Text className={s.nowPlaying}>Now Playing</Text>

        <div>
          <Text variant="title" className={s.songName}>
            Purple Haze
          </Text>
          <Text variant="subtitle">Jimi Hendrix</Text>
          <Text>Woodstock</Text>
        </div>

        <div className={s.albumActions}>
          <IconButton>
            <FavoriteRoundedIcon className={s.filledIcon} />
          </IconButton>

          <IconButton className={s.playlistAddButton}>
            <PlaylistAddRoundedIcon />
          </IconButton>

          <IconButton className={s.shareButton}>
            <ShareRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
