# CI example  [![Build Status](https://travis-ci.com/geekbrains-web/example-travis-ci.svg?branch=master)](https://travis-ci.com/geekbrains-web/example-travis-ci)

Пример непрерывной интеграции (CI) приложения на Node.js используя Travis CI

Демонстрация процесса сборки: [Job log](https://travis-ci.com/geekbrains-web/example-travis-ci)

## Краткое описание настройки
Для начала нам нужно зарегестрироваться на сервисе [Travis CI](https://travis-ci.com) и дать доступ приложению к своим репозиториям/репозиторию в интерфейсе GitHub. 

После этого, необходимо настроить выбранный репозиторий – создать в нем файл `.travis.yml` с необходимыми настройками. Подробно изучить настройки можно в [официальной документации](https://docs.travis-ci.com).

## Продвинутые возможности
Есть возможность запустить базы данных и протестировать ваше приложение вместе с ними. Пример работы с MongoDB вы можете увидеть в [Pull request #1](https://github.com/geekbrains-web/example-travis-ci/pull/1). Более подробно и интеграции с другими сервисами указаны в [документации](https://docs.travis-ci.com/user/database-setup/)

Кроме того, есть возможность настроить deployment на сервер, например, только когда вы вносите изменения в ветку мастер. Более подробно в [документации](https://docs.travis-ci.com/user/deployment/)
