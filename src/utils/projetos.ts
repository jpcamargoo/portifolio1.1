export interface ProjetoTexto {
  pt: string;
  en: string;
}

export interface ProjetoRequisitos {
  funcionais: ProjetoTexto[];
  naoFuncionais: ProjetoTexto[];
}

export interface ProjetoIPO {
  input: ProjetoTexto;
  process: ProjetoTexto;
  output: ProjetoTexto;
}

export interface Projeto {
  id: string;
  titulo: ProjetoTexto;
  descricao: ProjetoTexto;
  contexto: ProjetoTexto;
  stack: string[];
  processo: ProjetoTexto[];
  impacto: ProjetoTexto;
  link?: string;
  repositorio?: string;
  categoria: 'backend' | 'data' | 'fullstack' | 'automacao';
  // Campos de análise técnica (opcionais)
  dominio?: ProjetoTexto;
  requisitos?: ProjetoRequisitos;
  regrasNegocio?: ProjetoTexto[];
  casosDeUso?: ProjetoTexto[];
  decisoesTecnicas?: ProjetoTexto[];
  ipo?: ProjetoIPO;
  dadosAnalise?: ProjetoTexto[];
  metricas?: ProjetoTexto[];
  modeloDominio?: ProjetoTexto;
}

export const projetos: Projeto[] = [
  {
    id: 'api-modular-nodejs',
    titulo: {
      pt: 'API REST Modular',
      en: 'Modular REST API',
    },
    descricao: {
      pt: 'API backend com Node.js, TypeScript e arquitetura em camadas',
      en: 'Backend API with Node.js, TypeScript and layered architecture',
    },
    contexto: {
      pt: 'APIs bem estruturadas facilitam manutenção e evolução. Este projeto foi sobre construir uma base sólida com separação clara de responsabilidades.',
      en: 'Well-structured APIs facilitate maintenance and evolution. This project was about building a solid foundation with clear separation of responsibilities.',
    },
    stack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Git'],
    processo: [
      { pt: 'Estruturação em camadas: rotas, controllers, serviços, repositórios', en: 'Layered structure: routes, controllers, services, repositories' },
      { pt: 'Documentação-first: desenhar contratos e endpoints antes do código', en: 'Documentation-first: design contracts and endpoints before code' },
      { pt: 'Autenticação JWT: implementação de login e proteção de rotas', en: 'JWT Authentication: login implementation and route protection' },
      { pt: 'Integração com PostgreSQL: modelagem de dados e queries otimizadas', en: 'PostgreSQL Integration: data modeling and optimized queries' },
      { pt: 'Boas práticas: Clean Code, funções puras, tratamento de erros consistente', en: 'Best practices: Clean Code, pure functions, consistent error handling' },
    ],
    impacto: {
      pt: 'Código legível que facilita onboarding de novos desenvolvedores. Estrutura modular que permite adicionar features sem quebrar o existente.',
      en: 'Readable code that facilitates onboarding of new developers. Modular structure that allows adding features without breaking existing ones.',
    },
    categoria: 'backend',
    dominio: {
      pt: 'Sistema de acesso controlado a recursos. Dois atores principais: Usuário autenticado (opera sobre seus próprios recursos) e Administrador (supervisão total). Contratos de API definidos antes da implementação: cada endpoint com método, rota, payload esperado e resposta garantida.',
      en: 'Controlled resource access system. Two main actors: Authenticated User (operates on own resources) and Administrator (full supervision). API contracts defined before implementation: each endpoint with method, route, expected payload and guaranteed response.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Usuário se autentica com email e senha e recebe token JWT', en: 'RF01 — User authenticates with email and password and receives JWT token' },
        { pt: 'RF02 — Usuário autenticado realiza CRUD nos próprios recursos', en: 'RF02 — Authenticated user performs CRUD on own resources' },
        { pt: 'RF03 — Administrador acessa rotas protegidas por papel (role)', en: 'RF03 — Administrator accesses routes protected by role' },
        { pt: 'RF04 — Todas as operações retornam respostas padronizadas com status HTTP semântico', en: 'RF04 — All operations return standardized responses with semantic HTTP status' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Tempo de resposta < 200ms para endpoints de leitura', en: 'RNF01 — Response time < 200ms for read endpoints' },
        { pt: 'RNF02 — Falhas de autenticação retornam 401 sem expor detalhes internos', en: 'RNF02 — Authentication failures return 401 without exposing internal details' },
        { pt: 'RNF03 — Código estruturado para onboarding sem necessidade de documentação adicional', en: 'RNF03 — Code structured for onboarding without additional documentation' },
      ],
    },
    regrasNegocio: [
      { pt: 'RN01 — Usuário só acessa recursos que lhe pertencem (filtragem por user_id)', en: 'RN01 — User only accesses resources that belong to them (filtered by user_id)' },
      { pt: 'RN02 — Token expirado, ausente ou inválido retorna 401 sem detalhes internos', en: 'RN02 — Expired, missing or invalid token returns 401 without internal details' },
      { pt: 'RN03 — Operações de escrita exigem validação de payload antes de qualquer acesso ao banco', en: 'RN03 — Write operations require payload validation before any database access' },
    ],
    casosDeUso: [
      { pt: 'UC01 — Usuário faz login → recebe JWT → acessa rotas protegidas', en: 'UC01 — User logs in → receives JWT → accesses protected routes' },
      { pt: 'UC02 — Usuário cria recurso → sistema valida → persiste → retorna 201 com payload', en: 'UC02 — User creates resource → system validates → persists → returns 201 with payload' },
      { pt: 'UC03 — Token expirado → middleware intercepta → retorna 401 antes de atingir o controller', en: 'UC03 — Expired token → middleware intercepts → returns 401 before reaching controller' },
    ],
    decisoesTecnicas: [
      { pt: 'JWT sobre sessions: stateless facilita escalabilidade horizontal; expiração curta (1h) mitiga risco de revogação sem Redis', en: 'JWT over sessions: stateless enables horizontal scaling; short expiry (1h) mitigates revocation risk without Redis' },
      { pt: 'Express sobre Fastify: ecossistema maduro e familiaridade justificam a escolha neste contexto', en: 'Express over Fastify: mature ecosystem and familiarity justify the choice in this context' },
      { pt: 'Camadas explícitas (routes → controllers → services → repositories): cada camada testável de forma isolada; repositório abstrai o banco', en: 'Explicit layers (routes → controllers → services → repositories): each layer independently testable; repository abstracts the database' },
    ],
    ipo: {
      input: {
        pt: 'Requisição HTTP com headers de autenticação (JWT) e payload tipado (TypeScript)',
        en: 'HTTP request with authentication headers (JWT) and typed payload (TypeScript)',
      },
      process: {
        pt: 'Validação do token → extração do papel (role) → validação do payload → execução da lógica de serviço → query ao repositório',
        en: 'Token validation → role extraction → payload validation → service logic execution → repository query',
      },
      output: {
        pt: 'Resposta padronizada com status HTTP semântico, payload tipado e log estruturado de cada operação',
        en: 'Standardized response with semantic HTTP status, typed payload and structured log of each operation',
      },
    },
    metricas: [
      { pt: 'Separação em 4 camadas distintas — nenhuma com mais de uma responsabilidade', en: 'Separation into 4 distinct layers — none with more than one responsibility' },
      { pt: 'Estrutura autodocumentada por nomenclatura e contratos: onboarding sem documentação extra', en: 'Self-documented structure through naming and contracts: onboarding without extra documentation' },
      { pt: 'Zero consultas ao banco sem validação prévia de payload', en: 'Zero database queries without prior payload validation' },
    ],
    modeloDominio: {
      pt: 'Usuario (id, email, senha_hash, papel) → possui → Recurso (id, usuario_id, dados, created_at, updated_at). Papel define permissões de acesso. JWT carrega id e papel como claims.',
      en: 'User (id, email, password_hash, role) → owns → Resource (id, user_id, data, created_at, updated_at). Role defines access permissions. JWT carries id and role as claims.',
    },
  },
  {
    id: 'integracao-dados-sql',
    titulo: {
      pt: 'Integração de Dados — SQL',
      en: 'Data Integration — SQL',
    },
    descricao: {
      pt: 'Serviço de sincronização e transformação de dados entre sistemas',
      en: 'Data synchronization and transformation service between systems',
    },
    contexto: {
      pt: 'Sistemas diferentes precisam conversar. Este projeto integrou múltiplas fontes de dados com SQL como ponte.',
      en: 'Different systems need to communicate. This project integrated multiple data sources with SQL as the bridge.',
    },
    stack: ['Node.js', 'PostgreSQL', 'MySQL', 'TypeScript', 'Cron Jobs'],
    processo: [
      { pt: 'Mapeamento de schemas: entender estrutura de cada base de dados', en: 'Schema mapping: understanding the structure of each database' },
      { pt: 'Scripts de migração: ETL simples para mover e transformar dados', en: 'Migration scripts: simple ETL to move and transform data' },
      { pt: 'Queries otimizadas: índices, joins eficientes, evitar N+1', en: 'Optimized queries: indexes, efficient joins, avoiding N+1' },
      { pt: 'Agendamento: cron jobs para sincronização periódica', en: 'Scheduling: cron jobs for periodic synchronization' },
      { pt: 'Logging estruturado: rastreabilidade de cada operação', en: 'Structured logging: traceability for each operation' },
    ],
    impacto: {
      pt: 'Eliminação de sincronização manual. Dados consistentes com rastreabilidade de origem. Pipeline ETL modular — cada etapa isolada, testável e extensível.',
      en: 'Elimination of manual sync. Consistent data with source traceability. Modular ETL pipeline — each step isolated, testable and extensible.',
    },
    categoria: 'data',
    dominio: {
      pt: 'Integração entre dois sistemas com schemas divergentes. Entidades equivalentes com nomenclatura diferente, tipos inconsistentes e registros duplicados. O domínio exige mapeamento explícito antes de qualquer dado ser movido.',
      en: 'Integration between two systems with divergent schemas. Equivalent entities with different naming, inconsistent types and duplicate records. The domain requires explicit mapping before any data is moved.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Sincronizar dados entre Fonte A (PostgreSQL) e Fonte B (MySQL)', en: 'RF01 — Synchronize data between Source A (PostgreSQL) and Source B (MySQL)' },
        { pt: 'RF02 — Transformar tipos e nomenclatura de campos conforme mapeamento definido', en: 'RF02 — Transform field types and naming according to defined mapping' },
        { pt: 'RF03 — Registrar log de cada operação: registro processado, transformação aplicada, resultado', en: 'RF03 — Log each operation: processed record, applied transformation, result' },
        { pt: 'RF04 — Agendar execuções periódicas sem intervenção manual', en: 'RF04 — Schedule periodic executions without manual intervention' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Execução idempotente: rodar duas vezes não gera duplicatas', en: 'RNF01 — Idempotent execution: running twice does not generate duplicates' },
        { pt: 'RNF02 — Falha em um registro não interrompe o lote completo', en: 'RNF02 — Failure in one record does not interrupt the entire batch' },
        { pt: 'RNF03 — Rastreabilidade: cada registro com timestamp de origem e sincronização', en: 'RNF03 — Traceability: each record with source and sync timestamp' },
      ],
    },
    regrasNegocio: [
      { pt: 'RN01 — Upsert por chave natural: insert se não existe, update se já existe', en: 'RN01 — Upsert by natural key: insert if not exists, update if exists' },
      { pt: 'RN02 — Campos com mais de 15% de nulos são sinalizados como anomalia antes da carga', en: 'RN02 — Fields with more than 15% nulls are flagged as anomaly before loading' },
      { pt: 'RN03 — Registros com chave duplicada na fonte passam por deduplicação antes do load', en: 'RN03 — Records with duplicate keys in source go through deduplication before load' },
    ],
    decisoesTecnicas: [
      { pt: 'Cron jobs sobre CDC (Change Data Capture): menor complexidade operacional; para 2x ao dia a latência adicional é aceitável', en: 'Cron jobs over CDC (Change Data Capture): lower operational complexity; for 2x daily frequency additional latency is acceptable' },
      { pt: 'Upsert sobre insert+update separados: atomicidade em operação única, sem race condition em execuções paralelas', en: 'Upsert over separate insert+update: atomicity in single operation, no race condition in parallel executions' },
      { pt: 'Logging estruturado (JSON) sobre logs texto: facilita análise automatizada e alertas por padrão', en: 'Structured logging (JSON) over text logs: enables automated analysis and pattern-based alerting' },
    ],
    ipo: {
      input: {
        pt: 'Dados brutos das fontes A (PostgreSQL) e B (MySQL) com schemas divergentes',
        en: 'Raw data from sources A (PostgreSQL) and B (MySQL) with divergent schemas',
      },
      process: {
        pt: 'Extract (query paginada com cursor) → Transform (mapeamento de campos, normalização de tipos, deduplicação, validação de completude) → Load (upsert por chave natural com log)',
        en: 'Extract (paginated query with cursor) → Transform (field mapping, type normalization, deduplication, completeness validation) → Load (upsert by natural key with log)',
      },
      output: {
        pt: 'Base consolidada com rastreabilidade de origem, timestamp de sincronização e relatório de anomalias por execução',
        en: 'Consolidated base with source traceability, sync timestamp and anomaly report per execution',
      },
    },
    dadosAnalise: [
      { pt: 'Análise de completude: campos com > 15% de nulos sinalizados antes da carga', en: 'Completeness analysis: fields with > 15% nulls flagged before loading' },
      { pt: 'Análise de unicidade: chaves naturais identificadas; surrogates criados onde não existiam', en: 'Uniqueness analysis: natural keys identified; surrogates created where absent' },
      { pt: 'Consistência referencial: registros órfãos mapeados e tratados com regra de negócio explícita', en: 'Referential consistency: orphan records mapped and handled with explicit business rule' },
      { pt: 'Resultado: 3 regras de limpeza, 1 regra de deduplicação, 2 transformações de tipo documentadas', en: 'Result: 3 cleaning rules, 1 deduplication rule, 2 documented type transformations' },
    ],
    metricas: [
      { pt: 'Sincronização manual eliminada: processo agora executa automaticamente 2x ao dia', en: 'Manual sync eliminated: process now runs automatically 2x daily' },
      { pt: 'Zero duplicatas após implementação do upsert por chave natural', en: 'Zero duplicates after natural key upsert implementation' },
      { pt: 'Rastreabilidade completa: cada registro com origem, timestamp e status da operação', en: 'Full traceability: each record with source, timestamp and operation status' },
    ],
    modeloDominio: {
      pt: 'Fonte_A (schema PostgreSQL) → mapeamento → Entidade_Canônica → mapeamento → Fonte_B (schema MySQL). Entidade canônica é o contrato neutro entre os sistemas. Chave natural é o elo de identidade entre fontes.',
      en: 'Source_A (PostgreSQL schema) → mapping → Canonical_Entity → mapping → Source_B (MySQL schema). Canonical entity is the neutral contract between systems. Natural key is the identity link between sources.',
    },
  },
  {
    id: 'automacao-ai-workflow',
    titulo: {
      pt: 'Automação com IA — Documentação',
      en: 'AI Automation — Documentation',
    },
    descricao: {
      pt: 'Workflow automatizado para geração de documentação técnica',
      en: 'Automated workflow for technical documentation generation',
    },
    contexto: {
      pt: 'Documentação consome tempo. IA bem direcionada acelera sem perder qualidade. Criei um fluxo para gerar docs de APIs e testes.',
      en: 'Documentation consumes time. Well-directed AI accelerates without losing quality. I created a flow to generate API and test docs.',
    },
    stack: ['Node.js', 'OpenAI API', 'Markdown', 'Git Hooks', 'Postman'],
    processo: [
      { pt: 'Prompts estruturados: templates para diferentes tipos de documentação', en: 'Structured prompts: templates for different types of documentation' },
      { pt: 'Integração com código: extração automática de rotas e schemas', en: 'Code integration: automatic extraction of routes and schemas' },
      { pt: 'Revisão humana: IA sugere, desenvolvedor valida e ajusta', en: 'Human review: AI suggests, developer validates and adjusts' },
      { pt: 'Versionamento: documentação vive junto com código no Git', en: 'Versioning: documentation lives alongside code in Git' },
      { pt: 'Testes documentados: geração de cenários de teste a partir de specs', en: 'Documented tests: generation of test scenarios from specs' },
    ],
    impacto: {
      pt: '70% de redução no tempo de documentação. Qualidade consistente. Desenvolvedores documentam mais porque ficou mais fácil.',
      en: '70% reduction in documentation time. Consistent quality. Developers document more because it became easier.',
    },
    categoria: 'automacao',
    dominio: {
      pt: 'Automação do ciclo de vida de documentação técnica. O problema central: documentação é criada tarde, mantida raramente e desatualiza rápido. O domínio exige um workflow que minimize fricção sem remover o julgamento humano do processo.',
      en: 'Automation of the technical documentation lifecycle. The core problem: documentation is created late, maintained rarely and becomes outdated fast. The domain requires a workflow that minimizes friction without removing human judgment.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Extrair rotas e schemas do código-fonte de forma automatizada', en: 'RF01 — Extract routes and schemas from source code automatically' },
        { pt: 'RF02 — Gerar documentação de API, testes e cenários a partir de specs', en: 'RF02 — Generate API documentation, tests and scenarios from specs' },
        { pt: 'RF03 — Manter documentação versionada junto ao código no Git', en: 'RF03 — Keep documentation versioned alongside code in Git' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Revisão humana obrigatória: IA sugere, desenvolvedor valida e ajusta', en: 'RNF01 — Human review mandatory: AI suggests, developer validates and adjusts' },
        { pt: 'RNF02 — Qualidade consistente entre execuções via templates estruturados de prompt', en: 'RNF02 — Consistent quality across executions via structured prompt templates' },
      ],
    },
    decisoesTecnicas: [
      { pt: 'Prompts como templates com variáveis: garante consistência analítica entre execuções e evita deriva de qualidade', en: 'Prompts as templates with variables: ensures analytical consistency across executions and prevents quality drift' },
      { pt: 'Revisão humana como etapa não-opcional: IA como acelerador, não como substituto de julgamento técnico', en: 'Human review as non-optional step: AI as accelerator, not substitute for technical judgment' },
      { pt: 'Documentação no repositório (não wiki externa): vive com o código, é versionada e sofre code review', en: 'Documentation in repository (not external wiki): lives with code, is versioned and goes through code review' },
    ],
    ipo: {
      input: {
        pt: 'Código-fonte (rotas, schemas, specs) + tipo de documento solicitado',
        en: 'Source code (routes, schemas, specs) + requested document type',
      },
      process: {
        pt: 'Extração automática de rotas e schemas → preenchimento de template de prompt → geração via OpenAI → revisão humana → commit no repositório',
        en: 'Automatic extraction of routes and schemas → prompt template filling → generation via OpenAI → human review → commit to repository',
      },
      output: {
        pt: 'Documentação técnica versionada: README de endpoints, cenários de teste, contratos de API',
        en: 'Versioned technical documentation: endpoint README, test scenarios, API contracts',
      },
    },
    metricas: [
      { pt: '70% de redução no tempo de documentação por endpoint', en: '70% reduction in documentation time per endpoint' },
      { pt: 'Consistência entre execuções: mesmo template, mesma estrutura de output', en: 'Consistency across executions: same template, same output structure' },
      { pt: 'Adoção aumentada: custo marginal de documentar reduziu, frequência aumentou', en: 'Increased adoption: marginal cost of documenting reduced, frequency increased' },
    ],
  },
  {
    id: 'finvita',
    titulo: {
      pt: 'Finvita — Gestão Financeira',
      en: 'Finvita — Financial Management',
    },
    descricao: {
      pt: 'Plataforma fullstack com backend Node.js e frontend Next.js',
      en: 'Fullstack platform with Node.js backend and Next.js frontend',
    },
    contexto: {
      pt: 'Projeto pessoal para controle financeiro. Backend servindo API REST, frontend consumindo com visualizações.',
      en: 'Personal project for financial control. Backend serving REST API, frontend consuming it with visualizations.',
    },
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Styled Components', 'Vercel'],
    processo: [
      { pt: 'Backend: API com autenticação, CRUD de transações, categorização', en: 'Backend: API with authentication, transaction CRUD, categorization' },
      { pt: 'Frontend: interface com Next.js, consumo de API, dashboards com charts', en: 'Frontend: interface with Next.js, API consumption, dashboards with charts' },
      { pt: 'Modelagem: normalização de dados, relacionamentos entre tabelas', en: 'Modeling: data normalization, relationships between tables' },
      { pt: 'Deploy: backend separado do frontend, variáveis de ambiente seguras', en: 'Deploy: backend separated from frontend, secure environment variables' },
      { pt: 'Iteração: features incrementais, testes manuais, ajustes baseados em uso', en: 'Iteration: incremental features, manual testing, adjustments based on usage' },
    ],
    impacto: {
      pt: 'Projeto funcional em uso diário. Validação real de usabilidade e consistência dos dados. Integração frontend-backend completa: autenticação, CRUD, agregações e visualizações.',
      en: 'Functional project in daily use. Real validation of usability and data consistency. Complete frontend-backend integration: authentication, CRUD, aggregations and visualizations.',
    },
    categoria: 'fullstack',
    dominio: {
      pt: 'Controle financeiro pessoal. Ator único: Usuário autenticado. Entidades centrais: Transação (entrada ou saída), Categoria, Período. O domínio exige consistência histórica — nenhuma transação pode ser apagada sem rastro.',
      en: 'Personal financial control. Single actor: Authenticated User. Core entities: Transaction (income or expense), Category, Period. The domain requires historical consistency — no transaction can be deleted without a trace.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Usuário registra transações com valor, tipo (receita/despesa), categoria e data', en: 'RF01 — User registers transactions with amount, type (income/expense), category and date' },
        { pt: 'RF02 — Dashboard exibe saldo, total de receitas e despesas por período', en: 'RF02 — Dashboard displays balance, total income and expenses by period' },
        { pt: 'RF03 — Visualização por gráficos de linha e pizza por categoria', en: 'RF03 — Visualization via line charts and pie charts by category' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Dados persistidos com segurança e autenticação obrigatória', en: 'RNF01 — Data persisted securely with mandatory authentication' },
        { pt: 'RNF02 — Interface responsiva para uso diário em mobile', en: 'RNF02 — Responsive interface for daily mobile use' },
      ],
    },
    regrasNegocio: [
      { pt: 'RN01 — Saldo calculado em tempo real: SUM(receitas) - SUM(despesas) no período', en: 'RN01 — Balance calculated in real time: SUM(income) - SUM(expenses) in the period' },
      { pt: 'RN02 — Exclusão de transação gera registro de auditoria (soft delete)', en: 'RN02 — Transaction deletion generates audit record (soft delete)' },
      { pt: 'RN03 — Categoria não pode ser excluída se tiver transações associadas', en: 'RN03 — Category cannot be deleted if it has associated transactions' },
    ],
    decisoesTecnicas: [
      { pt: 'Backend separado do frontend: isolamento de responsabilidades e independência de deploy', en: 'Backend separated from frontend: separation of responsibilities and deployment independence' },
      { pt: 'Soft delete sobre delete físico: integridade histórica preservada; auditoria sem custo adicional', en: 'Soft delete over physical delete: historical integrity preserved; auditing at no additional cost' },
      { pt: 'Cálculo de saldo no servidor: fonte de verdade única; frontend é apenas visualização', en: 'Balance calculation on server: single source of truth; frontend is display only' },
    ],
    ipo: {
      input: {
        pt: 'Transação (tipo, valor, categoria, data) enviada via formulário autenticado',
        en: 'Transaction (type, amount, category, date) submitted via authenticated form',
      },
      process: {
        pt: 'Validação → persistência → recálculo de saldo no período → atualização dos agregados do dashboard',
        en: 'Validation → persistence → balance recalculation in period → dashboard aggregate update',
      },
      output: {
        pt: 'Dashboard atualizado com saldo, totais por categoria e gráficos de evolução temporal',
        en: 'Updated dashboard with balance, totals by category and temporal evolution charts',
      },
    },
    dadosAnalise: [
      { pt: 'Modelagem relacional: Usuario → Transacao (N) → Categoria (1). Índices em: data, tipo, usuario_id', en: 'Relational modeling: User → Transaction (N) → Category (1). Indexes on: date, type, user_id' },
      { pt: 'Agregações no banco: SUM agrupado por categoria e período evita N+1 no frontend', en: 'Database aggregations: SUM grouped by category and period avoids N+1 on frontend' },
      { pt: 'Soft delete: campo deleted_at permite histórico completo sem perda de dados', en: 'Soft delete: deleted_at field enables complete history without data loss' },
    ],
    metricas: [
      { pt: 'Projeto em uso diário: validação real de usabilidade e confiabilidade dos dados', en: 'Project in daily use: real validation of usability and data reliability' },
      { pt: 'Integração completa: autenticação, CRUD, agregações, visualizações e deploy em produção', en: 'Complete integration: authentication, CRUD, aggregations, visualizations and production deploy' },
    ],
    modeloDominio: {
      pt: 'Usuario (id, email) → possui → Transacao (id, usuario_id, tipo, valor, categoria_id, data, deleted_at) → pertence a → Categoria (id, nome, cor). Saldo = SUM(receitas) - SUM(despesas) WHERE periodo AND deleted_at IS NULL.',
      en: 'User (id, email) → owns → Transaction (id, user_id, type, amount, category_id, date, deleted_at) → belongs to → Category (id, name, color). Balance = SUM(income) - SUM(expenses) WHERE period AND deleted_at IS NULL.',
    },
  },
  {
    id: 'tourpilot-dashboard',
    titulo: {
      pt: 'TourPilot Dashboard',
      en: 'TourPilot Dashboard',
    },
    descricao: {
      pt: 'Template administrativo full-stack (Next.js 15 + Prisma + SQLite + NextAuth) para operação de tours turísticos — RBAC, 2FA, i18n e relatórios. Construído para apresentação técnica, não para uso final.',
      en: 'Full-stack admin template (Next.js 15 + Prisma + SQLite + NextAuth) for tour operations — RBAC, 2FA, i18n and reports. Built for technical presentation, not production use.',
    },
    contexto: {
      pt: 'Projeto fictício de apresentação que modela o domínio de operação turística (tours, sessões, guias, reservas, reviews, financeiro) como vitrine de arquitetura full-stack moderna. O nome e a marca são ficcionais; o foco é demonstrar decisões técnicas, RBAC granular, segurança (2FA) e estrutura pronta para escalar — não um produto em operação real.',
      en: 'Fictional presentation project modeling the tour-operations domain (tours, sessions, guides, bookings, reviews, finance) as a showcase of modern full-stack architecture. Name and brand are fictional; the focus is demonstrating technical decisions, granular RBAC, security (2FA) and a structure ready to scale — not a live product.',
    },
    stack: ['Next.js 15', 'TypeScript', 'Prisma', 'SQLite', 'NextAuth', 'Tailwind', 'shadcn/ui', 'Radix', 'Vercel', 'Docker'],
    processo: [
      { pt: 'Template de apresentação com seed determinístico: setup em < 2 min, dados consistentes para demos', en: 'Presentation template with deterministic seed: < 2 min setup, consistent data for demos' },
      { pt: 'RBAC em três papéis (Admin / Equipe / Guia) aplicado em 100% das rotas /api via middleware central de permissões', en: 'RBAC across three roles (Admin / Team / Guide) enforced on 100% of /api routes via central permissions middleware' },
      { pt: 'Segurança por padrão: 2FA TOTP, bcrypt, validação zod em todas as boundaries, audit log de ações sensíveis', en: 'Security by default: TOTP 2FA, bcrypt, zod validation at every boundary, audit log of sensitive actions' },
      { pt: 'i18n nativa em 4 idiomas (pt/en/es/fr) com fallback determinístico — strings centralizadas, sem hardcode em componentes', en: 'Native i18n in 4 languages (pt/en/es/fr) with deterministic fallback — centralized strings, no hardcoding in components' },
      { pt: 'Stubs de integração (OTA, e-mail, pagamento) ativáveis por feature flag: demo offline, produção plugável', en: 'Integration stubs (OTA, email, payment) toggleable via feature flag: offline demo, pluggable for production' },
    ],
    impacto: {
      pt: 'Template de ~12k linhas TS/TSX que demonstra um stack full-stack maduro em escala compacta: 14 rotas, RBAC granular, 2FA, i18n, relatórios e build de 30s com First Load de 102 kB. Pronto para ser destacado em entrevistas técnicas e usado como base para evoluir em produto real.',
      en: '~12k-line TS/TSX template demonstrating a mature full-stack at compact scale: 14 routes, granular RBAC, 2FA, i18n, reporting and 30s build with 102 kB First Load. Ready to be highlighted in technical interviews and used as a base to evolve into a real product.',
    },
    link: 'https://tourpilot-dashboard.vercel.app',
    repositorio: 'https://github.com/jpcamargoo/tourpilot-dashboard',
    categoria: 'fullstack',
    dominio: {
      pt: 'Operação de uma agência de tours. Três papéis: Admin (configura catálogo, equipe e políticas), Equipe (atendimento, reservas, faturamento) e Guia (vê apenas a própria agenda e execução). Ciclo: Catálogo → Agenda → Reserva → Execução → Feedback → Financeiro. Cada papel tem visão e ações distintas via RBAC; o sistema preserva histórico e auditoria em todas as transições.',
      en: 'Tour-agency operation. Three roles: Admin (catalog, team and policies), Team (front desk, bookings, billing) and Guide (sees only own schedule and execution). Cycle: Catalog → Schedule → Booking → Execution → Feedback → Finance. Each role has distinct views and actions via RBAC; the system preserves history and audit across every transition.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Autenticação por credenciais + 2FA TOTP opcional, com fluxo de recuperação', en: 'RF01 — Credentials login + optional TOTP 2FA, with recovery flow' },
        { pt: 'RF02 — CRUD de Tours, Guias, Sessões, Reservas, Reviews e Transações com validação zod', en: 'RF02 — CRUD of Tours, Guides, Sessions, Bookings, Reviews and Transactions with zod validation' },
        { pt: 'RF03 — Agenda do guia: visualização exclusiva das sessões atribuídas ao usuário autenticado', en: 'RF03 — Guide schedule: view restricted to sessions assigned to the authenticated user' },
        { pt: 'RF04 — Dashboard com KPIs (receita, ocupação, NPS, cancelamentos) e filtros por período', en: 'RF04 — Dashboard with KPIs (revenue, occupancy, NPS, cancellations) and period filters' },
        { pt: 'RF05 — Exportação de relatórios em PDF e Excel via stream (sem buffer em memória)', en: 'RF05 — Report export to PDF and Excel via stream (no in-memory buffer)' },
        { pt: 'RF06 — i18n em 4 idiomas (pt/en/es/fr) com fallback determinístico para a chave', en: 'RF06 — i18n in 4 languages (pt/en/es/fr) with deterministic key fallback' },
        { pt: 'RF07 — Audit log de ações sensíveis (login, alteração de papel, exclusões, configurações)', en: 'RF07 — Audit log of sensitive actions (login, role change, deletions, settings)' },
        { pt: 'RF08 — Webhooks de OTA (stub) para ingestão de reservas externas em modo apresentação', en: 'RF08 — OTA webhooks (stub) for external booking ingestion in presentation mode' },
        { pt: 'RF09 — Gestão de equipe: convite, papéis e desativação, sem reaproveitar usuários', en: 'RF09 — Team management: invite, roles and deactivation, no user recycling' },
        { pt: 'RF10 — Seed determinístico para demos repetíveis e setup local em menos de 2 minutos', en: 'RF10 — Deterministic seed for repeatable demos and local setup in under 2 minutes' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — RBAC obrigatório em 100% das rotas /api: nenhum endpoint público de escrita', en: 'RNF01 — RBAC enforced on 100% of /api routes: no public write endpoints' },
        { pt: 'RNF02 — Validação zod em toda boundary externa (form, query, body, webhook)', en: 'RNF02 — zod validation at every external boundary (form, query, body, webhook)' },
        { pt: 'RNF03 — Build < 1 min e First Load JS ≤ 110 kB nas rotas principais', en: 'RNF03 — Build < 1 min and First Load JS ≤ 110 kB on main routes' },
        { pt: 'RNF04 — Stack 100% open-source e portável: roda em SQLite local sem serviços externos', en: 'RNF04 — Fully open-source, portable stack: runs on local SQLite with no external services' },
        { pt: 'RNF05 — Setup reprodutível: `npm i && npm run db:seed && npm run dev` em menos de 2 minutos', en: 'RNF05 — Reproducible setup: `npm i && npm run db:seed && npm run dev` in under 2 minutes' },
        { pt: 'RNF06 — Acessibilidade: componentes Radix + foco visível + navegação por teclado', en: 'RNF06 — Accessibility: Radix primitives + visible focus + keyboard navigation' },
        { pt: 'RNF07 — Observabilidade plugável: Sentry e cron via flag ENABLE_CRON, desligados por padrão', en: 'RNF07 — Pluggable observability: Sentry and cron via ENABLE_CRON flag, off by default' },
      ],
    },
    regrasNegocio: [
      { pt: 'RN01 — Guia só enxerga sessões em que está atribuído; demais rotas retornam 403', en: 'RN01 — Guide only sees sessions they are assigned to; other routes return 403' },
      { pt: 'RN02 — Sessão só aceita reserva se capacidade_atual < capacidade_maxima e status = aberta', en: 'RN02 — Session only accepts booking if current_capacity < max_capacity and status = open' },
      { pt: 'RN03 — Alteração de papel exige reautenticação e fica registrada em audit log', en: 'RN03 — Role change requires re-authentication and is recorded in audit log' },
      { pt: 'RN04 — Exclusão é soft delete: registro permanece para auditoria e histórico financeiro', en: 'RN04 — Deletion is soft delete: record remains for audit and financial history' },
      { pt: 'RN05 — Review só pode ser criada para reserva com status = concluída', en: 'RN05 — Review can only be created for booking with status = completed' },
      { pt: 'RN06 — Transação financeira é imutável após confirmação; ajustes geram nova transação', en: 'RN06 — Financial transaction is immutable after confirmation; adjustments create a new transaction' },
      { pt: 'RN07 — 2FA, quando ativado, é obrigatório no próximo login — sem opt-out por sessão', en: 'RN07 — 2FA, once enabled, is mandatory on next login — no per-session opt-out' },
      { pt: 'RN08 — Webhook de OTA exige assinatura válida; payload sem assinatura é descartado e logado', en: 'RN08 — OTA webhook requires valid signature; unsigned payload is dropped and logged' },
      { pt: 'RN09 — Relatório respeita o escopo do papel: Guia nunca vê dados financeiros agregados', en: 'RN09 — Report respects role scope: Guide never sees aggregated financial data' },
    ],
    casosDeUso: [
      { pt: 'UC01 — Admin cadastra tour com descrição, duração, preço e idiomas suportados', en: 'UC01 — Admin registers tour with description, duration, price and supported languages' },
      { pt: 'UC02 — Admin/Equipe cria sessão (tour + data + guia + capacidade) a partir do calendário', en: 'UC02 — Admin/Team creates session (tour + date + guide + capacity) from the calendar' },
      { pt: 'UC03 — Equipe registra reserva manual no balcão, valida capacidade e gera transação', en: 'UC03 — Team registers manual front-desk booking, validates capacity and creates transaction' },
      { pt: 'UC04 — Guia acessa sua agenda do dia e marca sessão como concluída', en: 'UC04 — Guide opens daily schedule and marks session as completed' },
      { pt: 'UC05 — Admin exporta relatório de receita/ocupação por período em PDF ou Excel', en: 'UC05 — Admin exports revenue/occupancy report for a period in PDF or Excel' },
      { pt: 'UC06 — Usuário ativa 2FA: gera segredo TOTP, valida código e exige no próximo login', en: 'UC06 — User enables 2FA: generates TOTP secret, validates code and enforces on next login' },
      { pt: 'UC07 — Sistema recebe webhook de OTA (stub), valida assinatura e cria reserva pendente', en: 'UC07 — System receives OTA webhook (stub), validates signature and creates pending booking' },
    ],
    decisoesTecnicas: [
      { pt: 'Next.js 15 (App Router + Server Actions): SSR/RSC para dashboards pesados em leitura — trade-off: curva de RSC vs. ganho em payload e DX', en: 'Next.js 15 (App Router + Server Actions): SSR/RSC for read-heavy dashboards — trade-off: RSC learning curve vs. payload and DX gains' },
      { pt: 'Prisma + SQLite como default: setup zero-dep para apresentação; produção troca para Postgres via DATABASE_URL — trade-off: limites de concorrência do SQLite vs. simplicidade de demo', en: 'Prisma + SQLite as default: zero-dep setup for presentation; production switches to Postgres via DATABASE_URL — trade-off: SQLite concurrency limits vs. demo simplicity' },
      { pt: 'NextAuth com credentials + TOTP: integração padronizada e menor superfície de bug — trade-off: menos flexível que JWT manual, suficiente para o escopo', en: 'NextAuth with credentials + TOTP: standardized integration and smaller bug surface — trade-off: less flexible than manual JWT, sufficient for scope' },
      { pt: 'permissions.ts centralizado: matriz papel × ação em um único arquivo, importado pelo middleware e pelos componentes — trade-off: acoplamento ao papel vs. legibilidade do RBAC', en: 'Centralized permissions.ts: role × action matrix in a single file, imported by middleware and components — trade-off: role coupling vs. RBAC readability' },
      { pt: 'stubs.ts para integrações (OTA/e-mail/pagamento): demo offline + contrato pronto para implementações reais — trade-off: dado fake vs. independência de serviços externos', en: 'stubs.ts for integrations (OTA/email/payment): offline demo + contract ready for real implementations — trade-off: fake data vs. independence from external services' },
      { pt: 'ENABLE_CRON como feature flag: jobs (lembrete, fechamento diário) desligados por padrão para evitar custo/ruído em demo', en: 'ENABLE_CRON as feature flag: jobs (reminders, daily closing) off by default to avoid cost/noise in demo' },
      { pt: 'Sentry plugável (DSN vazio = no-op): observabilidade pronta sem exigir conta externa para rodar localmente', en: 'Pluggable Sentry (empty DSN = no-op): observability ready without requiring an external account to run locally' },
      { pt: 'Tailwind + shadcn/ui sobre Radix: design system consistente sem manutenção de CSS custom — trade-off: tamanho do bundle vs. velocidade de UI', en: 'Tailwind + shadcn/ui on top of Radix: consistent design system without custom CSS maintenance — trade-off: bundle size vs. UI velocity' },
    ],
    ipo: {
      input: {
        pt: 'Credenciais + código TOTP, formulários CRUD validados por zod, webhooks de OTA (stub) e querystrings de filtro/exportação',
        en: 'Credentials + TOTP code, zod-validated CRUD forms, OTA webhooks (stub) and filter/export querystrings',
      },
      process: {
        pt: 'zod na boundary → middleware RBAC (permissions.ts) → Prisma transacional → cálculo de KPIs em Server Components → bcrypt + speakeasy para segurança → audit log',
        en: 'zod at boundary → RBAC middleware (permissions.ts) → transactional Prisma → KPI computation in Server Components → bcrypt + speakeasy for security → audit log',
      },
      output: {
        pt: 'Páginas SSR/RSC tipadas, JSON tipado em /api, PDFs e Excel em stream, eventos Sentry/audit estruturados',
        en: 'Typed SSR/RSC pages, typed JSON on /api, streamed PDFs and Excel, structured Sentry/audit events',
      },
    },
    dadosAnalise: [
      { pt: 'Entidades núcleo: Usuario, Guia, Tour, Sessao, Reserva, Review, Transacao, AuditLog — todas com timestamps e soft delete', en: 'Core entities: User, Guide, Tour, Session, Booking, Review, Transaction, AuditLog — all with timestamps and soft delete' },
      { pt: 'Volumes esperados em demo: dezenas de tours, centenas de sessões/ano, milhares de reservas — cabem confortavelmente em SQLite', en: 'Expected demo volumes: dozens of tours, hundreds of sessions/year, thousands of bookings — fit comfortably in SQLite' },
      { pt: 'Queries críticas: agenda por guia (where guiaId + data), ocupação por tour (group by tourId), receita por período (sum em Transacao)', en: 'Critical queries: schedule by guide (where guiaId + date), occupancy by tour (group by tourId), revenue by period (sum on Transaction)' },
      { pt: 'Índices em Sessao.data, Sessao.guiaId, Reserva.sessaoId e Transacao.data para sustentar os filtros do dashboard', en: 'Indexes on Session.date, Session.guideId, Booking.sessionId and Transaction.date to back the dashboard filters' },
    ],
    metricas: [
      { pt: '~12.000 linhas TS/TSX, 14 rotas no App Router, 100% das /api protegidas por RBAC', en: '~12,000 lines TS/TSX, 14 App Router routes, 100% of /api protected by RBAC' },
      { pt: 'Build ~30s, First Load JS 102 kB, middleware 110 kB — orçamento de performance respeitado', en: 'Build ~30s, First Load JS 102 kB, middleware 110 kB — performance budget honored' },
      { pt: 'i18n em 4 idiomas (pt/en/es/fr) com strings centralizadas e fallback determinístico', en: 'i18n in 4 languages (pt/en/es/fr) with centralized strings and deterministic fallback' },
      { pt: 'Setup local em < 2 min via seed determinístico; sem dependência de serviços externos para rodar', en: 'Local setup in < 2 min via deterministic seed; no external services required to run' },
    ],
    modeloDominio: {
      pt: 'Usuario (1) — (0..1) Guia · Tour (1) — (*) Sessao · Guia (1) — (*) Sessao · Sessao (1) — (*) Reserva · Reserva (0..1) — (1) Review · Reserva (0..1) — (1) Transacao. AuditLog referencia Usuario e a entidade afetada de forma polimórfica.',
      en: 'User (1) — (0..1) Guide · Tour (1) — (*) Session · Guide (1) — (*) Session · Session (1) — (*) Booking · Booking (0..1) — (1) Review · Booking (0..1) — (1) Transaction. AuditLog references User and the affected entity polymorphically.',
    },
  },
  {
    id: 'gerador-relatorios',
    titulo: {
      pt: 'Gerador de Relatórios — IA',
      en: 'Report Generator — AI',
    },
    descricao: {
      pt: 'Sistema inteligente que transforma dados brutos em relatórios completos, com análise via IA e geração automática de PDFs',
      en: 'Intelligent system that transforms raw data into complete reports, with AI analysis and automatic PDF generation',
    },
    contexto: {
      pt: 'Dados dispersos viram relatórios acionáveis. Este projeto automatiza o processo completo: ingestão de dados, análise com IA, geração de insights e PDFs profissionais. IA aplicada para reduzir tempo operacional.',
      en: 'Scattered data becomes actionable reports. This project automates the complete process: data ingestion, AI analysis, insight generation and professional PDFs. AI applied to reduce operational time.',
    },
    stack: ['Node.js', 'Next.js', 'TypeScript', 'OpenAI API', 'PDFKit', 'Zod', 'Vercel'],
    processo: [
      { pt: 'API Routes serverless: escalabilidade e deploy contínuo via Vercel', en: 'Serverless API Routes: scalability and continuous deployment via Vercel' },
      { pt: 'Pipeline de parsing: aceita múltiplos formatos (JSON, CSV, texto livre)', en: 'Parsing pipeline: accepts multiple formats (JSON, CSV, free text)' },
      { pt: 'Prompts modelados: análise consistente para gerar resumo executivo, insights e recomendações', en: 'Modeled prompts: consistent analysis to generate executive summary, insights and recommendations' },
      { pt: 'Templates de PDF: layout profissional com seções dinâmicas', en: 'PDF templates: professional layout with dynamic sections' },
      { pt: 'Validação robusta: Zod para segurança e previsibilidade de entrada', en: 'Robust validation: Zod for security and input predictability' },
      { pt: 'Arquitetura modular: componentes reutilizáveis para integração em outras operações', en: 'Modular architecture: reusable components for integration into other operations' },
    ],
    impacto: {
      pt: 'Integração real de IA em pipeline de produção serverless. Dados brutos transformados em relatórios acionáveis com análise consistente. Sistema modular: cada etapa do pipeline substituível sem reescrever o restante.',
      en: 'Real AI integration in serverless production pipeline. Raw data transformed into actionable reports with consistent analysis. Modular system: each pipeline step replaceable without rewriting the rest.',
    },
    link: 'https://gerador-relatorios-rho.vercel.app',
    categoria: 'automacao',
    dominio: {
      pt: 'Transformação de dados brutos em inteligência de negócio. O problema: dados existem mas não geram decisão porque o custo de análise é alto. O domínio exige um pipeline que aceite dados em formatos variados, aplique análise consistente e entregue relatório acionável.',
      en: 'Transformation of raw data into business intelligence. The problem: data exists but does not drive decisions because analysis cost is high. The domain requires a pipeline that accepts varied formats, applies consistent analysis and delivers actionable reports.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Sistema aceita dados em JSON, CSV e texto livre', en: 'RF01 — System accepts data in JSON, CSV and free text' },
        { pt: 'RF02 — IA analisa os dados e gera: resumo executivo, insights e recomendações', en: 'RF02 — AI analyzes data and generates: executive summary, insights and recommendations' },
        { pt: 'RF03 — Sistema gera PDF com layout profissional e seções dinâmicas', en: 'RF03 — System generates PDF with professional layout and dynamic sections' },
        { pt: 'RF04 — Validação de entrada rejeita dados malformados com erro semântico', en: 'RF04 — Input validation rejects malformed data with semantic error' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Análise consistente entre execuções: mesmo tipo de dado, mesmo padrão de output', en: 'RNF01 — Consistent analysis across executions: same data type, same output pattern' },
        { pt: 'RNF02 — Arquitetura modular: cada etapa do pipeline substituível independentemente', en: 'RNF02 — Modular architecture: each pipeline step independently replaceable' },
      ],
    },
    decisoesTecnicas: [
      { pt: 'Prompts com template fixo + dados variáveis: output previsível; desvio de qualidade detectável por comparação de estrutura', en: 'Prompts with fixed template + variable data: predictable output; quality drift detectable by structure comparison' },
      { pt: 'Zod para validação de entrada: erros com contexto (campo, tipo esperado, valor recebido) em vez de exceções genéricas', en: 'Zod for input validation: errors with context (field, expected type, received value) instead of generic exceptions' },
      { pt: 'PDFKit sobre bibliotecas de template: controle total do layout sem dependências de ambiente (CSS, browser)', en: 'PDFKit over template libraries: full layout control without environment dependencies (CSS, browser)' },
      { pt: 'API Routes serverless (Next.js): escalabilidade automática via Vercel sem gestão de servidor', en: 'Serverless API Routes (Next.js): automatic scaling via Vercel without server management' },
    ],
    ipo: {
      input: {
        pt: 'Dados brutos (JSON/CSV/texto livre) + tipo de relatório solicitado',
        en: 'Raw data (JSON/CSV/free text) + requested report type',
      },
      process: {
        pt: 'Parsing adaptativo por formato → validação Zod → normalização → prompt contextualizado → análise OpenAI → estruturação da resposta → renderização PDF',
        en: 'Format-adaptive parsing → Zod validation → normalization → contextualized prompt → OpenAI analysis → response structuring → PDF rendering',
      },
      output: {
        pt: 'PDF com resumo executivo, 3–5 insights priorizados, recomendações acionáveis e apêndice de dados validados',
        en: 'PDF with executive summary, 3–5 prioritized insights, actionable recommendations and validated data appendix',
      },
    },
    dadosAnalise: [
      { pt: 'Pipeline de qualidade de entrada: completude, tipos e range validados antes de qualquer processamento IA', en: 'Input quality pipeline: completeness, types and range validated before any AI processing' },
      { pt: 'Parsing adaptativo: cada formato (JSON, CSV, texto) tem parser dedicado com fallback explícito', en: 'Adaptive parsing: each format (JSON, CSV, text) has dedicated parser with explicit fallback' },
      { pt: 'Output estruturado da IA: response schema definido via prompt → garante campos esperados mesmo com variação do modelo', en: 'Structured AI output: response schema defined via prompt → ensures expected fields even with model variation' },
    ],
    metricas: [
      { pt: 'Suporte a 3 formatos de entrada sem reescrita do pipeline de análise', en: 'Support for 3 input formats without rewriting the analysis pipeline' },
      { pt: 'PDF gerado dinamicamente com seções condicionais baseadas nos dados recebidos', en: 'Dynamically generated PDF with conditional sections based on received data' },
      { pt: 'Integração real de IA em pipeline serverless de produção', en: 'Real AI integration in serverless production pipeline' },
    ],
  },
  {
    id: 'europa-viagens',
    titulo: {
      pt: 'Europa.viagens — Agência de Viagens',
      en: 'Europa.viagens — Travel Agency',
    },
    descricao: {
      pt: 'Plataforma full-stack para agência de viagens consultiva: captura de leads, propostas comerciais versionadas, roteiros assistidos por IA e dashboard RBAC para agentes e administradores',
      en: 'Full-stack platform for a consultative travel agency: lead capture, versioned commercial proposals, AI-assisted itineraries and RBAC dashboard for agents and administrators',
    },
    contexto: {
      pt: 'Negócio de agenciamento consultivo (não-transacional): a agência não processa pagamentos — ela captura interesse qualificado, monta pacotes personalizados, emite propostas e acompanha o ciclo de venda até o fechamento offline. O sistema instrumenta esse funil de ponta a ponta, da landing pública ao dashboard interno, com IA aplicada onde gera tempo real.',
      en: 'Consultative (non-transactional) agency business: the agency does not process payments — it captures qualified interest, builds personalized packages, issues proposals and tracks the sales cycle until offline closing. The system instruments this funnel end-to-end, from public landing to internal dashboard, with AI applied where it generates real time savings.',
    },
    stack: ['Next.js 15', 'TypeScript', 'Prisma 6', 'PostgreSQL (Neon)', 'NextAuth 5', 'Zod', 'Tailwind CSS', 'Gemini AI', 'SerpApi', 'Upstash Redis', 'hCaptcha', '@react-pdf/renderer', 'Vercel'],
    processo: [
      { pt: 'Modelagem do funil consultivo: Lead → Pacote → Proposta → Roteiro → Conversão, com status enumerado e transições auditáveis', en: 'Consultative funnel modeling: Lead → Package → Proposal → Itinerary → Conversion, with enum status and auditable transitions' },
      { pt: 'Camada de IA aplicada com economia: Gemini Text monta roteiro dia-a-dia e Gemini Vision analisa capa do pacote — sempre com aprovação humana', en: 'AI layer applied with economy: Gemini Text builds day-by-day itinerary and Gemini Vision analyzes package cover — always with human approval' },
      { pt: 'RBAC granular (agente/admin) aplicado em middleware + Server Actions; agente vê apenas a própria carteira', en: 'Granular RBAC (agent/admin) enforced in middleware + Server Actions; agent only sees own pipeline' },
      { pt: 'Segurança em profundidade: NextAuth 5 split config, Zod em todas as fronteiras, rate limiting Upstash, hCaptcha em formulários públicos, soft delete LGPD', en: 'Defense in depth: NextAuth 5 split config, Zod at every boundary, Upstash rate limiting, hCaptcha on public forms, LGPD soft delete' },
      { pt: 'DEMO_MODE com stubs: portfolio público sem custo de APIs pagas, mantendo o shape igual ao das integrações reais', en: 'DEMO_MODE with stubs: public portfolio with no paid-API cost, keeping the same shape as real integrations' },
    ],
    impacto: {
      pt: 'Plataforma real para uma agência consultiva com IA aplicada com critério: tempo de montagem de proposta projetado de ~2h para ~20min (-83%), padronização visual de PDFs e rastreabilidade de engajamento do cliente — dados antes inexistentes no fluxo por e-mail. Zero rotas /api sem requireAuth + requireRole no audit; 100% TypeScript strict.',
      en: 'Real platform for a consultative agency with AI applied with judgment: projected proposal build time from ~2h to ~20min (-83%), standardized PDF visuals and client engagement tracking — data previously absent from the email-based flow. Zero /api routes without requireAuth + requireRole in audit; 100% strict TypeScript.',
    },
    link: 'https://europa-viagens.vercel.app',
    categoria: 'fullstack',
    dominio: {
      pt: 'Agenciamento de viagens consultivo (não-transacional). A agência captura interesse qualificado, monta pacotes sob medida, emite propostas comerciais e acompanha o ciclo de venda até o fechamento offline — sem processar pagamentos. Entidades centrais: Lead, Pacote, Proposta, Roteiro, Agente. Atores: Visitante anônimo, Lead, Agente, Administrador. Ciclo de vida do lead: captura → triagem → proposta → roteiro → conversão.',
      en: 'Consultative (non-transactional) travel agency. The agency captures qualified interest, builds tailored packages, issues commercial proposals and tracks the sales cycle until offline closing — without processing payments. Core entities: Lead, Package, Proposal, Itinerary, Agent. Actors: anonymous Visitor, Lead, Agent, Administrator. Lead lifecycle: capture → triage → proposal → itinerary → conversion.',
    },
    requisitos: {
      funcionais: [
        { pt: 'RF01 — Capturar leads via formulário público "Criar pacote sob medida" com validação e proteção anti-spam', en: 'RF01 — Capture leads via public "Build a custom package" form with validation and anti-spam protection' },
        { pt: 'RF02 — Listar e filtrar leads no dashboard por status, agente, origem e período', en: 'RF02 — List and filter leads in the dashboard by status, agent, source and period' },
        { pt: 'RF03 — Atribuir leads a agentes e registrar histórico de notas', en: 'RF03 — Assign leads to agents and record note history' },
        { pt: 'RF04 — CRUD de pacotes turísticos com upload de capa e análise visual por IA (Gemini Vision)', en: 'RF04 — CRUD of travel packages with cover upload and AI visual analysis (Gemini Vision)' },
        { pt: 'RF05 — Gerar propostas comerciais a partir de leads, com versionamento e export para PDF', en: 'RF05 — Generate commercial proposals from leads, with versioning and PDF export' },
        { pt: 'RF06 — Gerar roteiros dia-a-dia assistidos por IA (Gemini Text), editáveis pelo agente', en: 'RF06 — Generate AI-assisted day-by-day itineraries (Gemini Text), editable by the agent' },
        { pt: 'RF07 — Buscar voos e hotéis em APIs externas (SerpApi) e anexar à proposta', en: 'RF07 — Search flights and hotels via external APIs (SerpApi) and attach to proposal' },
        { pt: 'RF08 — Compartilhar proposta via link público rastreável', en: 'RF08 — Share proposal via trackable public link' },
        { pt: 'RF09 — Autenticação com NextAuth (credenciais) e RBAC (agente/admin)', en: 'RF09 — Authentication with NextAuth (credentials) and RBAC (agent/admin)' },
        { pt: 'RF10 — Exportar leads em CSV', en: 'RF10 — Export leads to CSV' },
      ],
      naoFuncionais: [
        { pt: 'RNF01 — Segurança: autenticação obrigatória em rotas privadas, RBAC, validação Zod em todo input, soft delete (LGPD)', en: 'RNF01 — Security: mandatory auth on private routes, RBAC, Zod validation on every input, soft delete (LGPD)' },
        { pt: 'RNF02 — Performance: SSR/ISR no Next.js 15, cache de queries Prisma, lazy-loading de imagens', en: 'RNF02 — Performance: Next.js 15 SSR/ISR, Prisma query caching, image lazy-loading' },
        { pt: 'RNF03 — Observabilidade: logs estruturados, rastreamento de visualizações de proposta', en: 'RNF03 — Observability: structured logs, proposal view tracking' },
        { pt: 'RNF04 — Compliance LGPD: soft delete, anonimização sob demanda, base legal documentada', en: 'RNF04 — LGPD compliance: soft delete, on-demand anonymization, documented legal basis' },
        { pt: 'RNF05 — Resiliência: rate limiting (Upstash Redis) e CAPTCHA (hCaptcha) em formulários públicos', en: 'RNF05 — Resilience: rate limiting (Upstash Redis) and CAPTCHA (hCaptcha) on public forms' },
        { pt: 'RNF06 — Custo: modo DEMO desliga APIs pagas (Gemini, SerpApi, Resend) sem quebrar UX', en: 'RNF06 — Cost: DEMO mode disables paid APIs (Gemini, SerpApi, Resend) without breaking UX' },
        { pt: 'RNF07 — Deploy: serverless (Vercel), build sob 250 MB, middleware Edge-compatible (< 1 MB)', en: 'RNF07 — Deploy: serverless (Vercel), build under 250 MB, Edge-compatible middleware (< 1 MB)' },
      ],
    },
    regrasNegocio: [
      { pt: 'RN01 — Um lead pertence a no máximo um agente; reatribuição registra histórico', en: 'RN01 — A lead belongs to at most one agent; reassignment is logged in history' },
      { pt: 'RN02 — Lead sem atividade por 30 dias é marcado como STALE (sinalização, não exclusão)', en: 'RN02 — Lead with no activity for 30 days is flagged as STALE (signal, not deletion)' },
      { pt: 'RN03 — Proposta só pode ser emitida para lead em status QUALIFIED ou superior', en: 'RN03 — Proposal can only be issued for lead in QUALIFIED status or above' },
      { pt: 'RN04 — Cada visualização de proposta pelo cliente é registrada (timestamp + hash do IP)', en: 'RN04 — Each proposal view by the client is recorded (timestamp + IP hash)' },
      { pt: 'RN05 — Roteiro gerado por IA exige aprovação humana antes de anexar à proposta', en: 'RN05 — AI-generated itinerary requires human approval before attaching to proposal' },
      { pt: 'RN06 — Soft delete: registros marcados com deletedAt, nunca removidos fisicamente', en: 'RN06 — Soft delete: records marked with deletedAt, never physically removed' },
      { pt: 'RN07 — Login: 5 tentativas falhas em 10 minutos bloqueiam o IP temporariamente', en: 'RN07 — Login: 5 failed attempts in 10 minutes temporarily block the IP' },
      { pt: 'RN08 — Formulário público: 3 submissões por IP por hora, com CAPTCHA obrigatório', en: 'RN08 — Public form: 3 submissions per IP per hour, with mandatory CAPTCHA' },
    ],
    casosDeUso: [
      { pt: 'UC01 — Visitante solicita pacote personalizado informando destinos e datas para receber uma proposta', en: 'UC01 — Visitor requests a personalized package providing destinations and dates to receive a proposal' },
      { pt: 'UC02 — Agente vê apenas seus leads atribuídos para focar na própria carteira', en: 'UC02 — Agent sees only their assigned leads to focus on their own pipeline' },
      { pt: 'UC03 — Agente gera roteiro com IA a partir do briefing do lead para acelerar a montagem da proposta', en: 'UC03 — Agent generates AI itinerary from the lead briefing to speed up proposal assembly' },
      { pt: 'UC04 — Agente anexa voos e hotéis pesquisados (SerpApi) à proposta para entregar valor consolidado', en: 'UC04 — Agent attaches researched flights and hotels (SerpApi) to the proposal to deliver consolidated value' },
      { pt: 'UC05 — Admin distribui leads entre agentes para balancear a carteira', en: 'UC05 — Admin distributes leads across agents to balance the pipeline' },
      { pt: 'UC06 — Admin exporta leads em CSV para análises externas', en: 'UC06 — Admin exports leads to CSV for external analysis' },
      { pt: 'UC07 — Admin acompanha métricas de conversão por agente para gestão de performance', en: 'UC07 — Admin tracks conversion metrics per agent for performance management' },
      { pt: 'UC08 — Cliente abre a proposta via link público sem login para revisar a oferta no próprio tempo', en: 'UC08 — Client opens the proposal via public link without login to review the offer at their own pace' },
    ],
    decisoesTecnicas: [
      { pt: 'Next.js 15 App Router: SSR + Server Actions reduzem código glue cliente/servidor — trade-off: curva de RSC e ecossistema ainda maturando', en: 'Next.js 15 App Router: SSR + Server Actions reduce client/server glue code — trade-off: RSC learning curve and still-maturing ecosystem' },
      { pt: 'Prisma 6 + Postgres (Neon): type-safety end-to-end e serverless-friendly — trade-off: cold start adicional e vendor lock-in leve', en: 'Prisma 6 + Postgres (Neon): end-to-end type-safety and serverless-friendly — trade-off: additional cold start and mild vendor lock-in' },
      { pt: 'NextAuth 5 com split config (auth.config.ts + auth.ts): middleware Edge exige bundle < 1 MB — trade-off: configuração dividida em dois arquivos', en: 'NextAuth 5 with split config (auth.config.ts + auth.ts): Edge middleware requires < 1 MB bundle — trade-off: configuration split across two files' },
      { pt: 'Zod em todas as fronteiras (form, API, DB): validação única em toda boundary — trade-off: duplicação eventual de tipos, mitigada com z.infer', en: 'Zod at every boundary (form, API, DB): single source of validation — trade-off: occasional type duplication, mitigated with z.infer' },
      { pt: 'Soft delete por padrão: exigência LGPD + auditoria — trade-off: queries precisam filtrar deletedAt; uso de middleware Prisma para abstrair', en: 'Soft delete by default: LGPD requirement + audit — trade-off: queries must filter deletedAt; Prisma middleware abstracts this' },
      { pt: 'DEMO_MODE com stubs: portfolio público sem custo de APIs pagas — trade-off: manter shape dos stubs sincronizado com APIs reais', en: 'DEMO_MODE with stubs: public portfolio without paid-API cost — trade-off: keep stub shape in sync with real APIs' },
      { pt: 'Upstash Redis para rate limiting: stateless e compatível com serverless — trade-off: custo por requisição e latência de rede', en: 'Upstash Redis for rate limiting: stateless and serverless-friendly — trade-off: per-request cost and network latency' },
      { pt: '@react-pdf/renderer: geração de PDF server-side sem headless browser — trade-off: estilização limitada vs. HTML/CSS pleno', en: '@react-pdf/renderer: server-side PDF generation without headless browser — trade-off: limited styling vs. full HTML/CSS' },
      { pt: 'Seed determinístico (Faker seed=42): demo reprodutível e screenshots consistentes — trade-off: dados não refletem distribuição real', en: 'Deterministic seed (Faker seed=42): reproducible demo and consistent screenshots — trade-off: data does not reflect real distribution' },
    ],
    ipo: {
      input: {
        pt: 'Formulário público de captura (destinos, datas, perfil, orçamento) + briefing textual do lead + comandos do agente no dashboard',
        en: 'Public capture form (destinations, dates, profile, budget) + lead textual briefing + agent commands in the dashboard',
      },
      process: {
        pt: 'hCaptcha + rate limit Upstash → Zod na boundary → Server Action persiste Lead (Prisma) → triagem e atribuição (RBAC) → Gemini Text monta roteiro → SerpApi consulta voos/hotéis → Proposta versionada com aprovação humana → PDF via @react-pdf/renderer → link público gera PropostaView ao ser aberto',
        en: 'hCaptcha + Upstash rate limit → Zod at boundary → Server Action persists Lead (Prisma) → triage and assignment (RBAC) → Gemini Text builds itinerary → SerpApi queries flights/hotels → versioned Proposal with human approval → PDF via @react-pdf/renderer → public link generates PropostaView when opened',
      },
      output: {
        pt: 'Lead estruturado no dashboard + proposta versionada em PDF compartilhável por link + eventos de visualização rastreados + indicadores de conversão por agente',
        en: 'Structured lead in the dashboard + versioned proposal as shareable PDF link + tracked view events + per-agent conversion indicators',
      },
    },
    dadosAnalise: [
      { pt: 'Volumes-alvo: ~500 leads/mês com retenção indefinida (anonimização LGPD após 5 anos), ~200 propostas/mês com ~3 versões médias, ~1k eventos de visualização/mês', en: 'Target volumes: ~500 leads/month with indefinite retention (LGPD anonymization after 5 years), ~200 proposals/month with ~3 versions on average, ~1k view events/month' },
      { pt: 'Indicadores derivados: taxa de conversão lead → proposta, tempo médio em cada status (NEW → QUALIFIED → PROPOSAL → WON/LOST), carga por agente e engajamento da proposta (aberturas e tempo até primeira abertura)', en: 'Derived indicators: lead → proposal conversion rate, average time in each status (NEW → QUALIFIED → PROPOSAL → WON/LOST), load per agent and proposal engagement (opens and time to first open)' },
      { pt: 'Estratégia de query: índices em (agentId, status, createdAt) e (propostaId, viewedAt) cobrem 90% das listagens do dashboard', en: 'Query strategy: indexes on (agentId, status, createdAt) and (propostaId, viewedAt) cover 90% of dashboard listings' },
      { pt: 'Compliance LGPD: soft delete em todas as entidades + path documentado de anonimização sob demanda', en: 'LGPD compliance: soft delete on all entities + documented on-demand anonymization path' },
    ],
    metricas: [
      { pt: '100% TypeScript strict, zero `any` em código de domínio; zero rotas /api sem requireAuth + requireRole no audit', en: '100% strict TypeScript, zero `any` in domain code; zero /api routes without requireAuth + requireRole in audit' },
      { pt: 'Bundle do middleware < 1 MB (validado em build, requisito Vercel Edge); build ~45s (cold)', en: 'Middleware bundle < 1 MB (validated at build, Vercel Edge requirement); build ~45s (cold)' },
      { pt: 'Lighthouse na landing: 95+ em performance, SEO e acessibilidade', en: 'Lighthouse on landing: 95+ in performance, SEO and accessibility' },
      { pt: 'Projeção de produto: montagem de proposta de ~2h (manual) para ~20min (assistida por IA) — redução de 83%', en: 'Product projection: proposal build time from ~2h (manual) to ~20min (AI-assisted) — 83% reduction' },
      { pt: 'Rate limiting em 100% dos endpoints públicos; PDFs padronizados via @react-pdf/renderer', en: 'Rate limiting on 100% of public endpoints; standardized PDFs via @react-pdf/renderer' },
    ],
    modeloDominio: {
      pt: 'User (agente/admin) 1—N Lead. Lead acumula LeadNote (histórico de interações) e tem status (NEW/CONTACTED/QUALIFIED/PROPOSAL/WON/LOST/STALE), dados de contato e briefing (destinos, datas, orçamento, perfil). Lead 1—N Roteiro e 1—N Proposta. Pacote é template comercial reutilizável (1—N Proposta, opcional) — proposta pode existir sem pacote pré-cadastrado (modo "sob medida"). Roteiro detalha o dia-a-dia, pode ser gerado por IA e Proposta 1—1 Roteiro (opcional). Proposta consolida pacote + roteiro + voos + hotéis + condições, é versionada, tem publicId (UUID) para compartilhamento e 1—N PropostaView (eventos de abertura).',
      en: 'User (agent/admin) 1—N Lead. Lead accumulates LeadNote (interaction history) and has status (NEW/CONTACTED/QUALIFIED/PROPOSAL/WON/LOST/STALE), contact data and briefing (destinations, dates, budget, profile). Lead 1—N Itinerary and 1—N Proposal. Package is a reusable commercial template (1—N Proposal, optional) — proposal can exist without a pre-registered package ("tailor-made" mode). Itinerary details the day-by-day plan, may be AI-generated, and Proposal 1—1 Itinerary (optional). Proposal consolidates package + itinerary + flights + hotels + terms, is versioned, has publicId (UUID) for sharing and 1—N PropostaView (open events).',
    },
  },
  {
    id: 'portifolio',
    titulo: {
      pt: 'Portfólio — Identidade Digital',
      en: 'Portfolio — Digital Identity',
    },
    descricao: {
      pt: 'Este site — narrativa consciente, código limpo, design intencional',
      en: 'This site — conscious narrative, clean code, intentional design',
    },
    contexto: {
      pt: 'Um portfólio não é apenas vitrine. É manifesto. Cada seção comunica quem sou, o que valorizo, como penso.',
      en: "A portfolio is not just a showcase. It's a manifesto. Each section communicates who I am, what I value, how I think.",
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    processo: [
      { pt: 'Desenho de identidade: essência filosófica antes de código', en: 'Identity design: philosophical essence before code' },
      { pt: 'Estrutura narrativa: capítulos que contam história, não apenas listam skills', en: 'Narrative structure: chapters that tell a story, not just list skills' },
      { pt: 'Animações intencionais: movimento com propósito, performance preservada', en: 'Intentional animations: movement with purpose, performance preserved' },
      { pt: 'Sistema de temas: dark/light com transições suaves', en: 'Theme system: dark/light with smooth transitions' },
      { pt: 'SEO e acessibilidade: metadata, semântica HTML, contraste de cores', en: 'SEO and accessibility: metadata, HTML semantics, color contrast' },
    ],
    impacto: {
      pt: 'Comunicação clara da identidade técnica e filosófica. Portfólio que evolui junto com o trabalho. Primeiro contato profissional estruturado como argumento, não como lista.',
      en: 'Clear communication of technical and philosophical identity. Portfolio that evolves alongside the work. Professional first contact structured as argument, not list.',
    },
    categoria: 'fullstack',
    repositorio: 'https://github.com/jpcamargoo/portifolio1.1',
    dominio: {
      pt: 'Identidade digital como sistema de comunicação. O portfólio não é lista de projetos — é argumento. Cada seção tem intenção: Home (proposta de valor), Sobre (método e filosofia), Projetos (evidência de maturidade). O visitante é o recrutador ou cliente técnico.',
      en: 'Digital identity as a communication system. The portfolio is not a project list — it is an argument. Each section has intention: Home (value proposition), About (method and philosophy), Projects (maturity evidence). The visitor is the recruiter or technical client.',
    },
    decisoesTecnicas: [
      { pt: 'Next.js App Router com SSG: indexável por motores de busca sem servidor sempre ativo', en: 'Next.js App Router with SSG: indexable by search engines without always-on server' },
      { pt: 'Framer Motion: animações com propósito narrativo — cada transição reforça a intenção da seção', en: 'Framer Motion: purposeful narrative animations — each transition reinforces the section intention' },
      { pt: 'i18n com Context API: controle total sem dependência externa; simples e suficiente para dois idiomas', en: 'i18n with Context API: full control without external dependency; simple and sufficient for two languages' },
      { pt: 'Tailwind CSS: velocidade de prototipação e consistência de design system', en: 'Tailwind CSS: prototyping speed and design system consistency' },
    ],
    ipo: {
      input: {
        pt: 'Visitante com intenção: recrutador buscando perfil técnico ou cliente buscando desenvolvedor',
        en: 'Visitor with intent: recruiter seeking technical profile or client seeking developer',
      },
      process: {
        pt: 'Jornada narrativa: identidade (Home) → método (Sobre) → evidência (Projetos). Cada seção responde uma pergunta do visitante.',
        en: 'Narrative journey: identity (Home) → method (About) → evidence (Projects). Each section answers a visitor question.',
      },
      output: {
        pt: 'Visitante com contexto suficiente para tomar uma decisão: entrar em contato, recomendar ou abrir oportunidade',
        en: 'Visitor with enough context to make a decision: reach out, recommend or open an opportunity',
      },
    },
    metricas: [
      { pt: 'Bilíngue (PT/EN) com troca dinâmica sem reload de página', en: 'Bilingual (PT/EN) with dynamic switching without page reload' },
      { pt: 'Dark/light mode com persistência via localStorage', en: 'Dark/light mode with persistence via localStorage' },
      { pt: 'Performance: SSG estático deployado na edge do Vercel; TTFB < 100ms', en: 'Performance: static SSG deployed on Vercel edge; TTFB < 100ms' },
    ],
  },
];
