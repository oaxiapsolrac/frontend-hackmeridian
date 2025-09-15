# Backlog de Frontend: Plataforma VIP "Capys Club"

## Objetivo do MVP (Hackathon)

Construir uma "fatia vertical" que demonstre o fluxo de valor ponta a ponta: o onboarding de um cliente VIP, sua experiência exclusiva na plataforma e o ciclo de engajamento com recompensas digitais.

---

### Épico 1: A Experiência de Boas-Vindas do VIP (Prioridade Máxima)

*O sucesso da nossa demo depende de uma primeira impressão impecável, mágica e sem atritos.*

- [ ] **[FE-01] | `[MUST-HAVE]` - Acesso via Carteira Digital**
  - **Descrição:** A única forma de acessar a plataforma é conectando uma carteira de criptomoedas. A tela inicial será minimalista e focada nesta única ação.
  - **Tarefas:**
    - [ ] Construir uma Landing Page/Login com um único botão "Conectar Carteira".
    - [ ] Integrar uma biblioteca de conexão (ex: RainbowKit, Web3Modal) para suportar múltiplas carteiras.
    - [ ] Gerenciar o estado de conexão (conectado/desconectado, endereço do usuário) e disponibilizá-lo globalmente na aplicação.
    - [ ] Implementar a lógica de redirecionamento pós-conexão.

- [ ] **[FE-02] | `[MUST-HAVE]` - Dashboard VIP e Exibição de Ativos**
  - **Descrição:** Após a conexão, o usuário acessa um painel que exibe seu status e seus ativos digitais, além de liberar conteúdo exclusivo.
  - **Tarefas:**
    - [ ] Criar o componente `DashboardVip`.
    - [ ] Implementar a lógica de **Token Gating**: verificar se a carteira conectada possui o NFT de membro.
    - [ ] Se o acesso for negado, exibir uma mensagem apropriada.
    - [ ] Criar o componente `NftCard` para exibir o NFT de membro (ERC-721), buscando seus metadados.
    - [ ] Criar uma galeria para exibir as "Badges de Conquista" (ERC-1155) que o usuário possui.
    - [ ] Criar uma seção de "Conteúdo Exclusivo" que só é renderizada se o acesso for verificado.

---

### Épico 2: Ferramentas de Gestão da Marca

*Uma interface mínima e funcional para a marca acionar os eventos que o cliente vivencia.*

- [ ] **[FE-03] | `[MUST-HAVE]` - Painel de Admin para Gestão de Membros**
  - **Descrição:** Uma interface simples para a marca gerenciar os membros da sua comunidade VIP, concedendo acessos e recompensas.
  - **Tarefas:**
    - [ ] Criar uma página `/admin`.
    - [ ] Construir um formulário para **Convidar Novo Membro** (recebe um endereço de carteira e aciona a emissão do NFT de membro).
    - [ ] Construir um formulário para **Distribuir Recompensas**, permitindo ao admin selecionar um membro e uma badge para enviar.
    - [ ] Implementar feedback visual para o admin sobre o status das transações (pendente, sucesso, erro).

---
