import { Container, FeedbackText, Title, DescriptionText, BoldDescriptionText } from './styles';

import { useNavigation, useRoute  } from '@react-navigation/native'

import { Image } from 'react-native';

import Button from '@Components/Button';

export type FeedbackTypeProps = {
    type: 'GREEN' | 'RED',
};

export function Feedback() {
    const navigation = useNavigation();
    const route = useRoute();
    const { type } = route.params as FeedbackTypeProps;

    const feedbackIcon = type === 'GREEN' ? require('@assets/images/goodFeedback.png') : require('@assets/images/badFeedback.png');
    const feedbackTitle = type === 'GREEN' ? 'Continue assim!' : 'Que pena!';
    const feedbackBoldDescription = type === 'GREEN' ? 'dentro da dieta' : 'saiu da dieta';
    const feedbackDescription = type === 'GREEN' ? 'Você continua dentro da dieta. Muito bem!' : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!';

    const parts = feedbackDescription.split(feedbackBoldDescription);

    const handleSubmit = () => {
        navigation.navigate('home');
    }

    return (
        <Container>
            <FeedbackText>
                <Title type={type}>{feedbackTitle}</Title>
                <DescriptionText>{parts[0]}
                <BoldDescriptionText>{feedbackBoldDescription}</BoldDescriptionText>
                {parts[1]}</DescriptionText>
            </FeedbackText>
            <Image 
            source={feedbackIcon}
            style={{width: 224, height: 288}}/>
            <Button title='Ir para a página inicial' onPress={handleSubmit}/>
        </Container>
    );
}