# Blade & Co — лендинг барбершопа

Одностраничный лендинг барбершопа Blade & Co. Чистый HTML, CSS и ванильный JavaScript — без сборщиков и фреймворков, разворачивается на GitHub Pages в один клик.

## Что внутри

- **SEO**: расширенный набор `<meta>`-тегов (Open Graph, Twitter Card, canonical, robots), структурные данные [`schema.org/HairSalon`](https://schema.org/HairSalon) с услугами и рейтингом, `robots.txt` и `sitemap.xml`.
- **Производительность**: preload hero-картинки, `fetchpriority="high"`, `loading="lazy"` для галереи, шрифты с `&display=swap`.
- **Доступность**: `aria-label`/`aria-pressed`, корректная иерархия заголовков, skip-link, поддержка `prefers-reduced-motion`.
- **Дизайн**: новые секции — Галерея, Мастера с аватарами, FAQ; плавающая кнопка записи на мобильных; reveal-on-scroll анимации.
- **3 темы оформления с переключателем в шапке** (см. ниже).

## Переключатель тем (бонусное задание)

В правой части шапки — переключатель из трёх тем. Выбор сохраняется в `localStorage`.

| Тема | Когда подходит | Палитра |
| --- | --- | --- |
| **Классика** (по умолчанию) | Дефолтный тёмно-медный взгляд | `#b56b3f` медь · `#22201d` уголь |
| **Свет** | Минималистичный светлый вариант | `#2f63ff` индиго · `#ffffff` бумага |
| **Неон** | Современный, броский | `#00e8c4` мята · `#0a0a0f` тёмный |

Реализация — атрибут `data-theme` на `<html>`. Все цвета объявлены в CSS custom properties, переключение мгновенное и без перерисовки разметки. См. [styles.css](styles.css) и [script.js](script.js).

## Локальный запуск

Любой статический сервер подойдёт. Самый быстрый способ:

```bash
python3 -m http.server 8080
# открыть http://localhost:8080
```

## Публикация на GitHub Pages

1. Закоммитьте файлы в `main` (или любую ветку).
2. `Settings → Pages → Build and deployment → Deploy from a branch`.
3. Ветка `main`, папка `/ (root)`. Нажмите `Save`.

Ссылка получится вида:

```
https://<логин>.github.io/<имя-репозитория>/
```

## Структура

```
.
├── index.html          # разметка + JSON-LD + Open Graph
├── styles.css          # 3 темы через data-theme
├── script.js           # тема, форма, reveal-on-scroll
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── favicon.svg
└── assets/
    ├── hero-barbershop.webp
    └── hero-barbershop.png
```
