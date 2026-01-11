# 🚀 NativeNest Starter Kit

**NativeNest Starter Kit** is a high-performance, monorepo-based template for building modern full-stack applications. It combines the power of **Expo (React Native)** for cross-platform mobile & web with **NestJS** for a robust, scalable backend.

Built for developer experience, it leverages **Turborepo**, **pnpm**, **Prisma**, and **Tailwind CSS (NativeWind)** to provide a professional foundation for your next big project.

---

## ✨ Features

- **Monorepo Architecture**: Clean separation of concerns with shared logic and types, managed by **pnpm Workspaces** and **Turborepo**.
- **Universal Frontend**: One codebase for Android, iOS, and Web using **Expo** and **React Native Web**.
- **Native Styling**: Rapid UI development with **NativeWind v4** (Tailwind CSS for React Native).
- **Type-Safe Backend**: Scalable API development with **NestJS** and TypeScript.
- **Modern ORM**: Seamless database interactions with **Prisma** and **PostgreSQL**.
- **Unified Environment**: Centralized `.env` management using symlinks across the monorepo.
- **Modern UI Components**: Pre-configured with **Gluestack UI v3** and **NativeWind** for beautiful, accessible components.
- **Fast Development**: Incremental builds and zero-overhead caching powered by Turborepo.

---

## 🛠️ Tools and Technologies

- **[Expo](https://expo.dev/)**: Universal React framework.
- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework.
- **[Gluestack UI](https://gluestack.io/ui)**: Beautiful, fast, and accessible UI components for React, React Native, and Web.
- **[Turborepo](https://turbo.build/)**: High-performance build system for JavaScript/TypeScript monorepos.
- **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager.
- **[Prisma](https://www.prisma.io/)**: Next-generation Node.js and TypeScript ORM.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework (via NativeWind).
- **[PostgreSQL](https://www.postgresql.org/)**: Powerful, open source object-relational database system.
- **[Docker](https://www.docker.com/)**: Containerization for the database and development environment.

---

## 📁 Project Structure

```text
.
├── apps/
│   ├── mobile/       # Expo App (React Native for iOS, Android & Web)
│   │   └── components/ui # Gluestack UI Components
│   └── server/       # NestJS API (Backend)
├── packages/
│   └── database/     # Prisma Schema & Client (Shared Package)
├── .env              # Master Environment Variables
├── .env.example      # Template for Environment Variables
├── pnpm-workspace.yaml
└── turbo.json
```

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js**: v20+
- **pnpm**: `npm install -g pnpm`
- **Docker**: For running the database.

### 2. Installation

Install all dependencies for the entire monorepo:

```bash
pnpm install
```

### 3. Environment Setup

We use a **Single Source of Truth** for environment variables via symbolic links.

1. Create a `.env` file in the root directory (you can use `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```
2. Link it to the sub-projects (required for Linux/macOS):

```bash
ln -s ../../.env apps/server/.env
ln -s ../../.env apps/mobile/.env
ln -s ../../.env packages/database/.env
```

### 4. Database Setup

Start the PostgreSQL container:

```bash
pnpm infra:up
```

Sync your database schema with Prisma:

```bash
pnpm db:push
```

### 5. Start Development

Run all services (Database, NestJS, Expo) in parallel with a single command:

```bash
pnpm dev
```

---

## ✨ UI Components (Gluestack UI)

This project uses **Gluestack UI v3** with **NativeWind**. Components are located in `apps/mobile/components/ui`.

### Adding new components via CLI

You can easily add new pre-styled components using the Gluestack CLI. Run the following command inside the root directory:

```bash
# Add a specific component (e.g., Alert)
npx gluestack-ui@latest add alert
```

The CLI will automatically download the component and place it in the `apps/mobile/components/ui` directory, ready to be used and customized.

For a full list of available components and their usage details, check the official documentation:
👉 **[Gluestack UI Components Documentation](https://gluestack.io/ui/docs/components/layout/box)**

---

## 📖 Available Scripts

| Command            | Description                                                              |
| :----------------- | :----------------------------------------------------------------------- |
| `pnpm dev`         | Starts Docker infra and runs all apps in dev mode (watch).               |
| `pnpm dev:full`    | Starts infra, runs migrations (db:migrate), and starts development mode. |
| `pnpm infra:up`    | Starts the Docker containers (PostgreSQL).                               |
| `pnpm infra:down`  | Stops the Docker containers.                                             |
| `pnpm db:generate` | Generates the Prisma Client.                                             |
| `pnpm db:push`     | Pushes the Prisma schema to the database (without migrations).           |
| `pnpm db:migrate`  | Creates and applies a migration to the database.                         |
| `pnpm db:reset`    | Resets the database and reapplies all migrations.                        |
| `pnpm build`       | Builds all packages in the monorepo.                                     |
| `pnpm rebuild`     | Reinstalls all dependencies and builds all packages.                     |
| `pnpm lint`        | Runs linting across the entire project.                                  |

---

## 🇧🇷 Resumo (Português)

O **NativeNest** é um starter kit focado em alta performance e escalabilidade. Utiliza o conceito de monorepo para unir o melhor do ecossistema Mobile (Expo) e Backend (NestJS), compartilhando tipos e lógica de banco de dados (Prisma) de forma eficiente. A interface é construída com **Gluestack UI** e **NativeWind**, permitindo o desenvolvimento rápido de UIs modernas e responsivas.

---

## 📝 License

This project is [MIT licensed](LICENSE).
