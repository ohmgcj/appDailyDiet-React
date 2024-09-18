import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'
import { Plus, PencilSimpleLine, Trash  } from 'phosphor-react-native';

export type IconTypeStyle = 'ADD' | 'EDIT' | 'DELETE';
export type ButtonIconTypeStyleProps = 'DEFAULT' | 'ACTIVE';

type Props = TouchableOpacityProps &{
    type: ButtonIconTypeStyleProps;
    icon: IconTypeStyle;
    title: string;
    onPress: () => void;
}

export function ButtonIcon({ type, title, icon, onPress }: Props){
    const IconComponent = icon === 'ADD' ? Plus : icon === 'EDIT' ? PencilSimpleLine : Trash;
    const IconColor = type === 'DEFAULT' ? "white" : "black";
    return(
        <Container type={type} onPress={onPress}>
            <Icon  
                as={IconComponent} 
                color={IconColor}
                size={18}
            />
            <Title type={type}>{title}</Title>
        </Container>
    )
}
