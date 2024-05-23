import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 50px 25px 0 25px;
`;

export const LogoContainer = styled.View`
    display: flex;
    flex-direction: row;

    margin-bottom: 32px;
`;

export const Meals = styled.View`
    flex: 1;
    flex-direction: column;
    
    margin: 40px 0px;
`;

export const New = styled.View`
    
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const DayList = styled.View`
    margin-top: 24px;
    
`;
