This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Task

* Сделать приложение на связке `next.js` `ant.design`
* Форму авторизации которую предлагает сделать `antd`
* В ней будет валидация входящих данных: `логин и пароль`
* Логин это `email`, а пароль должен быть минимум 6 символов и иметь 1 букву
* Должна быть галочка `запомнить меня`
* Реализовывать авторизацию на бекенде не надо, просто делаем проверку заведомо известных
  данных: `(Логин: admin@test.ru, пароль: 12345678qwe)`
* После удачной авторизации открывать страницу `Личного профиля`
* Сверстать самостоятельно с помощью подходящих по вашему мнению компонентов `antd`
* В личном профиле должны отображаться данные: `Имя`, `Фамилия`, `Email`, `Фотография`, `Дата рождения`,
  и `таблица последних сессий` (статичных данных заполненая вами)`Номер сессии`, и время в какое она была активна (5
  строк будет достаточно)
* Также в профиле реализовать рабочую кнопку Выхода.
* Сохранить состояние авторизации если установлена галочка `Запомнить меня`, и после перезагрузки страницы не
  запрашивать авторизацию по новой, а показывать Личный профиль.
* Адаптивная верстка

> По вопросам по заданию можно обращаться к @monkariarti, а так же сдавать ему по выполнению

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
