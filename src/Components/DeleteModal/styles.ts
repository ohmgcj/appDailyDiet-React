import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
    ButtonType: 'DEFAULT' | 'OUTLINED';
}
    

export const CenteredView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    padding: 25px;
`;

export const Container = styled.View`
    flex-direction: column;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};

    padding: 32px;

    gap: 32px;
`;

export const ModalText = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ModalButtonView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 32px;
`;

export const ModalButton = styled(TouchableOpacity)<Props>`
    ${({ theme, ButtonType }) => css`
        ${ButtonType == 'OUTLINED' && `
        border: 1px solid ${theme.COLORS.GRAY_1};
        `};
    `};
    flex-direction: row;
    background-color: ${({ theme, ButtonType }) => ButtonType == 'DEFAULT' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
    border-radius: 6px;
    

    padding: 16px 24px;
`;

export const ModalButtonText = styled.Text<Props>`
    color: ${({ theme, ButtonType }) => ButtonType == 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;