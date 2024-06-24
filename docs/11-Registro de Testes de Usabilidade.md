# Registro de Testes de Usabilidade


Os testes de usabilidade têm como objetivo garantir que a interface do usuário e as funcionalidades do aplicativo **Venda Fácil** sejam intuitivas, fáceis de usar e atendam aos requisitos do usuário. Abaixo estão os casos de teste de usabilidade baseados nos requisitos funcionais do sistema.

| Nº | Requisito Relacionado | Descrição do Requisito                         | Funcionalidade             | Descrição do Teste                                                       | Passos de Execução                                                                                 | Critério de Êxito                                                                                 |
|----|-----------------------|------------------------------------------------|----------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| 1  | RF1                   | Permitir o cadastro de novos usuários.          | Cadastro de Usuários       | Verificar se o sistema permite o cadastro de novos usuários.             | 1. Acesse a página de cadastro.<br>2. Preencha todos os campos obrigatórios.<br>3. Clique em "Cadastrar". | O sistema deve cadastrar o novo usuário e redirecionar para a página de login.                    |
| 2  | RF2                   | Permitir que os usuários realizem login.        | Login de Usuários          | Verificar se o sistema permite que os usuários façam login com suas credenciais. | 1. Acesse a página de login.<br>2. Insira o nome de usuário e senha corretos.<br>3. Clique em "Entrar".        | O sistema deve autenticar o usuário e redirecionar para a página inicial.                         |
| 3  | RF7                   | Calcular o valor total gasto em taxas.          | Cálculo de Taxas           | Verificar se o sistema calcula corretamente o valor total gasto em taxas. | 1. Realize algumas simulações de transações.<br>2. Acesse a página de visualização de taxas.<br>3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto das taxas das transações realizadas. |
| 4  | RF8                   | Calcular o valor total gasto em juros.          | Cálculo de Juros           | Verificar se o sistema calcula corretamente o valor total gasto em juros. | 1. Realize algumas simulações de transações que envolvam juros.<br>2. Acesse a página de visualização de juros.<br>3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto dos juros das transações realizadas. |
| 5  | RF13                  | Garantir a segurança dos dados dos usuários.    | Segurança dos Dados        | Verificar se o sistema protege adequadamente os dados dos usuários.      | 1. Faça login com um usuário válido.<br>2. Tente acessar informações restritas de outro usuário.   | O sistema não deve permitir o acesso não autorizado a informações de outros usuários.             |
| 6  | RF3                   | Exibir o valor líquido da venda.                | Simulação de Venda         | Verificar se o sistema exibe o valor líquido da venda após aplicação das taxas. | 1. Acesse a tela de simulação de venda.<br>2. Insira o valor da venda e selecione o tipo de pagamento.<br>3. Clique em "Simular Venda". | O sistema deve exibir o valor líquido da venda descontadas as taxas aplicáveis.                   |
| 7  | RF4                   | Exibir o valor total em % descontado.           | Simulação de Venda         | Verificar se o sistema exibe o valor total em % descontado na simulação de venda. | 1. Acesse a tela de simulação de venda.<br>2. Insira o valor da venda e selecione o tipo de pagamento.<br>3. Clique em "Simular Venda". | O sistema deve exibir o valor total em % descontado conforme a simulação de venda.                |

### Cenários de Teste de Usabilidade

1.  **Simulação de Venda**
   - **Funcionalidades Avaliadas**: Cálculo de valor líquido e % descontado em simulações de venda.
   - **Descrição do Teste**: Avaliar a facilidade de uso e a clareza na apresentação dos resultados da simulação de venda.
   - **Passos de Execução**:
     1. Acessar a tela de simulação de venda.
     2. Inserir o valor da venda e selecionar o tipo de pagamento.
     3. Clicar em "Simular Venda".
   - **Critério de Êxito**: O sistema deve exibir o valor líquido e o valor total em % descontado de forma clara e precisa.

4. **Consulta de Taxas**
   - **Funcionalidades Avaliadas**: Cálculo de taxas.
   - **Descrição do Teste**: Verificar se a visualização de taxas é clara e compreensível.
   - **Passos de Execução**:
     1. Realizar algumas simulações de transações.
     2. Acessar a página de visualização de taxas.
     3. Verificar se o valor total exibido corresponde ao esperado.
   - **Critério de Êxito**: O valor total exibido deve corresponder ao somatório correto das taxas das transações realizadas.

5. **Consulta de Juros**
   - **Funcionalidades Avaliadas**: Cálculo de juros.
   - **Descrição do Teste**: Avaliar se a apresentação dos juros é clara e precisa.
   - **Passos de Execução**:
     1. Realizar algumas simulações de transações que envolvam juros.
     2. Acessar a página de visualização de juros.
     3. Verificar se o valor total exibido corresponde ao esperado.
   - **Critério de Êxito**: O valor total exibido deve corresponder ao somatório correto dos juros das transações realizadas.


### Ferramentas Utilizadas

- **Testes Manuais**: Para navegar e interagir com a interface do aplicativo **Venda Fácil**.
- **Testes de Usabilidade**: Ferramentas como Hotjar para gravação de sessões e análise do comportamento do usuário.
- **Feedback de Usuário**: Coleta de feedback através de questionários para avaliar a satisfação e usabilidade.
- **Relatórios de Teste**: Documentação detalhada dos resultados dos testes de usabilidade, incluindo observações sobre a facilidade de uso e possíveis áreas de melhoria.

### Observações Finais

O foco dos testes de usabilidade é garantir que o **Venda Fácil** seja fácil de usar, intuitivo e que atenda às expectativas dos usuários. A interface deve ser clara, e todas as funcionalidades devem estar acessíveis de forma eficiente e compreensível.
