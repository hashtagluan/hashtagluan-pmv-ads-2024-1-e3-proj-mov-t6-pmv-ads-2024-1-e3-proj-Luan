# Plano de Testes de Software



Este plano de teste de funcionalidade garantirá que todas as características e funcionalidades da plataforma sejam testadas de forma abrangente, garantindo uma experiência de usuário suave e livre de problemas.

Este plano de teste tem como objetivo verificar a funcionalidade da plataforma de recrutamento na área de desenvolvimento de software em relação às suas características e funcionalidades principais.

‌

Objetivos do Teste

· Verificar se todas as funcionalidades da plataforma estão operando conforme esperado.

· Identificar e corrigir quaisquer falhas ou bugs presentes na plataforma.

· Assegurar que a plataforma atenda às especificações e requisitos definidos no escopo do projeto.

‌

Os requisitos para realização dos testes são:

- Um celular ou Tablet com o sistema Android ou IOS

- Conectividade de internet para acesso ao aplicativo

‌

| Nº  | Requisito relacionado | Descrição do Requisito | Funcionalidade | Descrição do Teste | Passos de Execução | Critério de Êxito |
|-----|-----------------------|-------------------------|-----------------|---------------------|---------------------|-------------------|
| 1   | RF1                   | Permitir o cadastro de novos usuários. | Cadastro de Usuários | Verificar se o sistema permite o cadastro de novos usuários. | 1. Acesse a página de cadastro. 2. Preencha todos os campos obrigatórios. 3. Clique no botão "Cadastrar". | O sistema deve cadastrar o novo usuário e redirecionar para a página de login. |
| 2   | RF2                   | Permitir que os usuários realizem login. | Login de Usuários | Verificar se o sistema permite que os usuários façam login com suas credenciais. | 1. Acesse a página de login. 2. Insira o nome de usuário e senha corretos. 3. Clique no botão "Entrar". | O sistema deve autenticar o usuário e redirecionar para a página inicial. |
| 3   | RF7                   | Calcular o valor total gasto em taxas. | Cálculo de Taxas | Verificar se o sistema calcula corretamente o valor total gasto em taxas. | 1. Realize algumas transações. 2. Acesse a página de visualização de taxas. 3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto das taxas das transações realizadas. |
| 4   | RF8                   | Calcular o valor total gasto em juros. | Cálculo de Juros | Verificar se o sistema calcula corretamente o valor total gasto em juros. | 1. Realize algumas transações que envolvam juros. 2. Acesse a página de visualização de juros. 3. Verifique se o valor total exibido corresponde ao esperado. | O valor total exibido deve corresponder ao somatório correto dos juros das transações realizadas. |
| 5   | RF13                  | Garantir a segurança dos dados dos usuários. | Segurança dos Dados | Verificar se o sistema protege adequadamente os dados dos usuários. | 1. Faça login com um usuário válido. 2. Tente acessar informações restritas de outro usuário. | O sistema não deve permitir o acesso não autorizado a informações de outros usuários. |

