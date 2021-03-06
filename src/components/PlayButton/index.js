import React from 'react';
import cn from 'classnames';

import s from './PlayButton.module.css';

export default function PlayButton({
  className,
  children,
  small = false,
  pressed = false,
  ...rest
}) {
  return (
    <button
      className={cn(s.outer, className, {
        [s.small]: small,
        [s.pressed]: pressed,
      })}
      {...rest}
    >
      <div className={s.inner}>{children}</div>
    </button>
  );
}
