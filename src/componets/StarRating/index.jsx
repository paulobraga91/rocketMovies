import { Container } from "./style";
import {FiStar } from "react-icons/fi";


export function StarRating({rate}){

    let stars = []
    if (rate > 5) rate = 5
    if (rate < 0) rate = 0

    for (let i = 0; i < rate; i++) {
        stars.push(<FiStar/>);
    } 

    return(
            <Container>
                    {stars}
            </Container>
    )
}