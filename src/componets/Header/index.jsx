import { Container , Profile } from "./style";
import {Input} from "../Input"
import {Link} from "react-router-dom"


export function Header(){

    return(

        <Container>
            
            <Link to="/"><h1>RocketMovies</h1></Link>
            
            <Input placeholder = "Pesquise pelo título"></Input>


                    <Profile to="/profile"> 

                        <div>   
                            <p>Paulo Braga</p>
                            <span>sair</span>
                        </div> 
                        
                        <img src="https://www.github.com/paulobraga91.png" alt="Profile image" />
                    </Profile> 
                
             </Container>
    )
}