# 🌍 CulturaGO – Pasaporte Cultural Web3

> **Tracks:**  
> 🧩 Track 2 – *User-Centric Apps (Polkadot SDK)*  
> 🎨 Track 3 – *Polkadot Tinkerers*  
>
> **Repositorio público para el Polkadot Builder Party / DOT Americas 2025**

---

## 🧭 Project Overview and Objectives

**CulturaGO** es una aplicación Web3 centrada en el usuario que **certifica identidad, participación y reputación cultural** mediante **NFTs Soulbound** interoperables con el ecosistema **Polkadot**.

La plataforma permite a **artistas**, **organizadores culturales**, **staff**, **proveedores** y **público** construir una reputación cultural verificable, donde cada evento y contribución queda registrada en blockchain.

### 🎯 Objetivos
- Empoderar a los usuarios culturales con **identidad digital soberana**.  
- Usar el **Polkadot SDK y JAM Runtime** para crear un entorno descentralizado que priorice la experiencia del usuario.  
- Explorar interoperabilidad **Polkadot ↔ Avalanche** mediante **NFTs Soulbound + IPFS**.  
- Visualizar la “reputación cultural” como una nueva métrica social on-chain.  
- Probar integraciones reales con APIs y herramientas del **Polkadot Technology Stack**.

---

## 💡 Core Concept

Cada participante (artista, staff, proveedor) recibe un **NFT Soulbound** que actúa como “pasaporte cultural”.  
Estos NFTs son no transferibles, almacenan metadatos (evento, fecha, organizador) y son verificables tanto en **Avalanche Fuji** como en **Polkadot SDK Runtime**.

El sistema también permite emitir recompensas simbólicas en **USDT (Tether WDK)** y visualizar datos culturales (eventos, participación, reputación).

---

## ⚙️ Instructions for Setup and Usage

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/viniciorm/culturago-polkadot.git
cd culturago-polkadot
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar entorno
Crea un archivo `.env` con las siguientes variables:
```bash
VITE_POLKADOT_ENDPOINT=https://onpop.io/api
VITE_AVALANCHE_RPC=https://api.avax-test.network/ext/bc/C/rpc
VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
```

### 4️⃣ Ejecutar el entorno de desarrollo
```bash
npm run dev
```

### 5️⃣ Desplegar contrato NFT Soulbound
Puedes usar el módulo de despliegue en `contracts/` o directamente:
- [deploypolkadot.xyz](https://www.deploypolkadot.xyz/)
- [onpop.io](https://onpop.io/)

Una vez desplegado, copia el **contract address** en el archivo `.env`.

---

## 🧩 Example User Flow

1. **Organizador Cultural** crea un evento desde la interfaz (nombre, fecha, descripción).  
2. **Artista** se registra conectando su wallet (Core o MetaMask).  
3. **Administrador** aprueba el evento y genera el contrato Soulbound.  
4. **NFT emitido** al artista → visible en wallet y explorador (Snowtrace / Subscan).  
5. **Panel cultural** muestra NFTs, reputación y recompensas.  

---

## 🧠 Dependencies and Technologies Used

| Capa | Tecnología / SDK |
|------|-------------------|
| **Blockchain Principal** | Polkadot SDK / JAM Runtime |
| **APIs / Herramientas** | `@polkadot/api`, Substrate Front-End Template |
| **Interoperabilidad** | Avalanche Fuji + Core Wallet |
| **Identidad y NFTs** | ERC-721 Soulbound + IPFS (metadatos culturales) |
| **Recompensas** | Tether WDK (USDT simulado) |
| **Frontend** | React + TailwindCSS |
| **Infraestructura Web3** | DeployPolkadot.xyz / Onpop.io |
| **Gráficos y visualización (Tinkerers)** | D3.js / Recharts |
| **Almacenamiento** | IPFS Gateway |

---

## 🧱 Architecture

```
User (Artist / Organizer / Public)
        ↓
Frontend React (Tailwind)
        ↓
API Layer → Polkadot SDK / JAM Runtime
        ↓
Smart Contracts (Soulbound NFTs + Rewards)
        ↓
Avalanche Fuji (Cross-chain Proof)
        ↓
IPFS Storage (Metadata cultural)
```

---

## 🌟 Real-World Impact

- Democratiza la trazabilidad cultural y artística.  
- Incentiva la colaboración descentralizada entre artistas y festivales.  
- Ofrece métricas verificables de impacto social usando Web3.  
- Promueve una visión ética y transparente de la cultura digital.

---

## 🎥 Optional Video Walkthrough

📺 *A 3–5 minute demo video showcasing the full flow:  
Artist → Organizer → Soulbound NFT → Reputation Dashboard.*

*(YouTube link will be added before final submission.)*

---

## 👥 Team

**Marcos Vinicio Reyes Muñoz** – Product Owner / Developer  
**CulturaGO Impact Team (Tu Partner TI)**  
Chile 🇨🇱 · 2025

---

## ✅ Status

- [x] User stories defined (Scrum methodology – 3 sprints)  
- [x] NFT Soulbound contract deployed (Avalanche Fuji)  
- [x] Runtime setup via Polkadot SDK / JAM  
- [x] Frontend wallet connection + NFT mint demo  
- [ ] Integration with Onpop.io endpoint  
- [ ] Final video submission
> *“La cultura también puede ser interoperable.”*  
> — CulturaGO · Powered by Polkadot & Avalanche
