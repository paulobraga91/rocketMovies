import { Container } from "./style";

export function ButtonText({icon: Icon,title,...rest}){
    return(
        <Container >
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}