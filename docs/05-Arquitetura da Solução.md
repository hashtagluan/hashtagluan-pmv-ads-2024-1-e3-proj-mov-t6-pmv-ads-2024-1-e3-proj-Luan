# Arquitetura da Solução

## Arquitetura da Solução

A arquitetura da aplicação **Venda Fácil** foi projetada para garantir desempenho, escalabilidade e facilidade de manutenção. A solução é dividida em duas principais camadas: **Front-End** e **Back-End**. Cada uma desempenha um papel crucial na entrega de uma experiência de usuário fluida e segura.

### Front-End

A camada **Front-End** é responsável pela interface do usuário, onde as interações com o sistema ocorrem. Utilizamos tecnologias modernas para garantir que a aplicação seja responsiva, intuitiva e acessível em múltiplos dispositivos, incluindo desktops, tablets e smartphones.

#### Componentes Principais:

- **Interface do Usuário (UI):** Desenvolvida usando **React Native**, uma biblioteca JavaScript que permite criar interfaces nativas para iOS e Android. Isso assegura uma performance elevada e uma experiência de usuário consistente em todas as plataformas.
- **Estilos e Temas:** Utilizamos **Styled Components** para aplicar estilos dinâmicos e reutilizáveis, garantindo uma aparência moderna e uniforme. A paleta de cores predominante inclui tons de azul e verde, simbolizando confiança e prosperidade, enquanto os elementos neutros proporcionam clareza e foco.
- **Comunicação com o Back-End:** A camada de Front-End se comunica com o Back-End por meio de sqlite.

#### Estrutura do Projeto:

- **Pages:** Páginas principais do aplicativo (Cadastro, Login, Dashboard, etc.).
- **Components:** Componentes reutilizáveis como botões, formulários e modais.
- **database:** Configuração do gerenciamento de estado global.
- **Assets:** Recursos estáticos como imagens e ícones.

### Back-End

A camada **Back-End** é responsável pelo processamento dos dados e pela lógica de negócios. É projetada para ser robusta, segura e escalável, suportando as operações e interações necessárias para que o aplicativo funcione de maneira eficiente.

#### Componentes Principais:

- **Servidor de Aplicação:** Implementado com **Node.js** , que proporcionam um ambiente eficiente para a construção . O servidor gerencia as requisições e respostas, autentica usuários, e realiza os cálculos necessários para exibir as informações sobre taxas e valores de transações.
- **Banco de Dados local:** Utilizamos SQLITE API  que oferece flexibilidade e escalabilidade. É ideal para armazenar informações de usuários, transações e configurações de forma eficiente. A comunicação entre o servidor e o banco de dados é gerenciada locamente
do código sejam integradas e lançadas rapidamente.

Esta arquitetura modular e bem definida permitirá que a aplicação **Venda Fácil** ofereça uma experiência de usuário excepcional, enquanto suporta eficientemente as operações de cálculo e gestão de transações de vendas com cartões de crédito e débito.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

### Classes

1. **Usuário**
   - Representa os comerciantes que utilizam o simulador.
   - **Atributos:**
     - `id`: UUID
     - `nome`: String
     - `email`: String
     - `senha`: String
     - `telefone`: String
   - **Métodos:**
     - `registrar()`: Permite que novos usuários se cadastrem no sistema.
     - `login()`: Autentica o usuário no sistema.
     - `atualizarPerfil()`: Permite que os usuários atualizem suas informações.
     - `logout()`: Encerra a sessão do usuário.

2. **Transação**
   - Representa uma venda ou uma operação financeira realizada pelo usuário.
   - **Atributos:**
     - `id`: UUID
     - `valor`: Float
     - `data`: Date
     - `tipoPagamento`: String (e.g., crédito, débito)
     - `usuarioId`: UUID
     - `valorLiquido`: Float
     - `valorTaxas`: Float
   - **Métodos:**
     - `calcularTaxas()`: Calcula as taxas aplicáveis para a transação.
     - `calcularValorLiquido()`: Calcula o valor líquido da transação após a dedução das taxas.
     - `salvarTransacao()`: Salva a transação no sistema.

3. **Taxas**
   - Responsável por definir e aplicar as taxas às transações.
   - **Atributos:**
     - `taxaFixa`: Float
     - `taxaPercentual`: Float
   - **Métodos:**
     - `calcular(valor: Float): Float`: Calcula o total das taxas a serem aplicadas com base no valor da transação.

### Relacionamentos

1. **Usuário** tem um relacionamento de **um para muitos** com **Transação**.
   - Um usuário pode realizar várias transações.
   - Diagrama: `Usuário 1 <--> * Transação`

2. **Transação** utiliza **Taxas** para calcular o valor das taxas.
   - A **Transação** depende da classe **Taxas** para calcular as taxas aplicáveis.
   - Diagrama: `Transação --> Taxas`

### Diagrama de Classes Simplificado

