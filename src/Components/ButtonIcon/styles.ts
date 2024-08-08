import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'

export type ButtonIconTypeStyleProps = 'DEFAULT' | 'ACTIVE';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, type }) => css`
        ${type === 'ACTIVE' && `
        border: 1px solid ${theme.COLORS.GRAY_1};
        `};
    `};
    flex-direction: row;

    padding: 16px 24px;

    background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_6 };

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled.View`
    justify-content: center;
    align-items: center;

    margin-right: 12px;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
    color: ${type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};

    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${ theme.FONT_SIZE.MD}px;
    `};

`;