# MLN131 - Chủ nghĩa xã hội khoa học

Website học tập về Chủ nghĩa xã hội khoa học và thời kỳ quá độ lên CNXH.

## Công nghệ sử dụng

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Inter & Noto Sans fonts

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Deploy lên Cloudflare Pages

### Cách 1: Qua Cloudflare Dashboard (Khuyến nghị)

1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**
2. Chọn **Connect to Git**
3. Chọn repository: `lordquann/MLN131_Group2`
4. Cấu hình build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (để trống)
   - **Node version**: `18` hoặc `20`

### Cách 2: Qua Wrangler CLI

```bash
# Build project
npm run build

# Deploy
npx wrangler pages deploy dist
```

## Cấu trúc project

```
├── public/          # Static files và images
├── src/
│   ├── components/  # React components
│   │   ├── pages/   # Page components
│   │   └── ui/      # UI components
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
└── dist/            # Build output (tự động tạo)
```

## Features

- 📚 Trang Lý thuyết với carousel
- 💡 Trang Vận dụng với nội dung chi tiết
- 🏛️ Trang Triển lãm 3D
- 🎨 UI/UX hiện đại với animations
- 📱 Responsive design
- 🌐 Hỗ trợ tiếng Việt với fonts Inter & Noto Sans 
