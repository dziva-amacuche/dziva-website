import React from "react";
import "../App.css";
import Outsourcing from "../assets/images/outsourcing-ds.png";

function SuporteDeTI() {
  return (
    <div className="option">
      <div className="option-header">
        <div className="content-container">
          <div className="option-text">
            <h2>Suporte de TI</h2>
            <p>
              O suporte de TI especialista ajuda na solução de qualquer problema
              com eficiência. Temos em nosso portfólio, expertises estratégicas
              para produção em escritórios, indústrias e qualquer tipo de
              seguimento. Profissionais preparados para resolver e prevenir todo
              e qualquer problema de TI em sua empresa local ou home office.
            </p>
          </div>
          <img src={Outsourcing}></img>
        </div>
      </div>
      <div className="rename">
        <h4>
          Realizamos o suporte de ti para empresas de todos os tamanhos. Veja
          alguns dos problemas de TI que podem acontecer e estamos prontos para
          ajudar a solucionar.{" "}
        </h4>
        <div className="rename-box">
          <img src={Outsourcing}></img>
          <ul>
            <li>Solução para problemas em servidores de email</li>
            <li>Solução para problemas com servidores de dados</li>
            <li>Rede lenta</li>
            <li>Internet Caindo</li>
            <li>Computadores travando</li>
            <li>Compartilhamentos não funcionam</li>
            <li>Site Não inicia</li>
            <li>Computador com vírus</li>
            <li>Rede Wireless desprotegida</li>
            <li>Servidores desprotegidos</li>{" "}
          </ul>
        </div>
        <div className="rename-box">
          <div className="rename-description">
            <h4>Suporte de TI em nuvem </h4>
            <p>
              Suporte de ti especialista em soluções de problemas em rede cloud,
              backup em nuvem, servidor em nuvem e qualquer problema relacionado
              a esta expertise. Atendemos a cloud Públicas Aws e Google Cloud.
            </p>
          </div>
          <ul>
            <li>Solução para problemas em servidores de email</li>
            <li>Solução para problemas com servidores de dados</li>
            <li>Rede lenta</li>
            <li>Internet Caindo</li>
            <li>Computadores travando</li>
            <li>Compartilhamentos não funcionam</li>
            <li>Site Não inicia</li>
            <li>Computador com vírus</li>
            <li>Rede Wireless desprotegida</li>
            <li>Servidores desprotegidos</li>{" "}
          </ul>
        </div>
        <div className="rename-box">
          <div className="rename-description">
            <h4>Suporte de TI para servidores </h4>
            <p>
              Suporte de ti para atendimento especial em servidores, esteja em
              uma sala na sua empresa ou alocado em um datacenter. Realizamos
              todo tipo de solução para servidores, Dell, HP, IBM {" "}
            </p>
          </div>
          <ul>
            <li>Instalação e configuração de sistema Linux</li>
            <li>Configuração de rede</li>
            <li>Substituição de HD</li>
            <li>Configurações de acessos</li>
            <li>Diagnósticos de funcionamento</li>
            <li>Virtualização de servidores</li>
            <li>Backup</li>
            <li>Outros serviços de suporte técnico</li>
          </ul>
        </div>
        <div className="rename-box">
          <div className="rename-description">
            <h4>Suporte de TI para redes </h4>
            <p>
              Suporte de ti para solução de problemas em rede de computadores.
              Solucionamos problemas em cabeamento, rede wifi, switches,
              roteadores, configurações e problemas de segurança da informação. {" "}
            </p>
          </div>
          <ul>
            <li>Verificação da integridade do cabeamento</li>
            <li>Solução de lentidão</li>
            <li>Configuração de segurança em rede wireless</li>
            <li>Solução de problemas em roteadores e switches</li>
            <li>Configurações de segurança</li>
            <li>Soluções de backup em Rede</li>
            <li>Outros serviços de suporte técnico</li>
          </ul>
        </div>
        <div className="rename-box">
          <div className="rename-description">
            <h4>Suporte de TI em sistemas </h4>
            <p>
              Entender e desmitificar sistemas, soluções de ti para operação,
              controle e documentação de sistemas. Instalação, configuração e
              documentação de sistemas.{" "}
            </p>
          </div>
          <ul>
            <li>Verificação de vulnerabilidade</li>
            <li>Solução de bugs em sistemas</li>
            <li>Correção de falhas de segurança</li>
            <li>Instalação de sistemas operacionais</li>
            <li>Monitoramento de sistemas em nuvem</li>
            <li>
              Licenciamento de Windows, Office e outros sistemas da Microsoft
            </li>
            <li>Outros serviços de suporte técnico</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SuporteDeTI;
