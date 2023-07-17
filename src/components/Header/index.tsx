'use client'
/* eslint-disable @next/next/no-img-element */
import styles from '../Header/header.module.scss'

import logo from '../../../public/images/logo_res_mod.png'

import Sidebar from '../Sidebar'
import BuscaArtista from '../BuscaArtista'
import LoginModal from '../LoginModal'
import WhatsappVip from '../whatsapp-vip'


import Link from 'next/link' 

import { Dropdown, Nav } from 'react-bootstrap'
import ServicoComponent from '../servicoComponent'
import Associar from '@/app'


export default function Header(){

    return (
        <header className={styles.header}>

            {/* Top Navbar  */}
            <Nav as='nav' className={styles.topNav}>

              {/* Logo */}
              <Nav.Item as='section'>
                <Link href="/">
                  <img src={logo.src} alt="logo" />
                </Link>
              </Nav.Item>
              
              {/* Busca Artista */}
              <Nav.Item as='section'> 
                <BuscaArtista 
                  searchBox={styles.searchBox}
                />
              </Nav.Item>

              {/* Whatsapp/Vip-Desktop */}
              <WhatsappVip />

              {/* Login / MENU */}
              <Nav.Item data-title='loginMenu' as='section'>
                
                <LoginModal />

                {/* Menu  */}
                <div className={styles.menu}>
                  <Sidebar />
                </div>
              </Nav.Item>
            </Nav>

            {/* Bottom Navbar  */}
            <Nav as='nav' className={styles.bottomNav}>

              {/* Associar */}
                <Associar />

              {/* REGISTRAR  */}
              <Nav.Item as='section' id={styles.registrar}>
                <Dropdown>
                  <Dropdown.Toggle as="a"
                    title="Clique aqui para Registrar e Editar músicas, Letras e Poesias. CCB - Mais de 280 mil músicas registradas em 22 anos! Proteja seus Direitos Autorais"
                  >
                    Registrar Música
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href="/servicos/registrar">Registrar Música</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/servicos/registrar">Registrar Poesia</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/servicos/registrar">Registrar Livro</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/servicos/registrar">Registrar Roteiro</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/servicos/registrar">Registrar Trabalho</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>   

                {/* ISRC/ECAD  */}
              <Nav.Item as='section' id={styles.ecad}>
                <Link 
                  href="/servicos/isrc" 
                  title="Clique aqui para Gerar o Código ISRC junto ao ECAD. O ECAD irá controlar a execução e o pagamento dos Direitos Autorais de suas músicas"
                  >ISRC/ECAD
                </Link>
              </Nav.Item>

                {/* Estúdio  */}
              <Nav.Item as='section'  id={styles.studio}>
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Estúdio
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href="/servicos/gravar">Gravar no Estúdio CCB</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/servicos/melodia">Confecção de Melodia</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

              {/* SERVIÇOS  */}
                <ServicoComponent />

                {/* BENEFÍCIOS  */}
              <Nav.Item as='section' id={styles.beneficios} >
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title='Conheça os benefícios de ser um associado CCB'
                  >
                    Benefícios
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href="/beneficios/quemSomos">Quem Somos</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/beneficios/carteiraCompositor">Carteira de Compositor</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/beneficios/divulgacao">Divulgação</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/beneficios/ccbMusicPlataforma">CCB Music Plataforma</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/radio/radioOnline">Rádio Online</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/radio/radioGospel">Rádio Gospel</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/beneficios/programaRecompensas">Programa de Recompensas</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

                {/* COLETÂNEA  */}
              <Nav.Item as='section' id={styles.colet}>
                <Dropdown>
                  <Dropdown.Toggle as="a">
                    Coletânea
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href="/coletanea">Como Participar</Dropdown.Item>
                  </Dropdown.Menu> 
                </Dropdown>
              </Nav.Item>
            
                {/* PAGAMENTOS  */}
              <Nav.Item as='section' id={styles.pay}>
                <Link href="/servicos/pagamentos">
                  Pagamentos
                </Link>
              </Nav.Item>
                
                {/* Festivais  */}
              <Nav.Item as='section' id={styles.festivals}>
                <Dropdown>
                  <Dropdown.Toggle
                    as="a" 
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Festivais
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href=''>Inscrições encerradas!</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/festival/resultadoMusica">Resultado Música 2023</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/festival/resultadoPoesia">Resultado Poesia 2023</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/festival/resultadosAnteriores">Resultados Anteriores</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              
                {/* ATENDIMENTO  */}
              <Nav.Item as='section' id={styles.whatsapp}>
                <Link 
                  href="https://contate.me/clubedoscompositores" 
                  title="Contate-nos pelo WhatsApp!"
                >
                  Atendimento
                </Link>
              </Nav.Item>

                {/* AJUDA  */}
              <Nav.Item as='section' id={styles.help}>
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Ajuda
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href="/ajuda/ajudaGeral">Ajuda Geral</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/ajuda/tocarNaRadio">Tocar na Rádio</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/ajuda/comporUmaMusica">Compor Uma Música</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/ajuda/gravadoras">Gravadoras</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/ajuda/direitosAutorais">Direitos Autorais</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>  
                      
            </Nav>

        </header>
    )
}

 