import React from 'react';
import cn from 'classnames';

import s from './IconButton.module.css';

export default function IconButton({
  className,
  children,
  noShadows = false,
  ...rest
}) {
  return (
    <button
      className={cn(s.root, className, { [s.noShadows]: noShadows })}
      {...rest}
    >
      {children}
    </button>
  );
}
