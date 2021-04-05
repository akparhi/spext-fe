import React from 'react';
import cn from 'classnames';

import s from './Text.module.css';

const colors = {
  base: s.base,
  highlight: s.highlight,
};

const styleVariations = {
  normal: s.normal,
  subtitle: s.subtitle,
  title: s.title,
};

export default function Text({
  className = '',
  variant = 'normal',
  color = 'base',
  children,
}) {
  return (
    <div className={cn(styleVariations[variant], colors[color], className)}>
      {children}
    </div>
  );
}
