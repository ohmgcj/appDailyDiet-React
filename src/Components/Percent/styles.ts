import styled from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

type BoxProps = {
    width?: number;
    height?: number;
    colorType: string;
}

export const Container = styled.View<BoxProps>`
    background-color: ${({ theme, colorType }) => colorType == 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    padding: 20px 16px;
    gap: 2px;
    ${props => props.height && `height: ${props.height}px;`}
`;

export const PercentNumber = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-weight: bold;
`;

export const PercentDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ArrowIconTouchable = styled(TouchableOpacity)`
    position: absolute;
  left: 26px;
  top: 50px;
`;

export const ArrowUpIcon = styled(ArrowUpRight).attrs<BoxProps>(({ theme, colorType }) => ({
    size: theme.FONT_SIZE.XXL,
    color: colorType == 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<BoxProps>(({ theme, colorType }) => ({
    size: 24,
    color: colorType == 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;