# Especificações do Projeto

A aplicação será utilizada em um contexto onde os estabelecimentos comerciais dependem fortemente das transações realizadas por meio de máquinas de cartão de crédito para processar pagamentos de seus clientes. Esses estabelecimentos operam em um mercado dinâmico e competitivo, onde a eficiência na gestão financeira pode fazer a diferença entre o sucesso e o fracasso do negócio.

As tecnologias envolvidas incluem as máquinas de cartão SIPAG do Sicoob, uma das opções populares no mercado de adquirência, bem como sistemas de processamento de transações e softwares de gestão financeira. O contexto exige uma solução que simplifique o cálculo e compreensão das taxas e tarifas associadas às transações de cartão, proporcionando maior transparência e controle aos proprietários de negócios.


## Personas

Ter claramente as personas devidamente identificadas torna possível entender suas necessidades e adaptar a aplicação de forma a garantir que as situações colocadas pelas pessoas envolvidas sejam devidamente atendidas. Para isso, é crucial entender o contexto em que os usuários estarão inseridos ao utilizar o Recrutadev.

Com base nesse contexto, as personas serão desenvolvidas considerando aspectos como idade, profissão, formação acadêmica, área de atuação, perfil, necessidades e se estão contratando ou buscando oportunidades de emprego


| Foto | Nome   | Idade | Profissão                   | Graduação     | Área de Atuação       | Perfil                                                                                                                              | Necessidade                                                                                                                                   |
|------|--------|-------|-----------------------------|---------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|      | Ana    | 35    | Proprietária de Restaurante | Administração | Alimentação e Gastronomia | Ana é uma empreendedora apaixonada pela culinária e proprietária de um restaurante familiar. Ela possui conhecimentos básicos em finanças, mas busca soluções que facilitem o controle das vendas do estabelecimento. | Ana precisa de uma ferramenta que simplifique o cálculo das taxas de transação de cartão para garantir uma gestão financeira eficaz em seu restaurante. |
|      | Carlos | 45    | Consultor Financeiro        | Economia      | Consultoria Financeira | Carlos é um consultor financeiro experiente, com ampla experiência em análise de dados e gestão financeira. Ele busca soluções tecnológicas inovadoras para oferecer um serviço de consultoria de qualidade aos seus clientes.             | Carlos necessita de uma ferramenta que o auxilie no cálculo preciso das taxas de transação de cartão, a fim de fornecer análises financeiras precisas e recomendações estratégicas. |
|      | Marina | 28    | Gerente de Loja             | Administração | Varejo                  | Marina é uma profissional dedicada e proativa que gerencia uma loja de roupas. Ela busca soluções que otimizem as operações financeiras da loja e forneçam insights valiosos para o crescimento do negócio.                                    | Marina está em busca de uma ferramenta que simplifique o acompanhamento das vendas realizadas por cartão, permitindo uma melhor análise de desempenho e tomada de decisões estratégicas. |
|      | José   | 40    | Contador                    | Contabilidade | Serviços Financeiros   | José é um contador experiente que presta serviços para pequenas e médias empresas. Ele está sempre em busca de ferramentas que facilitem o seu trabalho e garantam a precisão dos cálculos financeiros.                                 | José precisa de uma ferramenta que automatize o cálculo das taxas de transação de cartão, permitindo uma conciliação bancária mais eficiente e uma prestação de serviços contábeis de alta qualidade. |
|      | Maria  | 22    | Estudante                   | Administração | Educação               | Maria é uma estudante de administração em busca de estágio. Ela deseja aprender mais sobre gestão financeira e busca ferramentas educativas que a auxiliem a compreender melhor o mercado de adquirência.                                | Maria necessita de uma ferramenta de simulação de vendas que a ajude a compreender o funcionamento do mercado de adquirência e a aprimorar seus conhecimentos em gestão financeira.           |
|      | João   | 55    | Empresário                  | Administração | Varejo                  | João é um empresário bem-sucedido no ramo do varejo, com múltiplas lojas em diferentes localidades. Ele está sempre em busca de ferramentas inovadoras que otimizem a gestão financeira de seus negócios.                                | João está interessado em uma ferramenta que simplifique o cálculo das taxas de transação de cartão em suas lojas, proporcionando uma visão abrangente e detalhada das operações financeiras de seus negócios.    |


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO...                     | PERSONA                          | QUERO/PRECISO ...                | FUNCIONALIDADE         | PARA ...                                                                                          | MOTIVO/VALOR                                                                                                   |
|-------------------------------|----------------------------------|----------------------------------|------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Ana, Proprietária de Restaurante | Proprietária de Restaurante     | Verificar as taxas cobradas nas vendas de cartão | Visualizar um resumo das taxas por tipo de transação | Garantir uma gestão financeira eficiente e entender o impacto das taxas nas vendas do restaurante | Acesso rápido e claro às informações essenciais sobre as taxas de transação para tomar decisões informadas. |
| Carlos, Consultor Financeiro   | Consultor Financeiro             | Calcular o impacto das taxas de transação nas receitas de meus clientes | Ter acesso a um relatório detalhado com o total das taxas pagas em transações de cartão | Fornecer análises financeiras precisas e recomendações estratégicas aos clientes | Obter insights valiosos para tomar decisões financeiras e orientar os clientes de forma eficaz.               |
| Maria, Estudante de Administração | Estudante de Administração      | Aprender sobre as taxas e tarifas associadas às transações de cartão | Utilizar um simulador de vendas para compreender o funcionamento do mercado de adquirência | Compreender melhor o mercado financeiro e adquirir conhecimentos relevantes para sua formação profissional | Aprendizado prático e contextualizado sobre as taxas de transação, preparando-se para futuros desafios profissionais. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, muitos estabelecimentos comerciais que operam com máquinas de cartão de crédito enfrentam desafios significativos em compreender e calcular as taxas e tarifas associadas às transações de cartão. Esses problemas são exacerbados pela falta de clareza e transparência por parte das empresas de adquirência, bem como pela complexidade dos cálculos envolvidos.

