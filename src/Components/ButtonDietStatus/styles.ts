import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'DEFAULT' | 'GREEN' | 'RED';
export type ButtonStatus = 'GREEN' | 'RED';

type ContainerProps = {
    type?: ButtonTypeStyleProps;
  }
  
  type StatusProps = {
    status: ButtonStatus;
  }

export const Container = styled(TouchableOpacity)<ContainerProps>`
    flex: 1;
    flex-direction: row;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_DARK : type === 'RED' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Status = styled.View<StatusProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme, status }) => status === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    margin-right: 8px;
`;