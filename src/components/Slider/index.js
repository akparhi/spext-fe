import React from 'react';
import RcSlider from 'rc-slider';
import cn from 'classnames';

import s from './Slider.module.css';

export default function Slider({ className, ...rest }) {
  return <RcSlider className={cn(className, s.root)} {...rest} />;
}
