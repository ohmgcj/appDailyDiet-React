import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

//export type MealStatus = 'STATUSGREEN' | 'STATUSRED';

type Tag = {
    status: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7  };
`;

export const Content = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7  };
    align-items: center;
    margin-top: -20px;
    border-radius: 20px;
    padding: 0px 25px;
`;

export const Info = styled.View`
    flex: 1;

    width: 100%;
    height: 100%;

    gap: 24px;
`;

export const Meal = styled.View`
    gap: 8px;
`;

export const Title = styled.Text` 
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px; 
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-weight: bold;
    `};    
`;

export const Description = styled.Text`

`;

export const TimeInfo = styled.View`
    gap: 8px;
`;

export const Date = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px; 
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-weight: bold;
    `};    
`;

export const TagContainer = styled.View` 
    flex-direction: row;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 1000px;

    padding: 8px 16px;

    align-items: center;
    align-self: flex-start;

    gap: 8px;
`;

export const Status = styled.View<Tag>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme, status }) => status === 'STATUSGREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;

export const EditButtons = styled.View`
    flex: 1;
    width: 100%;

    justify-content: flex-end;
    gap: 8px;
`;