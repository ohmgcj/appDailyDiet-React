import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    min-height: 56px;
    max-height: 56px;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_2 };

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    margin: 0px 18px;
`;