# Registro de Testes de Software

O registro de teste de software é crucial para verificar que cada funcionalidade do sistema funciona conforme especificado. Para o **Venda Fácil**, foi elaborado um conjunto de cenários de teste com base nos requisitos funcionais. Abaixo está a tabela detalhada dos registros de teste, cada um vinculado a um requisito funcional específico.

| Nº | Requisito Relacionado | Descrição do Requisito                         | Funcionalidade             | Descrição do Teste                                                       | Passos de Execução                                                                                 | Critério de Êxito                                                                                 |
|----|-----------------------|------------------------------------------------|----------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| 1  | RF1                   | Permitir o cadastro de novos usuários.          | Cadastro de Usuários       | Verificar se o sistema permite o cadastro de novos usuários.             | 1. Acesse a página de cadastro.<br>2. Preencha todos os campos obrigatórios.<br>3. Clique em "Cadastrar". | O sistema deve cadastrar o novo usuário e redirecionar para a página de login.                    |
| 2  | RF2                   | Permitir que os usuários realizem login.        | Login de Usuários          | Verificar se o sistema permite que os usuários façam login com suas credenciais. | 1. Acesse a página de login.<br>2. Insira o e-mail e senha corretos.<br>3. Clique em "Entrar".        | O sistema deve autenticar o usuário e redirecionar para a página inicial.                         |
| 3  | RF7                   | Calcular o valor total gasto em taxas.          | Cálculo de Taxas           | Verificar se o sistema calcula corretamente o valor total gasto em taxas. | 1. Realize algumas simulações de transações.<br>2. Acesse a página de visualização de taxas.<br>3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto das taxas das transações realizadas. |
| 4  | RF8                   | Calcular o valor total gasto em juros.          | Cálculo de Juros           | Verificar se o sistema calcula corretamente o valor total gasto em juros. | 1. Realize algumas simulações de transações que envolvam juros.<br>2. Acesse a página de visualização de juros.<br>3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto dos juros das transações realizadas. |
| 5  | RF13                  | Garantir a segurança dos dados dos usuários.    | Segurança dos Dados        | Verificar se o sistema protege adequadamente os dados dos usuários.      | 1. Faça login com um usuário válido.<br>2. Tente acessar informações restritas de outro usuário.   | O sistema não deve permitir o acesso não autorizado a informações de outros usuários.             |
| 6  | RF3                   | Exibir o valor líquido da venda.                | Simulação de Venda         | Verificar se o sistema exibe o valor líquido da venda após aplicação das taxas. | 1. Acesse a tela de simulação de venda.<br>2. Insira o valor da venda e selecione o tipo de pagamento.<br>3. Clique em "Simular Venda". | O sistema deve exibir o valor líquido da venda descontadas as taxas aplicáveis.                   |
| 7  | RF4                   | Exibir o valor total em % descontado.           | Simulação de Venda         | Verificar se o sistema exibe o valor total em % descontado na simulação de venda. | 1. Acesse a tela de simulação de venda.<br>2. Insira o valor da venda e selecione o tipo de pagamento.<br>3. Clique em "Simular Venda". | O sistema deve exibir o valor total em % descontado conforme a simulação de venda.                |

### Cenários de Teste Selecionados

Para testar a aplicação **Venda Fácil**, foram selecionados os seguintes cenários de teste:

1. **Cadastro de Novo Usuário**:
   - **Funcionalidades Avaliadas**: Cadastro de usuários.
   - **Grupo de Usuários**: Novos usuários que tentam se registrar na plataforma.
   - **Ferramentas Utilizadas**: Teste manual através da interface do aplicativo, Postman para validação das APIs de cadastro.

2. **Login de Usuário Existente**:
   - **Funcionalidades Avaliadas**: Login de usuários.
   - **Grupo de Usuários**: Usuários registrados tentando acessar suas contas.
   - **Ferramentas Utilizadas**: Teste manual através da interface do aplicativo, Postman para validação das APIs de login.

3. **Simulação de Venda**:
   - **Funcionalidades Avaliadas**: Cálculo de valor líquido e taxas em simulações de venda.
   - **Grupo de Usuários**: Usuários que simulam vendas para verificar o valor líquido após deduções de taxas.
   - **Ferramentas Utilizadas**: Teste manual através da interface do aplicativo, testes automatizados com Jest para validação do cálculo de simulação.

4. **Consulta de Histórico de Vendas**:
   - **Funcionalidades Avaliadas**: Visualização do histórico de vendas.
   - **Grupo de Usuários**: Usuários que acessam o histórico de suas transações para visualizar detalhes.
   - **Ferramentas Utilizadas**: Teste manual através da interface do aplicativo, inspeção do banco de dados para verificar a integridade dos dados exibidos.

5. **Segurança dos Dados do Usuário**:
   - **Funcionalidades Avaliadas**: Proteção de dados e controle de acesso.
   - **Grupo de Usuários**: Todos os usuários da plataforma.
   - **Ferramentas Utilizadas**: Ferramentas de teste de segurança como OWASP ZAP para verificação de vulnerabilidades.

### Instruções para Testes

- **Teste Manual**: Utilize a interface do aplicativo **Venda Fácil** para navegar através das funcionalidades e realizar as ações descritas nos cenários de teste.
- **Teste de API**: Utilize ferramentas como Postman para enviar requisições HTTP às APIs e verificar as respostas.
- **Teste Automatizado**: Utilize ferramentas de teste automatizado como Jest para executar testes em partes críticas do código, garantindo que os cálculos e lógicas de negócios funcionem corretamente.
- **Teste de Segurança**: Utilize ferramentas de análise de segurança para verificar possíveis vulnerabilidades no sistema, garantindo a proteção dos dados dos usuários.

### Resultados Esperados

Para cada teste, o sistema deve comportar-se conforme especificado nos critérios de êxito. O sucesso no teste indica que a funcionalidade está implementada corretamente e pronta para ser utilizada pelos usuários finais.

### Ferramentas Utilizadas

- **React Native**: Para o desenvolvimento da interface do usuário.
- **Node.js + Express**: Para o desenvolvimento do back-end e das APIs.
- **PostgreSQL**: Para o armazenamento e gerenciamento de dados.
- **Postman**: Para testes de API.
- **Jest**: Para testes automatizados.
- **OWASP ZAP**: Para testes de segurança.

### Acompanhamento e Relatório de Testes

Os resultados dos testes serão documentados em um relatório que incluirá:
- Descrição do teste.
- Resultados observados.
- Conformidade com os critérios de êxito.
- Eventuais problemas encontrados e suas soluções.
