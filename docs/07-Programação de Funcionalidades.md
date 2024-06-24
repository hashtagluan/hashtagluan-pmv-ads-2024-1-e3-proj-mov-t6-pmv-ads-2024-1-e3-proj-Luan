# Programação de Funcionalidades

rogramação de Funcionalidades
A implementação do Venda Fácil é organizada para atender aos requisitos funcionais e não funcionais definidos durante a fase de planejamento. Cada funcionalidade está associada a um requisito específico e é detalhada em termos de código-fonte, estrutura de dados e instruções para acesso e verificação no ambiente de hospedagem.

Abaixo, descrevemos a implementação de cada funcionalidade com base nos requisitos funcionais, incluindo o código-fonte relacionado, a estrutura de dados utilizada, e as instruções para testar e verificar sua implementação.

1. Registro de Usuário
ID: RF01
Descrição do Requisito: O sistema deve permitir que novos usuários se registrem fornecendo nome, e-mail, senha e telefone.
Prioridade: Alta


Instruções para Acesso e Verificação:

Acesse o aplicativo Venda Fácil em seu dispositivo móvel.
Navegue até a tela de registro de usuário.
Insira um nome, e-mail, senha e telefone nos campos apropriados.
Clique no botão "Registrar".
Verifique se a mensagem de sucesso é exibida e confirme que o novo usuário foi adicionado ao banco de dados consultando a tabela Usuario no PostgreSQL.

2. Login de Usuário
ID: RF02
Descrição do Requisito: O sistema deve permitir que usuários existentes façam login fornecendo e-mail e senha.
Prioridade: Alta

Artefatos Criados:

Código Fonte:

Front-End (React Native)

Instruções para Acesso e Verificação:

Acesse o aplicativo Venda Fácil.
Navegue até a tela de login.
Insira o e-mail e a senha de um usuário registrado.
Clique no botão "Login".
Verifique se a mensagem de sucesso é exibida e que o usuário é redirecionado para a tela principal do aplicativo.

3. Simulação de Venda
ID: RF07
Descrição do Requisito: O sistema deve permitir que os usuários simulem uma venda informando o valor, o tipo de pagamento (crédito ou débito) e exibir o valor líquido após as taxas.
Prioridade: Alta

Artefatos Criados:

Código Fonte:

Front-End (React Native)

Instruções para Acesso e Verificação:

Acesse o aplicativo Venda Fácil.
Navegue até a tela de simulação de venda.
Insira o valor da venda e selecione o tipo de pagamento.
Clique no botão "Simular Venda".
Verifique se o valor líquido após as taxas é exibido corretamente na tela.


