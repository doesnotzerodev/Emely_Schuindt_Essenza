# Dra. Emely Schuindt — Protocolo ESSENZA

Landing page para a Dra. Emely Schuindt, especialista em Harmonização Facial e autora do Protocolo ESSENZA. Dourados/MS.

**Live:** [draschuindt.com.br](https://www.draschuindt.com.br)

> ✅ **Entregue em 22/07/2026.** Site publicado no domínio oficial `draschuindt.com.br` com HTTPS ativo (Let's Encrypt), hospedado na Vercel.

---

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS 4
- **Backend:** Express (helmet, rate-limit, CORS) — opcional, para API de leads
- **Deploy:** Vercel (site estático)
- **Design:** Liquid glass, scroll reveal, animações CSS

## Estrutura

```
├── public/          → Servido na raiz do site
│   ├── assets/      → Fotos (dra, resultados, feedbacks, avatars)
│   │   └── posters/ → Thumbnails dos vídeos
│   ├── videos/      → Vídeos .mp4 (conteúdo Instagram)
│   ├── robots.txt   → SEO
│   ├── sitemap.xml  → SEO
│   └── favicon.svg
├── src/
│   ├── components/  → Header, Hero, TrustBar, Sobre, Protocolo, ComoFunciona,
│   │                  Resultados, Educacional, Videos, Depoimentos,
│   │                  InstagramFeed, Faq, Contato, Footer, FloatingButtons,
│   │                  FormOverlay
│   ├── hooks/       → useReveal (intersection observer)
│   ├── constants.js → Dados centralizados (WhatsApp, Instagram, FAQ, vídeos)
│   ├── index.css    → Design system + tokens
│   ├── App.jsx      → Layout + FormContext
│   └── main.jsx     → Entry point
├── server/          → Express backend (API leads) — não usado no deploy estático
├── index.html       → SEO, OG tags, JSON-LD, verificação Google
├── vercel.json      → Config de deploy + headers de segurança
└── vite.config.js
```

## Rodar local

```bash
npm install
npm run dev        # dev server em localhost:3000
```

## Build + Produção

```bash
npm run build      # gera dist/ (o que a Vercel publica)
npm run preview    # pré-visualiza o build local
```

## Deploy

Deploy automático na **Vercel** a cada push na branch `main`.

- **Domínio:** `draschuindt.com.br` (apex redireciona para `www`)
- **DNS:** Registro.br → `A @ 216.198.79.1` e `CNAME www 7eb36920788c90eb.vercel-dns-017.com`
- **SSL:** emitido automaticamente pela Vercel

## SEO

- Meta tags, Open Graph e Twitter Card configurados (`index.html`)
- Dados estruturados JSON-LD (`MedicalBusiness`) para busca local
- `robots.txt` + `sitemap.xml`
- Verificação do Google Search Console (meta tag + arquivo HTML)

## Configurações pendentes (dependem de dados do cliente)

- Substituir `G-XXXXXXX` no `index.html` pelo ID do Google Analytics (bloco comentado)
- Substituir `PIXEL_ID` no `index.html` pelo ID do Meta Pixel (bloco comentado)
- Concluir verificação no Google Search Console e enviar o sitemap
- Criar/verificar o Perfil da Empresa no Google (busca local + Maps)

## Atualizar conteúdo

- **Fotos:** Trocar/adicionar em `public/assets/` e referenciar nos componentes
- **Vídeos:** Adicionar `.mp4` em `public/videos/`, poster em `public/assets/posters/`, e no array `VIDEOS` em `src/constants.js`
- **Textos/FAQ:** Editar `src/constants.js`
- **WhatsApp/Instagram:** Editar constantes no topo de `src/constants.js`
  - Mensagem padrão dos botões de WhatsApp: `WHATSAPP_DEFAULT_MESSAGE`

---

Desenvolvido por [DNZ](https://dnzcentral.com.br)
