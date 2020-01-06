import React from 'react';
import {
  TooltipContainer,
  TooltipLabel
} from './StyledTooltip';

const Tooltip = ({ text }) => {
  return (
    <TooltipContainer>
      <TooltipLabel>{text}</TooltipLabel>
    </TooltipContainer>
  )
}

export default Tooltip;