Modelo do Sistema Atual:

O modelo do sistema atual envolve um processo manual e muitas vezes confuso para calcular as taxas de transação de cartão. Geralmente, os proprietários de estabelecimentos comerciais precisam consultar contratos com empresas de adquirência, extratos bancários e outras fontes de informação para determinar as taxas aplicáveis a cada transação. Em seguida, eles realizam cálculos manuais para estimar os custos totais das transações de cartão em um determinado período.

### Descrição Geral da Proposta

A proposta é oferecer uma solução inovadora e intuitiva para simplificar o processo de compreensão e cálculo das taxas e tarifas associadas às transações de cartão de crédito para estabelecimentos comerciais. Através de uma interface amigável e funcionalidades poderosas, o software visa atender às necessidades dos proprietários de negócios que buscam uma gestão financeira mais eficaz e transparente.


### Processo 1 – Gestão de Transações de Cartão

**Nome do Processo:** Gestão de Transações de Cartão

**Oportunidades de Melhorias:**
1. Automação do cálculo de taxas e tarifas: Implementar um sistema automatizado para calcular as taxas e tarifas associadas às transações de cartão, reduzindo erros manuais e agilizando o processo.
2. Integração com sistemas de contabilidade: Integrar o processo de gestão de transações de cartão com sistemas de contabilidade existentes para uma visão integrada das finanças do negócio.
3. Visualização de dados em tempo real: Oferecer uma interface de usuário que permita aos usuários visualizar dados de transações em tempo real, facilitando a análise e tomada de decisões.

**Modelo do Processo 1 (BPMN):**


