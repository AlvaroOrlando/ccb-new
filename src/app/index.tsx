'use client'
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Dropdown, Nav, NavItem } from "react-bootstrap";
import styles from "../components/Header/header.module.scss"
import salaVipBarra from '../../public/images/salavipnabarra.png'
import { useGlobalContext } from "./Context/GlobalContextProvider";
import { usePathname } from "next/navigation";


export default function Associar(){
const pathname = usePathname()

     const {log } = useGlobalContext()
     console.log(log);
    return (
        <>        
        {
        log === false ?
    
        // Associar
        <Nav.Item as='section'>
        <Dropdown>
            <Dropdown.Toggle
            as="a"
            title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
            >
            Associar
            </Dropdown.Toggle>
    
            <Dropdown.Menu className={styles.dropdownMenu}>
            <Dropdown.Item as={Link} href="/associar/compositores">Compositores</Dropdown.Item>
            <Dropdown.Item as={Link} href="/associar/bandas">Bandas</Dropdown.Item>
            <Dropdown.Item as={Link} href="/associar/cantores">Cantores e Duplas</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Nav.Item>
        
            // Home
        : pathname === '/salaVip' ?
        
        <NavItem as='section'>
        <Link href="/">Home</Link>
        </NavItem>
        
        :
        // Sala Vip
        <Nav.Item as='section'>
            <Link className={styles.gifSalaVip} href="/salaVip">
            <img src={salaVipBarra.src} alt="sala vip" />
            </Link>
        </Nav.Item>
        }     
        </>
   
    )
}


