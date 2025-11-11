# 01 Components

## Вимоги до проекту

1. Стилізація тільки через `css modules` або `tailwindcss`.
2. Файли компонентів називаємо з маленької букви, різні слова розділяємо через **-**, наприклад `post-card.tsx`.
3. Функції компоненти називається через **PascalCase**, наприклад `PostCard`.
4. Всі компоненти мають знаходитись в папці `src/components`.
5. Кожен компонент має бути в окремому файлів.
6. Код має бути відформатований за допомогою `prettier`.
7. Код має бути охайний і читабельний, змінні, пропси та компоненти називати зрозуміло.
8. При здачі потрібно задеплоїти сайт на [Netlify](https://netlify.com) - [Відео інструкція](https://youtu.be/QiUQsamnaUU).

   Робити білд та деплоїти потрібно тільки після завершення роботи над домашкою та посилання на задеплоєний сайт потрібно прикріпити в коментарі до пул реквесту.

## Ініціалізація проекту

1. Створити новий проект в цій папці з назвою . щоб файли проекту були в папці `react-course-hw`.
2. При створенні проекту вибрати `Ignore files and continue` щоб не пропав цей файл.
3. Запустити проект за допомогою команди `npm run dev`.

## Дизайн

- [Figma](https://www.figma.com/design/3GJrBLnHa4Ux2fIedy7YiY/React-Homework?node-id=1-2&t=zp2EksmpRpfERMpo-1)

## Завдання

1. Створити компонент `PostsList` з такими пропсами для рендеру списку постів:

```tsx
interface PostsListProps {
  children: React.ReactNode;
}
```

2. Створити компонент `PostCard` для рендеру картки поста:

```tsx
interface PostCardProps {
  avatarUrl: string;
  displayName: string;
  username: string;
  createdAt: string;
  text?: string;
  imageUrl?: string;
  isOnline?: boolean;
  isLiked?: boolean;
}
```

3. Зарендерити компоненти в `App.tsx` за прикладом передаючи відповідні пропси:

```tsx
function App() {
  return (
    <PostsList>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsList>
  );
}
```

4. Якщо не передати пропси `imageUrl` або `text` не потрібно рендерити тег зображення або тексту.
