import React from 'react';
import * as S from './button.style';

type YellowBtnChildren = {
  children: string;
};

export const YellowBtn: React.FC<YellowBtnChildren> = ({ children }) => {
  return <S.YellowBtn>{children}</S.YellowBtn>;
};