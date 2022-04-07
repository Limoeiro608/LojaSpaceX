import { Container } from "reactstrap"

export const WhoWeAre = () => {

    return (
        <Container>
            <div className="WhoWeAre">
                <h1>Quem somos?</h1>
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
                        <ul>
                            <li><b>Pioneirismo: </b>sua marca no primeiro ecossistema de programas de fidelidade do varejo brasileiro</li>
                            <li><b>Novos clientes: </b>cada cliente cadastrado na Stix é um novo cliente para todos os parceiros</li>
                            <li><b>Autonomia: </b>cada marca mantém seu programa de relacionamento, que se fortalece ao se integrar às demais marcas por meio do ponto stix</li>
                        </ul>
                    </article>
                    <div>
                        <h5>Mais informações</h5>
                        <p>Se você é nosso cliente, entre em contato conosco <a href="#">aqui.</a></p>
                        <p >Para assuntos de imprensa, fale com </p><address>contato@spacex.com.br.</address>
                    </div>
                </section>
                <section>
                    <table>
                        <tbody>
                            <tr>
                                <td>Finalidade</td>
                                <td>Tipo de Dados Coletados</td>
                                <td>Base Legal</td>
                            </tr>
                            <tr>
                                <td><b>Cadastro:</b> Permitir que o Cliente Participante acesse a Plataforma, crie uma conta e adira ao Termos, Política e Regulamento da Droga Raia.</td>
                                <td>CPF, nome completo, data de nascimento, e-mail e telefone celular, CEP e senha de acesso.</td>
                                <td >Legítimo Interesse ou Execução de Contrato</td>
                            </tr>
                            <tr>
                                <td>Permitir que o Cliente Participante acumule e resgate pontos a partir de suas compras</td>
                                <td><b>Dados sobre acúmulo:</b> valor total da nota fiscal, itens de aceleradores, data da emissão da nota fiscal, hora e CPF</td>
                                <td>Execução de Contrato e Legítimo Interesse</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </Container>
    )
}