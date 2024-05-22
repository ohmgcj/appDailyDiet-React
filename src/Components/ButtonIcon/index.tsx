import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'
import { Plus, PencilSimpleLine  } from 'phosphor-react-native';

export type IconTypeStyle = 'ADD' | 'EDIT';
export type ButtonIconTypeStyleProps = 'DEFAULT' | 'ACTIVE';

type Props = TouchableOpacityProps &{
    type: ButtonIconTypeStyleProps;
    icon: IconTypeStyle;
    title: string;
}

export function ButtonIcon({ title, icon, onPress, ...rest }: Props){
    const IconComponent = icon === 'ADD' ? Plus : PencilSimpleLine;
    return(
        <Container type='DEFAULT'>
            <Icon  
                as={IconComponent} 
                color="white"
                size={18}
            />
            <Title>{title}</Title>
        </Container>
    )
}
