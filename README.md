# Lions Seminovos

O objetivo principal foi entregar uma aplicação funcional, organizada e de fácil manutenção, documentando claramente as decisões técnicas, a estrutura do projeto e o processo para execução local.

---

## Visão Geral da Solução

O projeto foi desenvolvido utilizando **Next.js 15 (App Router)** com **React 19**, priorizando:

* Organização clara de responsabilidades
* Componentização reutilizável
* Tipagem forte com TypeScript
* Estilização consistente com Tailwind CSS
* Boas práticas de lint, formatação e arquitetura

A aplicação segue uma abordagem moderna de desenvolvimento frontend, focada em legibilidade, escalabilidade e facilidade de onboarding para novos desenvolvedores.

---

## Principais Tecnologias Utilizadas

* **Next.js 15** – Framework React com renderização híbrida (SSR/SSG)
* **React 19** – Biblioteca base para construção da interface
* **TypeScript** – Tipagem estática para maior segurança e previsibilidade
* **Tailwind CSS** – Estilização utilitária e consistente
* **React Hook Form + Zod** – Gerenciamento e validação de formulários
* **Contentlayer** – Organização e consumo de conteúdo estruturado
* **pnpm** – Gerenciador de pacotes

---

## Decisões Técnicas

### Arquitetura

* Utilização do **App Router** do Next.js para melhor separação entre layouts, páginas e componentes.
* Componentes desacoplados e reutilizáveis, priorizando composição ao invés de herança.
* Separação clara entre:

  * Componentes de UI
  * Lógica de formulários
  * Conteúdo estático/dinâmico

### Estilização

* Tailwind CSS foi escolhido pela produtividade e padronização visual.
* Uso de utilitários como `clsx` e `tailwind-merge` para controle de variantes e classes condicionais.

### Formulários e Validação

* **React Hook Form** para performance e simplicidade no gerenciamento de estado.
* **Zod** para validações declarativas e reutilizáveis.

### Qualidade de Código

* ESLint configurado com `eslint-config-next`.
* Tipagem estrita para reduzir erros em tempo de execução.

---

## Organização do Projeto

A estrutura segue os padrões recomendados pelo Next.js:

```
/app
  /layout.tsx        # Layout raiz da aplicação (App Router)
  /page.tsx          # Página principal

/components
  # Componentes de UI reutilizáveis e desacoplados

/data
  # Dados estáticos, mocks e fontes de dados organizadas por domínio

/hooks
  # Hooks customizados para reutilização de lógica de estado e efeitos

/lib
  # Funções utilitárias, helpers e integrações compartilhadas

/pages
  # Rotas específicas que não utilizam o App Router (quando aplicável)

/styles
  # Estilos globais, configurações do Tailwind e arquivos base

/templates
  # Templates de páginas ou seções compostas por múltiplos componentes
  # Conteúdo gerenciado pelo Contentlayer
```

Essa separação facilita a leitura do código, manutenção e evolução do projeto.

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

* **Node.js** versão 18 ou superior
* **pnpm** instalado globalmente

### Passo a passo

1. Clone o repositório:

```
git clone <https://github.com/vanessabrazuna/lions-seminovos.git>
```

2. Acesse a pasta do projeto:

```
cd lions-seminovos
```

3. Instale as dependências:

```
pnpm install
```

4. Rode o projeto em modo desenvolvimento:

```
pnpm dev
```

5. Acesse no navegador:

```
http://localhost:3000
```

### Build de Produção

Para gerar o build:

```
pnpm build
```

Para rodar em modo produção:

```
pnpm start
```

---

## Considerações Finais

A solução foi pensada para ser clara, extensível e alinhada às práticas modernas de desenvolvimento frontend. O foco principal foi entregar código legível, bem estruturado e fácil de evoluir, mantendo simplicidade sem abrir mão de boas decisões arquiteturais.

Qualquer dúvida ou melhoria futura pode ser incorporada facilmente devido à organização adotada.
