import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7  };
    align-items: center;
    margin-top: -20px;
    border-radius: 20px;
    padding: 24px;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Label = styled.Text`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
`;

export const NameInput = styled.TextInput`
    width: 100%;
    height: 48px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 24px;
`;

export const DescInput = styled.TextInput`
    width: 100%;
    height: 120px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 24px;
`;

export const DateAndTime = styled.View`
    flex-direction: row;    

    justify-content: center;
`;

export const LeftWrapper = styled.View`
  flex: 1;
  margin-right: 8px;
`;

export const RightWrapper = styled.View`
  flex: 1;
`;


export const DietButtons = styled.View`
    justify-content: center;
`;