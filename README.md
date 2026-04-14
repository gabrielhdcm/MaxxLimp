# Maxx Limp - Landing Page

Landing page em **React + Tailwind CSS** para catálogo demonstrativo da empresa **Maxx Limp - Produtos de Limpeza**.

## Como rodar

1. Instale as dependências:
   - `npm install`
2. Rode em desenvolvimento:
   - `npm run dev`
3. Build de produção:
   - `npm run build`
4. Preview local do build:
   - `npm run preview`

## Estrutura principal

- `src/data/products.js`: catálogo simulado (nome, descrição, categoria, imagem)
- `src/components/`: componentes reutilizáveis
- `public/images/`: todas as imagens locais

## Troca de imagens (sem alterar código)

Basta substituir os arquivos mantendo os mesmos caminhos:

- Hero: `/public/images/hero/banner.jpg`
- Categorias:
  - `/public/images/categories/domestica.jpg`
  - `/public/images/categories/profissional.jpg`
  - `/public/images/categories/automotivo.jpg`
- Produtos: `/public/images/products/*.jpg`

## Observação importante

O número de WhatsApp está em `src/App.jsx` na constante `whatsappNumber`.
Altere para o número oficial da empresa no formato internacional, por exemplo: `5511999999999`.
