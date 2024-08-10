import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background-color: 'black';

    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}
`;