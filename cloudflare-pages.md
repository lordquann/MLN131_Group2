# Hướng dẫn Deploy lên Cloudflare Pages

## Cấu hình trong Cloudflare Pages Dashboard

1. Vào **Cloudflare Dashboard** → **Pages** → **Create a project**
2. Chọn **Connect to Git**
3. Chọn repository: `lordquann/MLN131_Group2`
4. Cấu hình build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (để trống hoặc `/`)
   - **Node version**: `18` hoặc `20`

## Hoặc sử dụng Wrangler CLI

Nếu bạn muốn deploy bằng CLI, tạo file `wrangler.toml`:

```toml
name = "mln131-group2"
compatibility_date = "2026-01-08"

[site]
bucket = "./dist"
```

Sau đó chạy:
```bash
npm run build
npx wrangler pages deploy dist
```

## Lưu ý

- File `_redirects` đã được tạo trong `public/` để handle SPA routing
- Build output sẽ tự động copy file `_redirects` vào `dist/`
- Đảm bảo Node.js version >= 18