![image](https://github.com/hashtagluan/hashtagluan-pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-Luan/assets/128554958/2d108140-81f4-44f0-bbd0-bba121ecfe59)




### Processo 2 – Análise de Desempenho de Vendas

**Nome do Processo:** Análise de Desempenho de Vendas

**Oportunidades de Melhorias:**
1. Padronização de métricas: Estabelecer métricas padronizadas para avaliar o desempenho de vendas, facilitando a comparação entre períodos e unidades de negócio.
2. Visualização de dados dinâmica: Desenvolver uma ferramenta de visualização de dados dinâmica que permita aos gestores explorar e analisar os dados de vendas de forma interativa.
3. Identificação de tendências: Implementar algoritmos de análise de dados para identificar tendências de vendas e padrões de comportamento do consumidor, fornecendo insights valiosos para estratégias de marketing e operações.

**Modelo do Processo 2 (BPMN):**

![image](https://github.com/hashtagluan/hashtagluan-pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-Luan/assets/128554958/84817034-6813-4673-99ef-0ab9dcf140a7)


## Indicadores de Desempenho

Principais indicadores de desempenho e algumas metas para o processo

| Indicador                              | Objetivos                                                         | Descrição                                                                              | Cálculo                                                                               | Fonte de Dados            | Perspectiva     |
|----------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------|-----------------|
| Índice de Satisfação                   | Melhorar a experiência do cliente                                | Avalia o grau de satisfação dos clientes                                               | (Número de avaliações positivas / Número total de avaliações) * 100                    | Sistema de Avaliação     | Cliente         |
| Disponibilidade do Sistema             | Garantir a disponibilidade contínua do sistema                   | Mede o tempo em que o sistema está disponível para uso                               | (Tempo de disponibilidade / Tempo total) * 100                                         | Monitoramento do Sistema | Operacional     |
| Tempo de Resposta dos Cálculos         | Melhorar a eficiência do processamento de dados                  | Avalia o tempo médio necessário para realizar os cálculos de taxas e tarifas           | Soma do tempo de cálculo de todas as transações / Número total de transações           | Sistema de Processamento  | Operacional     |
| Valor Total Gasto em Taxas             | Otimizar os custos operacionais                                   | Mede o montante total gasto em taxas de transação de cartão                           | Soma de todas as taxas de transação                                                     | Sistema de Registro      | Financeira      |
| Valor Total Gasto em Juros             | Minimizar os custos financeiros                                   | Mede o montante total gasto em juros devido a financiamentos ou empréstimos            | Soma de todos os juros cobrados                                                         | Sistema de Registro      | Financeira      |
| Quantidade de Vendas                   | Avaliar o desempenho das vendas                                   | Mede o número total de vendas realizadas                                                | Contagem de transações                                                                  | Sistema de Registro      | Comercial       |
| Ticket Médio das Vendas                | Avaliar o valor médio das transações                             | Mede o valor médio das vendas realizadas                                                | Soma dos valores de todas as vendas / Número total de vendas                            | Sistema de Registro      | Comercial       |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.
### Requisitos Funcionais

| ID  | Descrição do Requisito                                              | Prioridade |
|-----|----------------------------------------------------------------------|------------|
| RF1 | O sistema deve permitir o cadastro de novos usuários                | Alta       |
| RF2 | O sistema deve permitir que os usuários realizem login              | Alta       |
| RF3 | O sistema deve calcular o valor total gasto em taxas                | Alta       |
| RF4 | O sistema deve calcular o valor total gasto em juros                | Alta       |
| RF5 | O sistema deve garantir a segurança dos dados dos usuários          | Alta       |
| RF6 | O sistema deverá exibir o valor total descontado em porcentagem     | Média      |
| RF7 | O sistema deverá exibir o valor líquido da venda após os descontos  | Média      |





### Requisitos não Funcionais


| ID   | Descrição do Requisito                                                  | Prioridade |
|------|--------------------------------------------------------------------------|------------|
| RNF1 | Segurança: O sistema deve garantir a segurança dos dados dos usuários   | Alta       |
| RNF2 | Usabilidade: O sistema deve ser intuitivo e de fácil utilização         | Alta       |
| RNF3 | Desempenho: O sistema deve ter tempos de resposta rápidos               | Média      |
| RNF4 | Confiabilidade: O sistema deve ser confiável, sem falhas frequentes     | Alta       |
| RNF5 | Escalabilidade: O sistema deve ser capaz de lidar com um grande volume de transações | Média |
| RNF6 | Portabilidade: O sistema deve ser acessível em diferentes dispositivos e navegadores | Média |
| RNF7 | Manutenibilidade: O sistema deve ser facilmente atualizável e modificável | Média     |
| RNF8 | Documentação: Deve haver uma documentação completa e atualizada do sistema | Baixa   |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| A aplicação deve ser desenvolvida utilizando tecnologias específicas já aprovadas pela equipe de desenvolvimento.        |
|0| A aplicação deve estar em conformidade com todas as leis regualmentadas vigentes        |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura apresentada a seguir.

![image](https://github.com/hashtagluan/hashtagluan-pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-Luan/assets/128554958/f2e9468f-a34f-477e-9785-3a88e0501bce)




# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![image](https://github.com/hashtagluan/hashtagluan-pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-Luan/assets/128554958/c7436980-9d16-4ca4-8844-6daa94d2c347)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/hashtagluan/hashtagluan-pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-Luan/assets/128554958/2d115747-75c1-47e8-b040-6a4ba2f44187)



## Gestão de Orçamento


| Descrição            | Custo Estimado |
|----------------------|----------------|
| Recursos Humanos     |                |
| - Desenvolvedores    | R$ 5.000,00    |
| - Designer UX/UI     | R$ 2.000,00    |
| - Gerente de Projeto | R$ 1.500,00    |
| Hardware             |                |
| - Servidores         | R$ 500,00      |
| - Computadores       | R$ 2.000,00    |
| Outros               |                |
| - Licenças de Software | R$ 1.000,00  |
| - Marketing          | R$ 500,00      |
| **Total**            | **R$ 12.500,00** |
