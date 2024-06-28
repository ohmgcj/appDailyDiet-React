import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Name = styled.TextInput`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 24px;
`;

export const DateAndTime = styled.View`
    flex: 1;
    flex-direction: row;
`;
