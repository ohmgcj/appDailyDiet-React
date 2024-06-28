import styled from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';

export type HeaderTypeStyleProp = 'GREEN' | 'RED';

type Props = {
    type?: HeaderTypeStyleProp;
}

export const Container = styled.View<Props>`
    height: 132px;

    background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_MID : type === 'RED' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_5};

    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<Props>(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2,
}))`
    position: absolute;
    top: auto;
    left: 26px;
`;