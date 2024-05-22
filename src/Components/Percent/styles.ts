import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const PercentNumber = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PercentDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    
`;

export const ArrowUpIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
    position: absolute;
    top: 10px;
    right: 10px;
`;