# ✅ Task Manager – Application de gestion de tâches

Une application frontend responsive et moderne pour gérer vos tâches quotidiennes.
Réalisée avec **TypeScript**, **LightningCSS**, **HTML**, et **Vite**.

---

## 🚀 Lancement du projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/christophersemard/task-manager.git
cd task-manager
```

### 2. Pré-requis

Installer pnpm
```bash
npm install -g pnpm
```

### 2. Installer les dépendances

```bash
pnpm install
```

> * Node.js (v18+ recommandé)
> * Vite (déjà inclus dans le projet)
> * LightningCSS via `vite-plugin-lightningcss`

### 3. Lancer le projet

```bash
pnpm run dev
```

Accéder à l'application via l'url donnée dans le terminal

### 3. Build le projet

```bash
pnpm run build
```

puis le lancer 

```bash
pnpm run start
```

---

## 📂 Structure du projet

```txt
├── public/              # Fichiers statiques (favicon etc.)
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── TaskForm.tsx     # Formulaire d'ajout/modification
│   │   ├── TaskList.tsx     # Affichage des tâches
│   │   └── DeleteModal.tsx  # Boîte de confirmation
│   ├── types/           # Types TypeScript
│   ├── App.tsx          # Composant principal
│   └── styles.css       # Feuille de style LightningCSS
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## 👤 Réalisé par

**Christopher Semard**
Master Lead Dev Fullstack – Normandie Web School
Projet front évalué dans le cadre du cours LightningCSS
