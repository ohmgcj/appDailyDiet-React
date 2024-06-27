import styled from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

type BoxProps = {
    width?: number;
    height?: number;
}

export const Container = styled.View<BoxProps>`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    padding: 20px;
    ${props => props.height && `height: ${props.height}px;`}
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

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
    position: absolute;
    left: 26px;
    top: 50px;
`;