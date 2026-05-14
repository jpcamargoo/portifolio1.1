# 🌌 João Paulo Pereira — Portfólio Pessoal

Bem-vindo ao meu portfólio! Este projeto foi criado para apresentar minha trajetória como desenvolvedor, meus projetos técnicos e minha identidade visual — que mistura elegância, ludicidade e elementos cósmicos e geométricos.

![Portfolio Preview](https://via.placeholder.com/1200x600/1e1b4b/ffffff?text=Portfolio+Preview)

---

## 🧠 Sobre o projeto

Este site é uma aplicação desenvolvida com **Next.js + TypeScript**, estilizada com **Tailwind CSS**, e com suporte à alternância de tema (claro/escuro). A estética é inspirada em elementos cósmicos, meditação e automação — refletindo minha transição de carreira e meu estilo técnico e introspectivo.

---

## 🚀 Tecnologias utilizadas

- **Next.js 15** — Framework React para SSR e rotas dinâmicas
- **TypeScript** — Tipagem estática para maior segurança
- **Tailwind CSS** — Estilização rápida e responsiva
- **Framer Motion** — Animações suaves e interativas
- **React 18** — Biblioteca para construção de interfaces
- **n8n (futuro)** — Para automações futuras integradas

---

## 🎨 Identidade visual

- **Tema escuro**: fundo cósmico com mandalas geométricas e planetas sutis
- **Tema claro**: fundo suave com os mesmos elementos adaptados
- **Tipografia**: fontes finas e modernas, serifadas para títulos (Playfair Display)
- **Estilo**: delicado, técnico, lúdico e acolhedor
- **Paleta de cores**: roxo, rosa, azul com gradientes suaves

---

## 📁 Estrutura de diretórios

```
/portifolio/
├── public/                 # Imagens, ícones, favicons
├── src/
│   ├── app/               # Páginas do Next.js 15 (App Router)
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página inicial
│   │   ├── sobre/         # Página sobre
│   │   ├── projetos/      # Página de projetos
│   │   └── globals.css    # Estilos globais
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   ├── Footer.tsx     # Rodapé
│   │   ├── ThemeToggle.tsx # Botão de alternância de tema
│   │   └── CosmicBackground.tsx # Fundo cósmico animado
│   ├── hooks/             # Custom hooks
│   │   └── useTheme.ts    # Hook para alternância de tema
│   └── utils/             # Utilitários e dados
│       └── projetos.ts    # Dados dos projetos
├── tailwind.config.js     # Configuração do Tailwind
├── tsconfig.json          # Configuração do TypeScript
├── next.config.js         # Configuração do Next.js
└── package.json           # Dependências
```

---

## 🌗 Alternância de tema

O site possui um botão no cabeçalho para alternar entre os modos **claro** e **escuro**, com transição visual dos planetas e fundo. A lógica está implementada com `useTheme.ts` e persistência via `localStorage`.

**Recursos:**
- Transições suaves entre temas
- Persistência do tema escolhido
- Animações sincronizadas com a mudança de tema
- Elementos cósmicos adaptados para cada tema

---

## 📂 Projetos incluídos

Cada projeto tem uma página dedicada com:
- Descrição técnica
- Stack utilizada
- Desafios e soluções
- Link para repositório
- Imagens ou vídeos curtos (em desenvolvimento)

### Exemplos:
1. **Finvita** — Plataforma de gestão financeira com automações
2. **Vó Maria** — Site de confeitaria artesanal
3. **Lisboemia** — Automação de conteúdo com n8n
4. **Portfólio pessoal** — Este próprio site

---

## 🧭 Como rodar o projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portifolio.git

# Entre na pasta do projeto
cd portifolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Rodar em modo desenvolvimento
npm run dev

# Acessar em localhost:3000
```

### Build para produção

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

---

## ✨ Recursos implementados

- ✅ Sistema de temas (claro/escuro)
- ✅ Animações com Framer Motion
- ✅ Design responsivo
- ✅ Elementos cósmicos animados
- ✅ Navegação fluida
- ✅ Páginas: Home, Sobre, Projetos
- ✅ Componentes reutilizáveis
- ✅ TypeScript para tipagem segura

---

## 🔮 Próximos passos

- [ ] Adicionar página individual para cada projeto
- [ ] Integrar blog técnico
- [ ] Adicionar seção de contato com formulário
- [ ] Implementar animações de scroll
- [ ] Otimizar imagens com Next.js Image
- [ ] Adicionar testes unitários
- [ ] Implementar analytics
- [ ] SEO aprimorado

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como inspiração!

---

## 👨‍💻 Autor

**João Paulo Pereira**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [João Paulo Pereira](https://linkedin.com/in/seu-usuario)
- Email: seu-email@exemplo.com

---

Feito com 💜 e ☕ por João Paulo Pereira
