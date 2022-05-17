import { Entity } from "../../model/Entity";
import { v4 as uuidV4 } from 'uuid';

type UserEntityProps = {

  name: string
  email: string
  password: string
  id?: string
}

export class User extends Entity<UserEntityProps>{

  constructor(props: UserEntityProps) {

    props.id = uuidV4();
    super(props);
  }
}

//Paradigmas3
//Modelos Arquiteturais
//Design Patterns
//Como configurar a aplicação
//Testes
//Propósito - Cartão de Visita
//Por que usei tais tipos de Arquitetura
//Clean Archicteture, SOLID
//Meu REDAME.md deverá ser bem mais trabalhado
//Explicar minhas tomadas de decisão