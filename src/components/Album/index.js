import React, { useState } from 'react';
import cn from 'classnames';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

import Text from 'components/Text';
import IconButton from 'components/IconButton';

import { Dialog, Card } from 'ui-neumorphism';

import s from './Album.module.css';

export default function TrackInfo({
  className,
  isSmallDisplay,
  activeSong,
  toggleSongLike,
}) {
  const [showAddToPlaylistDialog, setShowAddToPlaylistDialog] = useState(false);
  return (
    <div
      className={cn(className, s.root, { [s.smallDisplay]: isSmallDisplay })}
    >
      <Dialog
        minWidth={300}
        visible={showAddToPlaylistDialog}
        onClose={() => setShowAddToPlaylistDialog(false)}
      >
        <Card className="pa-4 ma-4">
          Add to a playlist (Not implemented for the purpose of this assignment)
        </Card>
      </Dialog>

      <div className={s.artworkOuter}>
        <div className={s.artworkInner} />
      </div>

      <div className={s.albumInfo}>
        <Text className={s.nowPlaying}>Now Playing</Text>

        <div className={s.songInfo}>
          <Text variant="title" className={s.songName}>
            {activeSong.name}
          </Text>
          <Text variant="subtitle">{activeSong.artist}</Text>
          <Text>{activeSong.album}</Text>
        </div>

        <div className={s.albumActions}>
          <IconButton
            onClick={() =>
              toggleSongLike({ ...activeSong, liked: !activeSong.liked })
            }
          >
            {activeSong.liked ? (
              <FavoriteRoundedIcon className={s.filledIcon} />
            ) : (
              <FavoriteBorderRoundedIcon />
            )}
          </IconButton>

          <IconButton
            className={s.playlistAddButton}
            onClick={() => setShowAddToPlaylistDialog(true)}
          >
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
