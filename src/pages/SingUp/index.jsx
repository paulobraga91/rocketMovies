import { Container, Content, Form ,Title, Background} from "./style";
import{ButtonText} from "../../componets/ButtonText";
import{Button} from "../../componets/Button";
import{Input} from "../../componets/Input";
import {FiMail,FiUser, FiLock, FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

export function SingUp(){
    return(
        <Container>
              <Background/>
            <Content>
                <Title>
                    <h1>RocketMovies</h1>
                    <span>Aplicação para acompanhar tudo que assistir</span>
                </Title>

                <p>Crie sua conta</p>

                <Form>
                    <Input placeholder="E-mail" icon={FiMail}/>
                    <Input placeholder="Senha" icon={FiLock}/>
                    <Button title="Cadastrar"/>
                </Form>
                <Link to="/"><ButtonText title="Criar Conta"/></Link>
                
           
            </Content>

          
 
 
        </Container>
    )
}