import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'DEFAULT' | 'ACTIVE';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    flex-direction: row;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1 };

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;