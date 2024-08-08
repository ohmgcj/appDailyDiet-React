import { Container, FeedbackText, Title, DescriptionText } from './styles';

import { Image } from 'react-native';

import Button from '@Components/Button';

export type FeedbackType = 'GREEN' | 'RED';

export type Props = {
    type: FeedbackType,
    title: string,
    description: string
};

export function Feedback({ type, title, description }: Props) {
    const feedbackIcon = type === 'GREEN' ? require('@assets/images/goodFeedback.png') : require('@assets/images/badFeedback.png');

    const handleSubmit = () => {
        console.log('testado')
    }

    return (
        <Container>
            <FeedbackText>
                <Title type={type}>{title}</Title>
                <DescriptionText>{description}</DescriptionText>
            </FeedbackText>
            <Image 
            source={feedbackIcon}
            style={{width: 224, height: 288}}/>
            <Button title='Ir para a página inicial' onPress={handleSubmit}/>
        </Container>
    );
}