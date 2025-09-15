# Capys Club - Plataforma de Comunidades VIP Tokenizadas

![Capys Club Banner](https://via.placeholder.com/1200x400.png?text=Capys+Club+-+Luxury+VIP+Platform)

### Uma plataforma de engajamento Web3-nativa que permite a marcas de luxo criar e gerenciar comunidades exclusivas através de ativos digitais (NFTs), conectando-se diretamente com seus clientes mais valiosos.

[![Status](https://img.shields.io/badge/status-em--desenvolvimento-yellow?style=for-the-badge)](https://github.com/oaxiacpsolrac/frontend-hackmeridian) [![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge)](./LICENSE)

---

## 🚀 O Problema

Marcas de luxo lutam para criar programas de fidelidade que reflitam a exclusividade e o senso de propriedade que seus clientes valorizam. Listas de e-mail e programas de pontos tradicionais são genéricos e não oferecem um ativo digital real que o cliente possa possuir. Falta uma ponte entre a posse de um produto de luxo e a participação em sua comunidade digital.

## ✨ A Solução: Capys Club

O Capys Club oferece uma solução SaaS que transforma a participação em uma comunidade em uma experiência baseada na posse de ativos digitais. Usando a blockchain, permitimos que marcas emitam **"Cartões de Membro"** e **"Badges de Conquista"** como NFTs diretamente para as carteiras de seus clientes, criando um ecossistema de engajamento verificável, exclusivo e transferível.

## 🛠️ Funcionalidades (Escopo do Hackathon MVP)

Este protótipo foca na jornada de um membro da comunidade de uma marca de iates de luxo.

#### 1. **Acesso Exclusivo via Carteira Digital (FE-01)**
   - Conexão direta com a plataforma utilizando carteiras Web3 (MetaMask, Rainbow, etc.).
   - A posse de um NFT de membro específico é o único requisito para acessar o portal.

#### 2. **Painel de Controle do Membro VIP (FE-02)**
   - **Galeria de Ativos:** Uma interface elegante que exibe o NFT principal de membro (ERC-721) e uma coleção de badges de conquista (ERC-1155).
   - **Conteúdo Token-Gated:** Acesso a seções de conteúdo premium (notícias, eventos) que são desbloqueadas apenas para detentores do NFT de membro.

#### 3. **Painel de Gestão da Marca (FE-03)**
   - **Emissão de Acessos:** Ferramenta para o administrador da marca emitir um novo NFT de membro diretamente para o endereço da carteira de um cliente VIP.
   - **Sistema de Premiação:** Capacidade de distribuir badges (NFTs) como recompensa por engajamento (ex: participação em eventos), fortalecendo a lealdade do cliente.

## 💻 Stack de Tecnologia

-   **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
-   **Interação com Blockchain:** Wagmi & Viem para hooks e interação com contratos.
-   **Conexão de Carteira:** RainbowKit / Web3Modal
-   **Smart Contracts:** Solidity, Hardhat, OpenZeppelin
-   **Blockchain Alvo (MVP):** Polygon Mumbai (Testnet)

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
    Crie um arquivo `.env.local` na raiz e adicione as chaves necessárias.
    ```
    # Exemplo
    NEXT_PUBLIC_ALCHEMY_API_KEY="SUA_CHAVE_ALCHEMY_OU_INFURA"
    NEXT_PUBLIC_CONTRACT_ADDRESS="0x..."
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="SEU_ID_DO_WALLETCONNECT"
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.
