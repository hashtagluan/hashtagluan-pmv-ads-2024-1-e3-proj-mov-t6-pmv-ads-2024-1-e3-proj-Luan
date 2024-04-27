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

| Nº | Requisito relacionado     | Descrição do Requisito                                                  | Funcionalidade                            | Descrição do Teste                                                                 | Passos de Execução                                                                                   | Critério de Êxito                                                                                                                   |
|----|----------|-------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 1  | RF-001   | Autenticação de Usuários                                              | Verificar se o sistema autentica corretamente os usuários. | Inserir credenciais de usuário (e-mail/senha). O usuário é redirecionado para a página principal após autenticação bem-sucedida. | Garantir que apenas usuários autenticados tenham acesso à plataforma. |
| 2  | RF-001   | Autenticação de Usuários                                              | Verificar se o sistema retorna mensagem de erro ao inserir credenciais inválidas. | Inserir credenciais de usuário inválidas (e-mail e/ou senha incorretos). O sistema exibe uma mensagem de erro apropriada para credenciais inválidas. | Assegurar que apenas usuários com credenciais válidas possam acessar a plataforma. |
| 3  | RF-002   | Gerenciamento de Vagas                                                | Testar as operações de cadastro, edição e visualização | Cadastrar uma nova vaga. 2. Editar uma vaga existente. 3. Visualizar detalhes de uma vaga. Todas as operações são executadas sem erros e as informações são atualizadas corretamente. | Assegurar que as funcionalidades relacionadas ao gerenciamento de vagas estejam operacionais. |
| 4  | RF-002   | Gerenciamento de Vagas                                                | Testar se o sistema permite a exclusão de uma vaga existente. | Acessar uma vaga previamente cadastrada. O sistema permite a exclusão da vaga e remove-a corretamente da plataforma. | Assegurar que as vagas possam ser removidas da plataforma conforme necessário. |
| 5  | RF-003   | Pesquisa de Vagas                                                     | Verificar se os usuários podem pesquisar vagas com base em critérios específicos. | Utilizar os filtros de pesquisa para buscar vagas. As vagas correspondentes aos critérios de pesquisa são exibidas corretamente. | Garantir que os usuários possam encontrar vagas relevantes de acordo com seus interesses. |
| 6  | RF-003   | Pesquisa de Vagas                                                     | Verificar se os usuários recebem uma mensagem de aviso quando a pesquisa não retorna resultados. | Realizar uma pesquisa que não corresponda a nenhuma vaga disponível. O sistema exibe uma mensagem informando que não foram encontrados resultados. | Assegurar que os usuários sejam informados caso não haja vagas correspondentes à sua pesquisa. |
| 7  | RF-004   | Candidatura a uma vaga                                                | Testar o cadastro pelos candidatos para as vagas de interesse. | Encontrar uma vaga de interesse. 2. Cadastrar para a vaga. O cadastro do candidato é enviado com sucesso para a vaga selecionada. | Assegurar que os candidatos possam se candidatar às vagas de forma eficiente. |
| 8  | RF-005   | Notificações por Email                                                | Verificar se os usuários recebem notificações por e-mail conforme suas preferências e atividades na plataforma. | Ativar e configurar as notificações por e-mail. 2. Realizar ações na plataforma que ativam notificações. As notificações por e-mail são recebidas de acordo com as atividades e preferências do usuário. | Garantir que os usuários sejam informados sobre atividades relevantes na plataforma. |
| 9  | RF-006   | Acesso a Currículos dos candidatos                                   | Testar se os recrutadores têm acesso aos currículos dos candidatos que se candidataram às vagas. | Acessar a lista de candidatos para uma vaga específica. 2. Visualizar o currículo de um candidato. Os recrutadores conseguem visualizar os currículos dos candidatos associados à vaga. | Assegurar que os recrutadores possam avaliar os currículos dos candidatos facilmente. |

