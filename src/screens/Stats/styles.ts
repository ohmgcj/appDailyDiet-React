import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 25px;
  align-items: center;
  margin-top: -24px;
  border-radius: 20px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const Data = styled.View`
    width: 100%;
    max-width: 327px;
    align-items: center;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 327px;
`;

export const LeftWrapper = styled.View`
  flex: 1;
  margin-right: 8px;
`;

export const RightWrapper = styled.View`
  flex: 1;
  margin-left: 8px;
`;