# Capys Club - Plataforma de Comunidades VIP na Rede Stellar

![Capys Club Banner](https://via.placeholder.com/1200x400.png?text=Capys+Club+-+Powered+by+Stellar)

### Uma plataforma de engajamento de alta performance que permite a marcas de luxo criar e gerenciar comunidades exclusivas através de ativos digitais na blockchain Stellar, conectando-se diretamente com seus clientes mais valiosos.

[![Status](https://img.shields.io/badge/status-em--desenvolvimento-yellow?style=for-the-badge)](https://github.com/oaxiacpsolrac/frontend-hackmeridian) [![Blockchain](https://img.shields.io/badge/blockchain-Stellar-blueviolet?style=for-the-badge)](https://stellar.org/)

---

## 🚀 O Problema

Marcas de luxo lutam para criar programas de fidelidade que reflitam a exclusividade e o senso de propriedade que seus clientes valorizam. Listas de e-mail e programas de pontos tradicionais são genéricos e não oferecem um ativo digital real que o cliente possa possuir. Falta uma ponte entre a posse de um produto de luxo e a participação em sua comunidade digital.

## ✨ A Solução: Capys Club na Stellar

O Capys Club oferece uma solução SaaS que transforma a participação em uma comunidade em uma experiência baseada na posse de ativos digitais. Usando a velocidade e a escalabilidade da **rede Stellar** e seus novos contratos inteligentes **Soroban**, permitimos que marcas emitam **"Cartões de Membro"** e **"Badges de Conquista"** como ativos nativos diretamente para as carteiras de seus clientes, criando um ecossistema de engajamento verificável, eficiente e de baixo custo.

## 🛠️ Funcionalidades (Escopo do Hackathon MVP)

Este protótipo foca na jornada de um membro da comunidade de uma marca de iates de luxo.

#### 1. **Acesso Exclusivo via Carteira Stellar (FE-01)**
   - Conexão direta com a plataforma utilizando carteiras do ecossistema Stellar (Freighter, Albedo, etc.).
   - A posse de um ativo digital de membro específico é o único requisito para acessar o portal.

#### 2. **Painel de Controle do Membro VIP (FE-02)**
   - **Galeria de Ativos:** Uma interface elegante que exibe o ativo principal de membro e uma coleção de badges de conquista, todos emitidos na rede Stellar.
   - **Conteúdo Token-Gated:** Acesso a seções de conteúdo premium (notícias, eventos) que são desbloqueadas apenas para detentores do ativo de membro.

#### 3. **Painel de Gestão da Marca (FE-03)**
   - **Emissão de Acessos:** Ferramenta para o administrador da marca emitir um novo ativo de membro diretamente para o endereço da carteira Stellar de um cliente VIP.
   - **Sistema de Premiação:** Capacidade de distribuir badges (ativos digitais) como recompensa por engajamento, fortalecendo a lealdade do cliente.

## 💻 Stack de Tecnologia

-   **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
-   **Blockchain:** **Stellar Network** (Futurenet/Testnet)
-   **Smart Contracts:** **Soroban** (escritos em **Rust**)
-   **Interação com Blockchain:** **Stellar SDK** / **Soroban SDK**
-   **Conexão de Carteira:** **Freighter API** e/ou **Albedo** para assinatura de transações.
-   **Ativos Digitais:** Ativos nativos da Stellar ou tokens baseados em contratos Soroban.

## 🚀 Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/oaxiacpsolrac/frontend-hackmeridian.git](https://github.com/oaxiacpsolrac/frontend-hackmeridian.git)
    cd frontend-hackmeridian
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env.local` na raiz e adicione as chaves necessárias para a rede Stellar.
    ```
    # Exemplo
    NEXT_PUBLIC_SOROBAN_RPC_URL="[https://soroban-testnet.stellar.org:443](https://soroban-testnet.stellar.org:443)"
    NEXT_PUBLIC_CONTRACT_ID="C..."
    NEXT_PUBLIC_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.
