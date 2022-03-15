import { Container } from "reactstrap"

export const WhoWeAre = () => {

    return (
        <Container>
            <div className='WhoWeAre'>
                <h1 className="WhoWeAre-title">Quem somos?</h1>
                <section>
                    <article>
                        <p>
                            Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                        </p>
                    </article>
                    <article>
                        <ul className="WhoWeAre-containerList">
                            <li className="WhoWeAre-list__item"><b>Pioneirismo: </b>sua marca no primeiro ecossistema de programas de fidelidade do varejo brasileiro</li>
                            <li className="WhoWeAre-list__item"><b>Novos clientes: </b>cada cliente cadastrado na Stix é um novo cliente para todos os parceiros</li>
                            <li className="WhoWeAre-list__item"><b>Autonomia: </b>cada marca mantém seu programa de relacionamento, que se fortalece ao se integrar às demais marcas por meio do ponto stix</li>
                        </ul>
                    </article>
                    <div className="WhoWeAre-moreInformation">
                        <h5>Mais informações</h5>
                        <p className="WhoWeAre-moreInformation__paragraph">Se você é nosso cliente, entre em contato conosco <a className="WhoWeAre-moreInformation__contact" href="#">aqui.</a></p>
                        <p className="WhoWeAre-moreInformation__paragraph">Para assuntos de imprensa, fale com </p><address className="WhoWeAre-moreInformation__contact">contato@spacex.com.br.</address>
                    </div>
                </section>
                <section>
                    <table className="WhoWeAre-table">
                        <tbody>
                            <tr className="WhoWeAre-table__line">
                                <td className="WhoWeAre-table__column">Finalidade</td>
                                <td className="WhoWeAre-table__column">Tipo de Dados Coletados</td>
                                <td className="WhoWeAre-table__column">Base Legal</td>
                            </tr>
                            <tr className="WhoWeAre-table__line">
                                <td className="WhoWeAre-table__column"><b>Cadastro:</b> Permitir que o Cliente Participante acesse a Plataforma, crie uma conta e adira ao Termos, Política e Regulamento da Droga Raia.</td>
                                <td className="WhoWeAre-table__column">CPF, nome completo, data de nascimento, e-mail e telefone celular, CEP e senha de acesso.</td>
                                <td className="WhoWeAre-table__column">Legítimo Interesse ou Execução de Contrato</td>
                            </tr>
                            <tr className="WhoWeAre-table__line">
                                <td className="WhoWeAre-table__column">Permitir que o Cliente Participante acumule e resgate pontos a partir de suas compras</td>
                                <td className="WhoWeAre-table__column"><b>Dados sobre acúmulo:</b> valor total da nota fiscal, itens de aceleradores, data da emissão da nota fiscal, hora e CPF</td>
                                <td className="WhoWeAre-table__column">Execução de Contrato e Legítimo Interesse</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </Container>
    )
}