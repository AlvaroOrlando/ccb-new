'use client'
import Link from "next/link";
import { useContext } from "react";
import { Nav } from "react-bootstrap";

import { GlobalContextProvider, useGlobalContext } from '@/app/Context/GlobalContextProvider'

export default function WhatsappVip(){

    const { log } = useGlobalContext()

    const usuario = 'Álvaro Orlando'

    return (
      <GlobalContextProvider>
        <Nav.Item data-title='whatsappContainer' as='section'>
            {
              log === false ?
              <Link data-title='whatsapp' href="https://contate.me/clubedoscompositores">
                <section>
                  <p><span>(013) 99748-7065</span></p>
                  <p>WhatsApp do CCB</p>
                </section>
              </Link> :

              // Logado 
              <div data-title='vip-desktop'>
                <section>
                  <p>Olá, <span>{`${usuario}`},</span></p>
                  <p>você está logado(a) no CCB!</p>
                </section>
              </div>
          }
        </Nav.Item>
      </GlobalContextProvider>
    )
}

            