Vamos representar isso graficamente. O diagrama abaixo ilustra as classes **Usuário**, **Transação**, e **Taxas**, junto com seus atributos, métodos e os relacionamentos entre eles.

![Diagrama de Classes Simplificado](https://i.imgur.com/y90bk20.png)

---

### Descrição dos Relacionamentos

- **Agregação** (`<>`): Indica que uma classe é composta de outras classes que podem existir independentemente.
- **Associação** (`--`): Indica uma relação simples entre duas classes.
- **Dependência** (`-->`): Indica que uma classe depende de outra para funcionar.

### Detalhes dos Componentes:

- **Usuário**:
  - Cada usuário possui um conjunto único de informações de identificação e login.
  - Os métodos `registrar`, `login`, `atualizarPerfil` e `logout` gerenciam a criação e manutenção da sessão do usuário.

- **Transação**:
  - Cada transação contém detalhes específicos como valor e tipo de pagamento.
  - Métodos como `calcularTaxas` e `calcularValorLiquido` são utilizados para processar a transação, aplicando as taxas apropriadas.

- **Taxas**:
  - Define as taxas que se aplicam às transações.
  - O método `calcular` determina o total das taxas com base no valor da transação e nas regras definidas (taxa fixa e percentual).

Este diagrama fornece uma visão clara de como os componentes principais da aplicação **Venda Fácil** interagem para facilitar o cálculo das taxas de transações para os usuários. 

### Modelo ER (Entidade-Relacionamento)

O **Modelo ER** para a aplicação **Venda Fácil** representa graficamente as entidades principais e como elas se relacionam entre si. Este modelo ajuda a visualizar a estrutura dos dados e suas interações fundamentais.

### Entidades e Relacionamentos

1. **Usuário**
   - Representa os comerciantes que utilizam o simulador.
   - **Atributos:**
     - `id`: UUID (PK)
     - `nome`: String
     - `email`: String (Unique)
     - `senha`: String
     - `telefone`: String
   - **Relacionamentos:**
     - Um usuário pode realizar várias transações.

2. **Transação**
   - Representa uma venda realizada, incluindo detalhes como valor, tipo de pagamento, taxas aplicadas, e o valor líquido após as taxas.
   - **Atributos:**
     - `id`: UUID (PK)
     - `valor`: Float
     - `data`: Date
     - `tipoPagamento`: String (e.g., crédito, débito)
     - `valorTaxas`: Float
     - `valorLiquido`: Float
     - `usuarioId`: UUID (FK para Usuário)
   - **Relacionamentos:**
     - Cada transação pertence a um único usuário.
     - Cada transação tem taxas associadas.

3. **Taxas**
   - Define as taxas aplicáveis às transações.
   - **Atributos:**
     - `id`: UUID (PK)
     - `taxaFixa`: Float
     - `taxaPercentual`: Float
   - **Relacionamentos:**
     - As taxas são aplicadas às transações para calcular o valor total das taxas.

### Diagrama ER

O Diagrama Entidade-Relacionamento ilustra as entidades **Usuário**, **Transação**, e **Taxas** e como elas se conectam.

```mermaid
erDiagram
    USUARIO {
        UUID id PK
        String nome
        String email UNIQUE
        String senha
        String telefone
    }
    
    TRANSACAO {
        UUID id PK
        Float valor
        Date data
        String tipoPagamento
        Float valorTaxas
        Float valorLiquido
        UUID usuarioId FK
    }
    
    TAXAS {
        UUID id PK
        Float taxaFixa
        Float taxaPercentual
    }
    
    USUARIO ||--o{ TRANSACAO: realiza
    TRANSACAO }o--|| TAXAS: possui
```

### Esquema Relacional

O Esquema Relacional é a tradução do modelo ER para tabelas de banco de dados, especificando as chaves primárias e estrangeiras, bem como as restrições de integridade.

1. **Tabela Usuário**
   - **Colunas:**
     - `id`: UUID, PK
     - `nome`: String
     - `email`: String, UNIQUE
     - `senha`: String
     - `telefone`: String

   ```sql
   CREATE TABLE Usuario (
       id UUID PRIMARY KEY,
       nome VARCHAR(255),
       email VARCHAR(255) UNIQUE,
       senha VARCHAR(255),
       telefone VARCHAR(20)
   );
   ```

2. **Tabela Transação**
   - **Colunas:**
     - `id`: UUID, PK
     - `valor`: Float
     - `data`: Date
     - `tipoPagamento`: String
     - `valorTaxas`: Float
     - `valorLiquido`: Float
     - `usuarioId`: UUID, FK (referência a `Usuario.id`)

   ```sql
   CREATE TABLE Transacao (
       id UUID PRIMARY KEY,
       valor DECIMAL(10, 2),
       data DATE,
       tipoPagamento VARCHAR(50),
       valorTaxas DECIMAL(10, 2),
       valorLiquido DECIMAL(10, 2),
       usuarioId UUID,
       FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
   );
   ```

3. **Tabela Taxas**
   - **Colunas:**
     - `id`: UUID, PK
     - `taxaFixa`: Float
     - `taxaPercentual`: Float

   ```sql
   CREATE TABLE Taxas (
       id UUID PRIMARY KEY,
       taxaFixa DECIMAL(10, 2),
       taxaPercentual DECIMAL(5, 2)
   );
   ```

### Detalhes do Relacionamento

1. **Usuário e Transação**:
   - Relacionamento de **um para muitos**.
   - Um usuário pode realizar múltiplas transações.

2. **Transação e Taxas**:
   - Relacionamento de **muitos para um**.
   - Cada transação tem taxas associadas que são aplicadas para calcular os custos.

### Considerações

O diagrama ER e o esquema relacional proporcionam uma visão clara de como os dados estão estruturados e interconectados no sistema **Venda Fácil**. Estes artefatos são essenciais para garantir a consistência e integridade dos dados durante o desenvolvimento e manutenção da aplicação.

### Tecnologias Utilizadas

Para o desenvolvimento do **Venda Fácil**, selecionamos uma série de tecnologias que permitem uma abordagem eficiente e moderna, garantindo uma experiência de usuário robusta e uma manutenção facilitada. A seguir, listamos as principais tecnologias escolhidas e seu propósito dentro do projeto.

#### **Front-End:**
- **React Native**:
  - **Descrição**: Framework para desenvolvimento de aplicativos móveis.
  - **Uso**: Criação da interface de usuário (UI) para plataformas iOS e Android.
  - **Motivação**: Permite o desenvolvimento multiplataforma com uma base de código única, economizando tempo e recursos.

- **Styled Components**:
  - **Descrição**: Biblioteca para estilização de componentes em React.
  - **Uso**: Aplicação de estilos dinâmicos aos componentes.
  - **Motivação**: Estilização modular e manutenção de código mais limpa e organizada.

#### **Back-End:**
- **Node.js**:
  - **Descrição**: Ambiente de execução de JavaScript no servidor.
  - **Uso**: Construção da lógica de negócio e APIs.
  - **Motivação**: Alta performance e escalabilidade para serviços web.

- **Express.js**:
  - **Descrição**: Framework web para Node.js.
  - **Uso**: Criação de APIs RESTful.
  - **Motivação**: Simplifica o desenvolvimento de APIs e a gestão de rotas.

- **SQLITE API**:
  - **Descrição**: Sistema de gerenciamento de banco de dados relacional.
  - **Uso**: Armazenamento de dados de usuários, transações e taxas.
  - **Motivação**: Facilidade de armazenar dados localmente.

#### **Ferramentas de Desenvolvimento:**
- **Visual Studio Code**:
  - **Descrição**: IDE leve para desenvolvimento de software.
  - **Uso**: Edição de código e depuração.
  - **Motivação**: Extensível e amplamente suportada.

- **GitHub**:
  - **Descrição**: Plataforma de hospedagem de código-fonte.
  - **Uso**: Controle de versão e colaboração.
  - **Motivação**: Facilitador de trabalho em equipe e integração contínua.

### Fluxo de Interação e Integração das Tecnologias

As informações a seguir ilustra como as tecnologias se relacionam entre si e como o fluxo de uma interação típica de usuário é conduzido no sistema **Venda Fácil**.
1. **Usuário** interage com o **App Mobile** desenvolvido em **React Native**.
2. **React Native** utiliza **Redux** para gerenciar o estado e **Axios** para comunicação com a API.
3.  **Node.js** processa as solicitações, interage com o banco de dados **PostgreSQL** para operações de dados e com **Firebase** para autenticação e notificações.
5. Os dados são retornados através da **API** até o **App Mobile**, onde **SQLITE** atualiza o estado e a interface de usuário reflete as mudanças.

### Hospedagem

Para a hospedagem e lançamento do **Venda Fácil**, utilizamos serviços que facilitam a implantação contínua e a gestão de recursos:

- **GitHub Pages**: Para a hospedagem de documentação e materiais estáticos do projeto, utilizamos o GitHub Pages, que oferece uma maneira eficiente e gratuita de compartilhar conteúdos web diretamente do repositório GitHub.

### Processo de Hospedagem

1. **Configuração do GitHub Pages**:
   - A documentação do projeto é armazenada no repositório GitHub e publicada automaticamente no GitHub Pages.
   - Configuramos a branch específica (`main` ou `pages`) para servir o conteúdo estático.

Nesta configuração, o fluxo de trabalho permite uma fácil atualização e manutenção da aplicação, garantindo que o usuário final sempre tenha acesso à versão mais recente e estável do **Venda Fácil**.

Se precisar de mais detalhes ou ajustes na descrição, estou à disposição!


