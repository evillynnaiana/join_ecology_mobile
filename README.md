
<img width="295" height="127" alt="logo_black" src="https://github.com/user-attachments/assets/da612601-2db8-42ad-a412-e600264d0784" />

## Sobre o App

### O tema do Sistema 

O tema abordará as **questões socioambientais**, considerando que nosso meio ambiente tem sofrido ataques intensos e está reagindo de maneira drástica.  
Entre os principais problemas estão as queimadas, a expansão industrial, o aquecimento global, o desmatamento e a poluição.  

O verdadeiro problema é que, infelizmente, muitas pessoas estão se unindo por causas equivocadas, contribuindo para a destruição de um dos nossos bens mais preciosos: **o meio ambiente**.

---

## Descrição do Sistema

Sabemos que, nos dias atuais, muitos acreditam que para agir em prol do bem comum é necessário algum tipo de retorno, independentemente da forma.  
Isso é lamentável, pois o meio ambiente está sendo cada vez mais destruído.  

A **Join Ecology** surge para mudar essa visão — **transformando o cuidado ambiental em um ato recompensador**.

A proposta consiste em um sistema que **incentiva cidadãos e empresas a cuidarem de áreas verdes**, oferecendo **descontos no IPTU** como benefício para quem comprovar ações de preservação ambiental.  

O sistema permite que usuários:

- Cadastrem suas áreas verdes;
- Enviem fotos e descrições de suas ações;
- Acompanhem o status da avaliação;
- Visualizem **cases de sucesso**;
- E que administradores verifiquem e aprovem as solicitações.

Assim, **o governo utiliza recursos já previstos em orçamento ambiental**, de forma eficiente e transparente, enquanto **a sociedade é recompensada pelo cuidado com o planeta.**

---

## Funcionalidades Planejadas

### Prioritárias
- [x] Cadastro de Usuários (Login implementado com usuário fixo localmente)
- [x] Autenticação de Usuários (Fluxo com SecureStore e rotas protegidas)
- [ ] Registro/Cadastro de Áreas Verdes (CRUD)
- [ ] Envio de Evidências (Fotos antes/depois, descrição)
- [x] Visualização de Cases de Sucesso (Tela implementada com dados estáticos)
- [ ] Interface Administrativa para Avaliação (Telas de listagem/edição)
- [ ] Histórico de Modificações (Fotos)


##  Protótipos de Tela

Os protótipos das telas do aplicativo foram projetados no **Figma** e podem ser visualizados publicamente através do link abaixo:

[🔗 **[Link para os Protótipos no Figma](#)**](https://www.figma.com/design/mca9zLuVilaGbTh8WLbGk2/Join-Ecology?node-id=90-78&t=9dWQ1RZb0k9I66xS-0)

---

## Modelagem do Banco

### Descrição da Estrutura

- A tabela `users` está relacionada à tabela `user_areas` em um relacionamento **1:N** (um usuário pode ter várias áreas).
- A tabela `areas` se relaciona com `user_areas`, indicando uma relação **N:M** (através de `user_areas`).
- A tabela `areas` está associada à `areas_category` em um relacionamento **N:1** (cada área pertence a uma categoria).

### Implementação Atual

- Persistência local de autenticação com **expo-secure-store**;  
- Dados de “Cases de Sucesso” são estáticos (mockados);  
- CRUD e envio de evidências dependem da integração com um **backend**.

![Ambiente Destruído](https://github.com/evillynnaiana/joinecology/blob/148cc3e9f3f7095f47ee8c68e426d1e6a69cd9df/estrutura_banco_dados.png) 
---


## Planejamento de Sprints

| Data        | Atividade                                                                 | Marco Principal               | Status Atual (Out/2025) |
|--------------|---------------------------------------------------------------------------|-------------------------------|--------------------------|
| **07/09/2025** | Estudo da estrutura do projeto, definição das telas e navegação.          | Planejamento inicial         |  Concluído             |
| **08/09/2025** | Criação da estrutura no banco de dados (tabelas e configurações).         |  Banco de dados pronto        |  Concluído (Conceitual) |
| **15/09/2025** | Implementar login com verificação de perfil (adm / user).                 |  Login funcional              |  Concluído (Simulado)  |
| **22/09/2025** | CRUD de criação das áreas (usuário normal).                              |  CRUD inicial pronto          |  Pendente              |
| **29/09/2025** | Tela de cases de sucesso (visual, versão inicial apenas).                 |  Parte visual entregue        |  Concluído (UI)        |
| **06/10/2025** | Testes iniciais dos recursos do usuário (fluxo real e salvamento no BD). |  Testes parciais              |  Parcial (UI/Navegação) |
| **13/10/2025** | Correções de bugs e ajustes necessários.                                 |  Ajustes de bugs              |  Em Andamento          |
| **20/10/2025** | Implementar tela de histórico de modificações de fotos.                   |  Histórico pronto             |  Pendente              |
| **27/10/2025** | Tela de listagem do administrador.                                       |  Lista ADM pronta             |  Pendente              |
| **03/11/2025** | Tela de edição do administrador.                                         |  Edição ADM pronta            |  Pendente              |
| **10/11/2025** | Testes finais de integração de todas as aplicações.                      |  Testes finais                |  Pendente              |
| **17/11/2025** | Finalização de testes e entrega.                                         |  Entrega do projeto           |  Pendente              |
| **Extra**     | Preparar documentação técnica e guia de uso (README, manual, prints).     | 📖 Documentação pronta          |  Em Andamento          |


## Atualizações desde o último checkpoint
---

| Etapa | Status |
|-------|--------|
| Login e Autenticação |  Concluído |
| Cases de Sucesso |  Concluído |
| Página Inicial|  Concluido |
| Testes e Correções |  Em Andamento |
| Documentação |  Em Andamento |


---
### Expo Router
- Arquitetura de navegação baseada em arquivos;  
- Navegação em **Stack** para o fluxo principal;  
- Grupos de rota `((auth))` para separar rotas públicas e privadas;  
- Configuração de **headers** e botões nos layouts (`_layout.tsx`).

### Expo Secure Store
- Gerenciamento seguro do estado de autenticação;  
- Verificação automática no layout raiz para redirecionamentos.

### StyleSheet (React Native)
- Utilizado para estilização de telas e componentes personalizados.

### Componentes Personalizados
- `CustomButton` → Renderiza botão estilizado com ação `onPress`;  
- `CustomInput` → Exibe campo de texto com rótulo e estilo customizável;  
- `CaseCard` → Apresenta informações de um “Case de Sucesso”.

###  Boas Práticas
- Responsabilidade única por componente;  
- Props tipadas com **TypeScript** (`CustomButtonProps`, `CaseCardProps`, etc.);  
- Reutilização e clareza de código.

---

## Get Started

### Instalar dependências
```bash
npm install
npx expo start --tunnel
