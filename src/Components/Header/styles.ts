import styled from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type HeaderTypeStyleProp = 'GREEN' | 'RED';

type Props = {
    type?: HeaderTypeStyleProp;
}

export const Container = styled(SafeAreaView)<Props>`
    height: 132px;

    background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_MID : type === 'RED' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_5};

    justify-content: center;
`;

export const TitleContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    flex-shrink: 1;
    align-self: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: auto;
    left: 25px;
    z-index: 1;

    align-self: center;
`; 

export const ArrowLeftIcon = styled(ArrowLeft).attrs<Props>(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2,
}))`
        flex-shrink: 1;
        align-self: center;
`;