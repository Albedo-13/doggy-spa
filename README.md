# Modsen Doggy Spa

## Деплои

- **[Деплой проекта](https://doggy-spa-albedo.netlify.app/)** - Проект развернут на Netlify
- **[Allure отчет](https://albedo-13.github.io/doggy-spa/)** - Отчет Allure развернут на Github Pages (gh-pages)

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Используемые технологии](#Используемые-технологии)
- [Необходимый функционал](#Необходимый-функционал)
- [Дополнительный функционал](#Дополнительный-функционал)
- [Описание экранов](#Описание-экранов)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать React приложение "Modsen Doggy Spa" по предоставленному дизайну из Figma с использование server-side rendering(NextJS) и GraphQl.

## API

Список API для использования(если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые
другие открытые API для поиска информации о собаках):

- **_[API DOGS](https://api-ninjas.com/api/dogs)_** - данные о собаках.

## Используемые технологии

- **_yarn_** - менеджер пакетов;
- **_TS_** - инструмент строгой типизации;
- **_react-router-dom_** - инструмент управления состоянием;
- **_email-js_** - библиотека позволяющая отправлять электронные письма на почту;
- **_styled-components_** - система стилизации react компонентов;
- **_cypress_** — e2e тестирование для web-приложений;
- **_jest_** — unit-тестирование;
- **_yup_** - библиотека для валидации форм;
- **_nextJS_** - фреймворк на JavaScript, использующий React для построения server-side render;
- **_GraphQL_** - язык запросов для взаимодействия клиента и сервера, а также среда исполнения этих запросов;
- **_Apollo_** - открытый соответствующий спецификации GraphQL-сервер;
- **_paypal-js_** - библиотека для подключения PayPal.

## Необходимый функционал:

Приложение должно предоставлять возможность:

- отправки писем на электронную почту;
- просмотр интерактивной карты;
- смены языка (продумать самостоятельно);
- поиск информации о собаке с реализацией elastic search.

## Дополнительный функционал

- Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions);
- Собрать проект с нуля (с настройками всех конфигов: eslint, prettier, husky и тд.).

### Пример графического представления:

Ссылка на макет: [Макет "Modsen Doggy Spa"](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=0-1&t=trQ4MSsKK7EV56dv-0).

### Также проект предполагает:

- Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure);
- Создание своего сервера на GraphQL;
- Обработку ошибок через паттерн _"Error Boundaries"_;
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- Использование алиасов для импортирования файлов;
- Реализация должна быть выполнена без использования UI библиотек;
- Обязательная валидация всех текстовых полей с использованием _yup_;
- Оптимизацию дизайна под мобильные устройства;
- Покрытие тестами всего приложения (cypress, jest, ...);
- Создание UI библиотеки компонентов, используя storybook;
- Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле;
- Творчество в контексте анимации, помимо обязательной выше, приветствуется.

## Описание экранов

Каждая страница содержит в шапке профиля навигацию по страницам сайта, а также в подвале сайта
должна быть реализована форма отправки сообщения на электронную почту выполняющего.

1. [Главная Home](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-16057&t=trQ4MSsKK7EV56dv-0).
   В блоке "Your dog running amok in the dirt?" при нажатии на кнопку "Book Appointment" происходит переход на страницу Book Appointment.
   В блоке "Sign Up to Bark Newsletter" должна быть реализована форма отправки сообщения на выбранную почту.

2. [Главная Shop Products](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-16378&t=trQ4MSsKK7EV56dv-0).
   На странице должна быть возможность поиска информации о собаке, которую ввел пользователь. Поиск должен быт реализован с помощью elastic search.
   При некорректном поиске должна отображаться ошибка или запасной UI.

3. [Главная Spa Packages](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-15485&t=trQ4MSsKK7EV56dv-0).
   На данной странице должна отображаться информация об услугах салона.

4. [Главная Book Appt Page](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-16786&t=trQ4MSsKK7EV56dv-0).
   На данной странице должна отображаться интерактивная карта, она является интерактивной, на которой отображаются точки (минимум 3) удаленные друг от друга (точки определяет выполняющий).
   В блоке "Enter your information here" должна быть реализована отправка формы со своим шаблоном.
   В блоке "Choose a timeslot on Dec." можно выбрать удобное время для услуг и добавить календарь для отображения и выбора даты.
   В блоке "Enter your payment information" должно открываться модальное окно с введенными пользователям данными о банковской карте с возможность оплаты с помощью PayPal.
   При нажатии на кнопку "Book Appointment", которая отвечает за букинг, должно открывать модальное окно, где будет отображаться вся выбранная пользователем информация о времени, дате, комментарии и после успешного подтверждения данные сохраняется в LocalStorage.

5. [Главная Blog](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-15572&t=trQ4MSsKK7EV56dv-0).

6. [Главная About As](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-15255&t=trQ4MSsKK7EV56dv-0)

7. [Главная Contact Us](https://www.figma.com/file/V2FX9rcQ2AUAuhrTSN3EwO/Modsen-Doggy-Spa?node-id=1-15667&t=trQ4MSsKK7EV56dv-0)
   На данной странице должна быть возможность реализации отправки письма с введенными данными на выбранную почту.

## Тестирование

Реализовать тестирование c полным покрытием функционала приложения:

- Модуль навигации;
- Модуль поиска;
- Модуль оплаты;
- Модуль введенных данных для букинга.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[GraphQL](https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/)

[Styled-components](https://www.styled-components.com/docs)

[React redux](https://react-redux.js.org/introduction/quick-start)

[NextJS](https://nextjs.org/docs)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Email-js](https://www.emailjs.com/docs/examples/reactjs/)

[Yup](https://www.npmjs.com/package/yup)

[Storybook](https://dev.to/iamrishupatel/how-to-create-a-react-component-library-using-storybook-typescript-scss-and-rollup-4pin)

[next-intl](https://next-intl-docs.vercel.app/)

[GitHub Actions](https://github.com/features/actions)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)
