import styled from 'styled-components/native';

export type CardColorStyle = 'DEFAULT' | 'SUCCESS' | 'FAIL';

type Props = {
    type: CardColorStyle;
};


export const Container = styled.View<Props>`
   width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.GRAY_6 : type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`;

export const Total = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

export const Info = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;