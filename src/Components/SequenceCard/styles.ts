import styled, { css } from 'styled-components/native';

export type CardColorStyle = 'DEFAULT' | 'SUCCESS' | 'FAIL';

type Props = {
    type: CardColorStyle;
};


export const Container = styled.View<Props>`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.GRAY_6 : type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  gap: 8px;
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  font-weight: bold;
`;

export const Info = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;