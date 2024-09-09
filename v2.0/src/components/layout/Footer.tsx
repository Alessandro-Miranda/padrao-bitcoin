export function Footer() {
  return (
    <div className="footer" id="contato">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-logo">
              <img
                src="data:image/png;base64,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"
                alt="Footer"
              />
            </div>
            <div className="footer-item d-flex justify-content-between flex-wrap">
              <div className="footer-item-single">
                <h5>Políticas</h5>
                <ul>
                  <li>
                    <a href="/documents/politicaAntissubornoAnticorrupcao.pdf" target="_blank">
                      Política Anticorrupção e Antissuborno
                    </a>
                  </li>
                  <li>
                    <a href="/documents/dueDiligencePolicy.pdf" target="_blank">
                      Política de Due Diligence
                    </a>
                  </li>
                  <li>
                    <a target="_blank">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="/documents/acceptanceofTerms.pdf" target="_blank">
                      Termos de Uso
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-item-single">
                <h5>Prevenção</h5>
                <ul>
                  <li>
                    <a
                      href="/documents/politicaPrevencaoLavagemDinheiroFinanciamentoTerrorismo.pdf"
                      target="_blank"
                    >
                      Política de Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo
                    </a>
                  </li>
                  <h5>Privacidade</h5>
                  <ul>
                    <li>
                      <a href="/documents/documentoDiretrizesLgpd.pdf" target="_blank">
                        Diretrizes LGPD
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="footer-item-single">
                <h5>Ética</h5>
                <ul>
                  <li>
                    <a href="/documents/codigoEticaCondutaFornecedores.pdf" target="_blank">
                      Código de Ética e Conduta para Fornecedores
                    </a>
                  </li>
                </ul>
                <div className="more">
                  <h5>Segurança</h5>
                  <ul>
                    <li>
                      <a
                        href="/documents/politicaSegurancaInformacaoCibernetica.pdf"
                        target="_blank"
                      >
                        Política de Segurança da Informação e Cibernética (PSIC)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-item-single">
                <div className="more">
                  <h5>LGPD</h5>
                  <ul>
                    <li>
                      <a href="/documents/leiGeralProtecaoDadosPessoaisLgpd.pdf" target="_blank">
                        Lei Geral de Proteção de Dados Pessoais (LGPD)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <p>
                Toda comunicação através da rede mundial de computadores está sujeita a interrupções
                ou atrasos, podendo prejudicar ordens, negociações ou a recepção de informações
                atualizadas. O Ether Private Bank isenta-se de responsabilidade por danos sofridos
                por seus clientes devido a falhas nos serviços disponibilizados por terceiros,
                incluindo, sem limitação, aqueles conectados à rede mundial de computadores. Todos
                os elementos deste site, incluindo, mas não se limitando a suas marcas, sinais de
                propaganda, textos, fotos e outras imagens, são propriedade e objeto de direitos
                exclusivos de seus respectivos titulares e/ou licenciados. A reprodução destes
                elementos sem prévia autorização dos respectivos proprietários e/ou licenciados pode
                constituir ou vir a constituir violação de direitos de propriedade intelectual,
                sujeitando os infratores às penalidades cabíveis na legislação civil e penal. Caso
                tenha interesse em utilizar algum dos elementos contidos neste site, por favor,
                entre em contato com o Ether Private Bank.
              </p>
              <p>
                Ether PB LLC, com sede empresarial no seguinte endereço em Danbury: 235 Main St,
                Suite 103, Danbury, CT, 06810-6673, Estados Unidos. A filial nacional do Ether
                Private Bank, localizada na Rua Hum, número 60, CEP 32.113-500, Bairro/Distrito
                Arvoredo 2ª Seção, Município Contagem, UF MG, Brasil, está juridicamente registrada
                como ETHER PRIVATE BANK LTDA, CNPJ: 54.360.394/0001-18.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
