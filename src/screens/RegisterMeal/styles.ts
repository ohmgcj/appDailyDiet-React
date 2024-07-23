import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    height: 100%; 
    background-color: ${({ theme }) => theme.COLORS.GRAY_7  };
    align-items: center;
    margin-top: -20px;
    border-radius: 20px;
`;

export const Form = styled.View`
    width: 100%;
    padding: 24px;
    margin-top: 20px;
`;

export const Label = styled.Text`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
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
  margin-right: 8px;
`;


export const DietButtons = styled.View`
    justify-content: center;
`;

export const DietButtonsOptions = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;
