# Capys Club - A Tokenized VIP Platform on the Stellar Network

![Capys Club Banner](https://via.placeholder.com/1200x400.png?text=Capys+Club+-+Powered+by+Stellar)

### A high-performance engagement platform that enables luxury brands to create and manage exclusive communities through digital assets on the Stellar blockchain, connecting directly with their most valued clients.

[![Status](https://img.shields.io/badge/status-in--development-yellow?style=for-the-badge)](https://github.com/oaxiacpsolrac/frontend-hackmeridian) [![Blockchain](https://img.shields.io/badge/blockchain-Stellar-blueviolet?style=for-the-badge)](https://stellar.org/)

---

## 🚀 The Problem

Luxury brands struggle to create loyalty programs that reflect the exclusivity and sense of ownership their clients value. Traditional email lists and point-based systems are generic and do not offer a true digital asset that the customer can own. There is a missing bridge between owning a luxury product and participating in its digital community.

## ✨ The Solution: Capys Club on Stellar

Capys Club offers a SaaS solution that transforms community participation into an experience based on digital asset ownership. By leveraging the speed and scalability of the **Stellar network** and its new **Soroban** smart contracts, we empower brands to issue **"Membership Cards"** and **"Achievement Badges"** as native assets directly to their clients' wallets. This creates a verifiable, efficient, and low-cost ecosystem for engagement.

## 🛠️ Features (Hackathon MVP Scope)

This prototype focuses on the user journey of a member within a luxury yacht brand's community.

#### 1. **Exclusive Access via Stellar Wallet (FE-01)**
   - Direct connection to the platform using wallets from the Stellar ecosystem (Freighter, Albedo, etc.).
   - Ownership of a specific membership asset is the sole requirement to access the portal.

#### 2. **The VIP Member Dashboard (FE-02)**
   - **Asset Gallery:** An elegant interface that displays the main membership asset and a collection of achievement badges, all issued on the Stellar network.
   - **Token-Gated Content:** Access to premium content sections (news, events) that are unlocked only for holders of the membership asset.

#### 3. **The Brand Management Panel (FE-03)**
   - **Access Issuance:** A tool for the brand administrator to issue a new membership asset directly to a VIP client's Stellar wallet address.
   - **Rewards System:** The ability to distribute badges (digital assets) as a reward for engagement, thereby strengthening customer loyalty.

## 💻 Technology Stack

-   **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
-   **Blockchain:** **Stellar Network** (Futurenet/Testnet)
-   **Smart Contracts:** **Soroban** (written in **Rust**)
-   **Blockchain Interaction:** **Stellar SDK** / **Soroban SDK**
-   **Wallet Connection:** **Freighter API** and/or **Albedo** for transaction signing.
-   **Digital Assets:** Stellar native assets or tokens managed by Soroban contracts.

## 🚀 Getting Started (Running Locally)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/oaxiacpsolrac/frontend-hackmeridian.git](https://github.com/oaxiacpsolrac/frontend-hackmeridian.git)
    cd frontend-hackmeridian
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the necessary keys for the Stellar network.
    ```
    # Example
    NEXT_PUBLIC_SOROBAN_RPC_URL="[https://soroban-testnet.stellar.org:443](https://soroban-testnet.stellar.org:443)"
    NEXT_PUBLIC_CONTRACT_ID="C..."
    NEXT_PUBLIC_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.
