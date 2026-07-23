import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const app = express();
const PORT = process.env.PORT || 4000;

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://connect.facebook.net"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:", "https://www.facebook.com"],
        mediaSrc: ["'self'", "blob:"],
        frameSrc: ["'self'", "https://www.google.com"],
        connectSrc: ["'self'", "https://www.google-analytics.com", "https://www.facebook.com"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// CORS
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Muitas requisições. Tente novamente em alguns minutos." },
});
app.use("/api/", limiter);

// Body parsing
app.use(express.json({ limit: "10kb" }));

// API route — contact form (stores leads or forwards to webhook)
app.post("/api/contact", (req, res) => {
  const { nome, telefone, cidade, idade, instagram, procedimento, objetivo, origem, mensagem } = req.body;

  if (!nome || !telefone) {
    return res.status(400).json({ error: "Nome e telefone são obrigatórios." });
  }

  // Sanitize
  const sanitize = (s) => (typeof s === "string" ? s.slice(0, 500).trim() : "");

  const lead = {
    nome: sanitize(nome),
    telefone: sanitize(telefone),
    cidade: sanitize(cidade),
    idade: sanitize(idade),
    instagram: sanitize(instagram),
    procedimento: sanitize(procedimento),
    objetivo: sanitize(objetivo),
    origem: sanitize(origem),
    mensagem: sanitize(mensagem),
    timestamp: new Date().toISOString(),
  };

  // TODO: Persist to DB or forward to webhook
  console.log("[LEAD]", lead);

  res.json({ ok: true, message: "Lead recebido com sucesso." });
});

// Serve static assets (images, videos, posters)
app.use("/assets", express.static(join(ROOT, "public/assets"), { maxAge: "30d" }));
app.use("/videos", express.static(join(ROOT, "public/videos"), { maxAge: "7d" }));

// Serve built frontend
app.use(express.static(join(ROOT, "dist"), { maxAge: "1d" }));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(join(ROOT, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
