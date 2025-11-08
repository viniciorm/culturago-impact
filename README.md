# 🌍 CulturaGO Impact

> “La cultura también puede ser interoperable y recompensada.”

**CulturaGO Impact** es una plataforma Web3 creada sobre **Avalanche** que permite a **artistas, festivales y escuelas culturales**
emitir **Pasaportes Culturales NFT Soulbound** y otorgar **recompensas en USDT** utilizando **Tether WDK**.  
El objetivo es reconocer la participación cultural con trazabilidad, seguridad y valor real en blockchain.

---

## 🏆 Hackathon Details

🎯 **Evento:** Avalanche Build Hackathon 2025  
🧩 **Track:** Impacto Social & Comunidad + NFTs & Tether WDK  
🏗️ **Proyecto:** CulturaGO Impact  
💡 **País:** Chile 🇨🇱  
🧑‍💻 **Repositorio:** [github.com/viniciorm/culturago-impact](https://github.com/viniciorm/culturago-impact)

---

## 🚀 Descripción del Proyecto

**CulturaGO Impact** extiende el concepto original de *CulturaGO* para crear un ecosistema cultural interoperable sobre Avalanche.

- Cada **artista o participante** recibe un **NFT Soulbound** que certifica su trayectoria.
- Los **organizadores culturales** pueden gestionar eventos, inscripciones y emitir recompensas en **USDT**.
- Los **festivales, escuelas y comunidades culturales** validan la participación y reputación de manera pública y descentralizada.

El resultado:  
una **infraestructura de confianza cultural** con impacto social real.

---

## 🔧 Stack Tecnológico

| Componente | Tecnología | Descripción |
|-------------|-------------|--------------|
| **Blockchain** | Avalanche C-Chain (Fuji Testnet) | Red principal EVM-compatible, rápida y de bajo costo |
| **Smart Contracts** | Solidity + Hardhat | Emisión de NFTs Soulbound + módulo de recompensas USDT |
| **Frontend** | React + Vite + Ethers.js + Core Wallet SDK | Interfaz web para conexión y gestión de eventos |
| **Pagos** | Tether WDK | Implementación de pagos y recompensas en USDT |
| **Storage** | IPFS (Pinata) | Metadatos descentralizados de NFTs y eventos |
| **Backend (opcional)** | Node.js + AvalancheJS | API de soporte para registros y panel de administración |

---

## 🧩 Funcionalidades Principales

### 👩‍🎤 Para Artistas
- Registro mediante wallet (Core / MetaMask).  
- Inscripción en eventos y talleres culturales.  
- Recepción de NFTs Soulbound y recompensas en USDT.  
- Panel con historial cultural y reputación.

### 🏫 Para Organizadores
- Creación de eventos con capacidad y fechas.  
- Aprobación o rechazo de inscripciones.  
- Emisión de NFTs a participantes.  
- Pagos automáticos vía Tether WDK.

### 👥 Para Comunidad y Público
- Consulta pública de artistas y eventos verificados.  
- Compra de tickets Web3 (versión extendida).  
- Verificación de logros y trayectoria cultural.

---

## 🧱 Estructura del Repositorio

```
/culturago-impact
│
├── README.md
├── LICENSE
├── .gitignore
│
├── /frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Eventos.jsx
│   │   │   ├── Panel.jsx
│   │   │   └── WalletConnect.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── /contracts
│   ├── SimpleNFT.sol
│   ├── hardhat.config.js
│   └── scripts/deploy.js
│
├── /docs
│   ├── user_stories.md
│   ├── market_study_danza_latam_v2.md
│   ├── Pitch_CulturaGO_Guion.md
│   └── desarrollo_blockchain_avalanche.md
│
└── /demo
    ├── mock_contract.js
    └── sample_demo_flow.txt
```

---

## ⚙️ Instrucciones de Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/viniciorm/culturago-impact.git
cd culturago-impact/frontend
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar la aplicación local
```bash
npm run dev
```

### 4️⃣ Desplegar contrato (opcional)
```bash
cd ../contracts
npx hardhat run scripts/deploy.js --network fuji
```

---

## 🧩 Flujo de Usuario (MVP Hackathon)

1. **Organizador crea evento** cultural.  
2. **Artista se inscribe** con su wallet.  
3. **Organizador aprueba inscripción**.  
4. **NFT Soulbound** emitido al artista.  
5. **Recompensa en USDT** entregada vía Tether WDK.  
6. **Historial cultural visible** en el panel.

---

## 🎥 Video Demo (en preparación)
🎬 *Se mostrará conexión wallet, registro, inscripción y emisión NFT en Fuji Testnet.*  
*(Link YouTube o Loom será agregado antes de la entrega final)*

---

## 📈 Roadmap Post-Hackathon

| Fase | Objetivo | Estado |
|------|-----------|--------|
| MVP cultural (NFTs + USDT) | Funcional para demo | ✅ |
| Panel organizador y artista | Gestión visual | ⚙️ |
| Ticketera Web3 (NFTs transferibles) | Monetización cultural | 🔜 |
| DAO CulturaGO | Gobernanza descentralizada | 🔜 |
| Integraciones con festivales reales | Piloto FDVC Chile | 🔜 |

---

## 👥 Equipo

- **Marcos Reyes (@viniciorm)** — Product & Blockchain Strategy  
- **FDVC Chile** — Validación comunitaria y red de artistas  
- **Tu Partner TI & Broders Producción** — Soporte técnico y audiovisual  

---

## 📚 Referencias

- [Avalanche Docs](https://docs.avax.network/)  
- [Tether WDK](https://github.com/tether/avalanche-wdk)  
- [Hardhat](https://hardhat.org/)  
- [Ethers.js](https://docs.ethers.io/)  
- [Solidity Docs](https://docs.soliditylang.org/)  

---

## 🪪 Licencia
Este proyecto está bajo licencia **MIT**.  
© 2025 CulturaGO Impact — Proyecto de hackathon sin fines de lucro.

---

### 🌟 “Recompensando la participación cultural con trazabilidad y valor real sobre Avalanche.”
