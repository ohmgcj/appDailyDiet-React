import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 25px;
    gap: 32px;
`;

export const LogoContainer = styled.View`
    display: flex;
    flex-direction: row;

    gap: 5px;
    align-items: center;
`;

export const Meals = styled.View`
    flex: 1;
    flex-direction: column;
    
    gap: 32px;
`;

export const New = styled.View`
    gap: 8px;
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-weight: bold;
    gap: 12px;
`;

export const DayList = styled.View`
  justify-content: center;  

  gap: 8px;
`;
