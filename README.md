# Frontend HackMeridian

Este é um projeto Next.js criado com App Router, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **ESLint** - Linter para JavaScript/TypeScript

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # Estilos globais com Tailwind
│   ├── layout.tsx      # Layout raiz da aplicação
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis
│   └── ui/            # Componentes de UI base
│       └── button.tsx # Componente Button
└── lib/               # Utilitários e helpers
    └── utils.ts       # Funções utilitárias
```

## 🛠️ Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Executar linter
npm run lint
```

## 🎯 Próximos Passos

1. Instale as dependências: `npm install`
2. Execute o projeto: `npm run dev`
3. Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Configurações

- **TypeScript**: Configurado com path mapping (`@/*` para `./src/*`)
- **Tailwind CSS**: Configurado para escanear arquivos em `src/`
- **ESLint**: Configurado com regras do Next.js
- **App Router**: Habilitado para usar a nova arquitetura de roteamento

## 🔧 Desenvolvimento

O projeto está configurado com:
- Hot reload automático
- TypeScript strict mode
- Tailwind CSS com classes utilitárias
- Estrutura de pastas organizada
- Componentes de UI base