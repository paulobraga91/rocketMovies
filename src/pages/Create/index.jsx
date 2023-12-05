import { Container, Form ,Tags} from "./style";
import{ButtonText} from "../../componets/ButtonText"
import{FiArrowLeft} from "react-icons/fi"
import{Header} from "../../componets/Header"
import { Input } from "../../componets/Input";
import { TextArea } from "../../componets/TextArea";
import {Button} from "../../componets/Button";
import { NoteItem } from "../../componets/NotesItem";
import{Link} from "react-router-dom"


export function Create(){

    return(

        <Container>
            <Header/>
                
                <title>
                    <Link to="/"><ButtonText title={"Voltar"} icon={FiArrowLeft}/></Link>
                    
                    <h1>Novo Filme</h1>
                </title>

                <main>

                <Form> 
                    <div>
                    <Input placeholder="Título"/>
                     <Input placeholder="Sua Nota (de 0 a 5)"/>
                    </div>
               
                <TextArea placeholder="Observações"></TextArea>

                <h1>Marcadores</h1>
                <Tags>
                    <NoteItem value="Ação"/>
                    <NoteItem isNew value="Nova Tag" />
                  
                </Tags>

                <footer>
                    <Button id="buttonDelete" title="Excluir filme"/>
                    <Button title="Salvar Alterações"/>
                   
                </footer>

                </Form> 

            </main>
        </Container>
    )
}