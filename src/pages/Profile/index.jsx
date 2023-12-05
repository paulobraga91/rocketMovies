import { Container , Form , Avatar} from "./style";
import {ButtonText} from "../../componets/ButtonText"
import {Input} from "../../componets/Input"
import{Button} from "../../componets/Button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import {Link} from "react-router-dom"

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar" icon={FiArrowLeft}/>
                </Link>
                
            </header>

        <Form>

           <Avatar>
            <img src="https://www.github.com/paulobraga91.png" alt="Foto" />
                <label htmlFor="Avatar">
                    <FiCamera/>
                    <input id="Avatar" type="file"/>
                </label>
             </Avatar> 
        
            <Input type="Text" placeholder="Nome" icon={FiUser}/>
            <Input type="email" placeholder="Email" icon={FiMail}/>
            <Input type="password" placeholder="Senha Atual" icon={FiLock}/>
            <Input type="password" placeholder="Senha Antiga" icon={FiLock}/>
            
            <Button title="Salvar"/>

        </Form>

        </Container>
    )
}