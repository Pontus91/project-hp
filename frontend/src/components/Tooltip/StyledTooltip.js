import styled from 'styled-components';
import { COLORS } from '../../constants';

export const TooltipContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: inline-block;
  margin-top: 20px;
`
export const TooltipLabel = styled.div`
  max-width: 350px;
  padding: 3px 8px;
  color: ${COLORS.whiteMain};
  text-align: center;
  background-color: ${COLORS.mainDarkRed};
  border-radius: 4px;
`