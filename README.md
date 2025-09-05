# Seja Bem-vindo(a) ao Join Ecology!

![Ambiente Destruído](https://github.com/evillynnaiana/joinecology/blob/32feb815e727dfb6321b3d4a2e2f3527ee922fe3/meio_ambiente.jpg)  
*Você pode mudar isso! Como? Usando o Join Ecology.*

*"Os problemas de uma sociedade devem ser enfrentados em unidade. Quando indivíduos e questões se alinham, o bem comum é alcançado."* — Platão

Nesta documentação, você conhecerá o **Join Ecology**, um projeto que transforma a visão de Platão em ação, abordando os desafios ambientais de forma coletiva.

### O que é o Join Ecology?

O Join Ecology é um sistema inovador destinado a governos, que permite gerenciar descontos no IPTU com base no cuidado que os cidadãos dedicam às áreas verdes. Essa abordagem não apenas incentiva a preservação ambiental, mas também promove uma comunidade mais unida e responsável.

### Protótipos de telas:
https://www.figma.com/design/mca9zLuVilaGbTh8WLbGk2/Join-Ecology?node-id=68-2&m=dev&t=8VUNGjbVopK4mu5A-1


## Estrutura de Banco de Dados do Sistema Join Ecology🪑:

A seguir, apresento um demonstrativo da estrutura de banco de dados que o sistema Join Ecology seguirá, destacando os relacionamentos e as cardinalidades entre as tabelas:

* A tabela users está relacionada à tabela user_areas em um relacionamento de 1, onde um único usuário pode estar associado a várias áreas.

* A tabela areas também se relaciona com user_areas, indicando que uma área pode estar associada a múltiplos usuários.

* A tabela areas está associada à tabela areas_category em um relacionamento de N:1, no qual uma categoria pode ter diversas áreas, mas cada área pertence a apenas uma única categoria.

Abaixo, segue uma ilustração da estrutura do banco de dados:

![Ambiente Destruído](https://github.com/evillynnaiana/joinecology/blob/148cc3e9f3f7095f47ee8c68e426d1e6a69cd9df/estrutura_banco_dados.png)  

### Cronograma do Projeto

| Data       | Atividade                                                                 | Marco Principal |
|------------|----------------------------------------------------------------------------|-----------------|
| **07/09/2025** | Estudo da estrutura do projeto, definição das telas e navegação.          | Planejamento inicial |
| **08/09/2025** | Criação da estrutura no banco de dados (tabelas e configurações).         | Banco de dados pronto |
| **15/09/2025** | Implementar login com verificação de perfil (adm / user).                 | Login funcional |
| **22/09/2025** | CRUD de criação das áreas (usuário normal).                              | CRUD inicial pronto |
| **29/09/2025** | Tela de cases de sucesso (visual, versão inicial apenas).                 | Parte visual entregue |
| **06/10/2025** | Testes iniciais dos recursos do usuário (fluxo real e salvamento no BD).  | Testes parciais |
| **13/10/2025** | Semana dedicada a correções de bugs e ajustes necessários.                | Ajustes de bugs |
| **20/10/2025** | Implementar tela de histórico de modificações de fotos.                   | Histórico pronto |
| **27/10/2025** | Tela de listagem do administrador.                                       |  Lista ADM pronta |
| **03/11/2025** | Tela de edição do administrador.                                         |  Edição ADM pronta |
| **10/11/2025** | Testes finais de integração de todas as aplicações.                      |  Testes finais |
| **17/11/2025** | Finalização de testes, ajustes finais e entrega.                         |  Entrega do projeto |
| **Extra**   | Preparar documentação técnica e guia de uso (README, manual, prints, etc.). |  Documentação pronta |
