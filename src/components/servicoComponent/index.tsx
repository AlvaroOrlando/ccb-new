'use client'

import Link from "next/link"
import { Dropdown, Nav } from "react-bootstrap"
import styles from "../../components/Header/header.module.scss"
import { useGlobalContext } from "@/app/Context/GlobalContextProvider"


export default function ServicoComponent(){

const { log } = useGlobalContext()
    return (
        <Nav.Item as='section' id={styles.services}>
            <Dropdown>
            <Dropdown.Toggle
                as="a"
                title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
            >
                Serviços
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>

                {
                log &&
                <Dropdown.Item as={Link} href="/salaVip">Acessar Área VIP</Dropdown.Item>
                }

                <Dropdown.Item as={Link} href="/servicos/isrc">ISRC/ECAD</Dropdown.Item>
                <Dropdown.Item as={Link} href="/servicos/gravar">Gravar Estúdio CCB</Dropdown.Item>
                <Dropdown.Item as={Link} href="/servicos/melodia">Confecção de Melodia</Dropdown.Item>
                <Dropdown.Item as={Link} href="/pagamentos">Pagamentos</Dropdown.Item>

                {
                log ?
                <Dropdown.Item as={Link}  href="/salaVip/fotoPerfil">Enviar Foto Perfil</Dropdown.Item>
                :
                <Dropdown.Item as={Link}  href="/servicos/reativar">Reativar Conta</Dropdown.Item>
                }

            </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
    )
}