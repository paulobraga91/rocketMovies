import { Container } from "./style";

export function TextArea({Title, ...rest}){
    return(
        <Container {...rest}>
            {Title}
        </Container>
    )
}