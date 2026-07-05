# Dra. Emely Schuindt — Protocolo ESSENZA

Landing page para a Dra. Emely Schuindt, especialista em Harmonização Facial e autora do Protocolo ESSENZA. Dourados/MS.

**Live:** [emely-schuindt-essenza.vercel.app](https://emely-schuindt-essenza.vercel.app)

---

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS 4
- **Backend:** Express (helmet, rate-limit, CORS)
- **Deploy:** Vercel
- **Design:** Liquid glass, scroll reveal, animações CSS

## Estrutura

```
├── assets/          → Fotos otimizadas (dra, resultados, feedbacks, avatars)
│   └── posters/     → Thumbnails dos vídeos
├── videos/          → Vídeos .mp4 (conteúdo Instagram)
├── src/
│   ├── components/  → Header, Hero, TrustBar, Sobre, Protocolo, ComoFunciona,
│   │                  Resultados, Educacional, Videos, Depoimentos,
│   │                  InstagramFeed, Faq, Contato, Footer, FloatingButtons,
│   │                  FormOverlay
│   ├── hooks/       → useReveal (intersection observer)
│   ├── constants.js → Dados centralizados
│   ├── index.css    → Design system + tokens
│   ├── App.jsx      → Layout + FormContext
│   └── main.jsx     → Entry point
├── server/          → Express backend (API leads, static serve)
├── index.html       → SEO, OG tags, Analytics
└── vite.config.js
```

## Rodar local

```bash
npm install
npm run dev        # dev server em localhost:3000
```

## Build + Produção

```bash
npm run build      # gera dist/
npm start          # Express em localhost:4000 (serve dist + assets + videos)
```

## Configurações pendentes

- Substituir `G-XXXXXXX` no `index.html` pelo ID do Google Analytics
- Substituir `PIXEL_ID` no `index.html` pelo ID do Meta Pixel
- Domínio custom na Vercel (quando a cliente tiver)

## Atualizar conteúdo

- **Fotos:** Trocar/adicionar em `assets/` e referenciar nos componentes
- **Vídeos:** Adicionar `.mp4` em `videos/`, poster em `assets/posters/`, e adicionar no array `VIDEOS` em `src/constants.js`
- **Textos/FAQ:** Editar `src/constants.js`
- **WhatsApp/Instagram:** Editar constantes no topo de `src/constants.js`

---

Desenvolvido por [DNZ](https://dnzcentral.com.br)
