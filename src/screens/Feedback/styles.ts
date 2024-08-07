import styled, { css } from 'styled-components/native';

export type FeedbackType = 'GREEN' | 'RED';

export type Props = {
    type: FeedbackType
}

export const Container = styled.View`
    flex: 1;
    padding: 24px;

    justify-content: center;
    align-items: center;

    gap: 60px;
`;

export const FeedbackText = styled.View`
    justify-content: center;
    align-items: center;    
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
    color: ${type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XXL}px;  
    font-family: ${theme.FONT_FAMILY.BOLD};    
    `};
`;

export const DescriptionText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;  
`;