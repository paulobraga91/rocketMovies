import { Container , Rate} from "./style";
import {Tag} from "../Tags"
import {StarRating} from "../StarRating"

export function Notes({data, ...rest}){
    return(
        <Container {...rest}>
             <h1>{data.title}</h1>
            <Rate>
                <StarRating rate={data.rate}/>
            </Rate>

            

        <p>{data.content}</p>

        {
            data.tags && 
            
            <footer>

            { data.tags.map(tag => <Tag title={tag.name} key={tag.name} />)}

            </footer>
        
        }

        </Container>
    )
}