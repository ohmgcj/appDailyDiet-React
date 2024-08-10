import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 25px;
  align-items: center;
  margin-top: -24px;
  border-radius: 20px;

  gap: 23px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
`;

export const Data = styled.View`
  width: 100%;
  align-items: center;

  gap: 12px;
`;

export const Info = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  align-items: stretch;

  gap: 12px;
`;

export const LeftWrapper = styled.View`
  flex: 1;
`;

export const RightWrapper = styled.View`
  flex: 1;
`;