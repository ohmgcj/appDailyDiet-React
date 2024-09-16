import { StatusType } from '@screens/Home';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    type: StatusType;
};

export const Container = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: row;

    min-height: 49px;
    max-height: 49px;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;

    align-items: center;
`;

export const Time = styled.Text`
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_3};

    margin: 0px 24px;
`;

export const Title = styled.Text`
    flex: 1;
`;

export const Status = styled.View<Props>`
    height: 14px;
    width: 14px;

    background-color: ${({ theme, type }) => type === 'STATUSGREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

    border-radius: 12px;
`;