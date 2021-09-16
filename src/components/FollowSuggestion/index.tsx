import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

export function FollowSuggestion({ name, nickname }: Props) {
    return(
        <Container>
            <div>
                <Avatar />
                <Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </Info>

            </div>
            <FollowButton outlined>Seguir</FollowButton>
        </Container>
    );
}