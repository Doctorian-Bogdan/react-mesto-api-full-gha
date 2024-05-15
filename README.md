# Проект "Место"
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`. 

## Функциональность

- Регистрация/Авторизация
- Авторизация пользователя по cookie токену
- Хранение данных пользователей в БД, а так же их паролей в зашифрованном виде.
- Редактирование профиля, автара
- Добавление новых карточек и их удаление
- Возможность поставить/убрать лайк карточки
- Отслеживание принадлежности карточки
- Хранение всех карточек и их состояний в БД

## Технологии

### Frontend
<img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo"  />
<img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  />
<img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo"  />
<img src="https://skillicons.dev/icons?i=css" height="40" alt="css3 logo"  />

### Backend
<img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="nodejs logo"  />
<img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
<img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo"  />

## Запуск (Frontend)

Работает с версиями `NodeJS v18.17.0` и `npm 10.2.3`

1) Скачать архив с ветки Main
2) Разархивировать в любую папку
3) С помощью терминала git перейти в эту папку, затем в папку `/frontend`

4) Установить зависимости командой
```bash
  npm install
```
5) Собрать билд командой
```bash
  npm run build
```
6) Запустить билд командой
```bash
  npm run start
```
7) Клиент запустится на 3001 порту (поменяйте localhost на 127.0.0.1 в адресной строке) и будет посылать запросы на адрес `http://127.0.0.1:3000`

## Запуск (Backend)

Работает с версиями `NodeJS v18.17.0` и `npm 10.2.3`

1) Для корректной работы серера необходимо установить MongoDB версии 4.4.27
2) Скачать архив с ветки Main
3) Разархивировать в любую папку
4) С помощью терминала git перейти в эту папку, затем в папку `/backend`

5) Установить зависимости командой
```bash
  npm install
```
6) Запустить командой
```bash
  npm run start
```
7) Запустить MongoDB
8) Сервер по-умолчанию будет работать на 3000 порту (поменяйте localhost на 127.0.0.1 в адресной строке) и будет принимать запросы с адреса `http://127.0.0.1:3001`

## Ссылки на проект

IP 158.160.121.168

Frontend https://mesto.isachenko.nomoredomainsmonster.ru/

Backend https://api.mesto.isachenko.nomoredomainsmonster.ru/
