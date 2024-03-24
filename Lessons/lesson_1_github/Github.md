*References*: [[020 IT MOC]]

---
*Related*:

---
*Tags*: #article #practice_to_do #exercise_to_do #github 

---
*Sources*: 

---
*Article extension:*

---
*Exercise link:*

---

## Questions

> [!faq]- Question template
#### Control questions


---

#### Additional questions



---

## Main content 

`Git` — это мощная система управления версиями, которая позволяет разработчикам отслеживать изменения в файлах и сотрудничать над проектами любого размера.

### Основные команды

#### Настройка и Конфигурация

- `git config`: Используется для настройки параметров Git на уровне пользователя или проекта, например, имя пользователя и email.

```bash
git config --global user.name "Ваше Имя"
git config --global user.email "your_email@example.com"
```

---
#### Создание и Клонирование Репозиториев

- `git init`: Инициализирует новый Git репозиторий в текущем каталоге.

```bash
git init
```

- `git clone [url]`: Клонирует репозиторий из указанного URL в новую директорию.

```bash
git clone https://github.com/example/repo.git
```

---
#### Основы Работы с Ветками

- `git branch`: Показывает список веток в репозитории или создает новую ветку.

```bash
git branch new-feature
```

- `git checkout [branch-name]`: Переключается на указанную ветку.

```bash
git checkout new-feature
```

- `git merge [branch]`: Сливает указанную ветку с текущей веткой.

```bash
git merge new-feature
```

---
#### Основные Операции

- `git add [file]`: Добавляет файлы в индекс (подготавливает их к коммиту).

```bash
git add .
```

- `git commit -m "[commit message]"`: Создает коммит с введенным сообщением.

```bash
git commit -m "Initial commit"
```

- `git push [alias] [branch]`: Отправляет коммиты в удаленный репозиторий.

```bash
git push origin main
```

- `git pull [alias] [branch]`: Получает изменения с удаленного репозитория и сливает их с текущей веткой.

```bash
git pull origin main
```

---
#### Инспекция и Сравнение

- `git status`: Показывает состояние файлов в рабочем каталоге и индексе.

```bash
git status
```

- `git log`: Выводит историю коммитов для текущей ветки.

```bash
git log
```

- `git diff`: Показывает различия между файлами в рабочем каталоге и индексе.

```bash
git diff
```

---
#### Откат Изменений

- `git checkout -- [file]`: Отменяет изменения в файле, возвращая его к последнему состоянию в индексе.

```bash
git checkout -- myfile.txt
```

- `git reset [file]`: Убирает файл из индекса (но не отменяет изменения в самом файле).

```bash
git reset myfile.txt
```

- `git revert [commit]`: Создает новый коммит, который отменяет изменения указанного коммита.

```bash
git revert a1b2c3d
```

### Создание `ssh` ключа

#### Создание SSH-ключа на `macOS`:

1. Откройте Терминал.
2. Запустите следующую команду, заменив `"your_email@example.com"` на ваш email, ассоциированный с вашим аккаунтом GitHub:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Следуйте инструкциям на экране. Когда вас спросят, куда сохранить новый ключ, можно нажать Enter, чтобы использовать значение по умолчанию.

3. Запустите ssh-agent в фоновом режиме:

```bash 
eval "$(ssh-agent -s)"
```

4. Добавьте ваш SSH-ключ в `ssh-agent`:

```bash
ssh-add -K ~/.ssh/id_rsa
```

---
#### Создание SSH-ключа на Windows:

На Windows процесс немного отличается, особенно если вы используете Git Bash или другой эмулятор терминала.

1. Запустите Git Bash. Если у вас не установлен Git, скачайте и установите его с официального сайта [Git](https://git-scm.com/).
2. Запустите команду для создания нового SSH-ключа, используя ваш email от GitHub:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Следуйте инструкциям, как и на macOS.

3. Запустите `ssh-agent` в фоновом режиме:

```bash
eval $(ssh-agent -s)
```

4. Добавьте ваш SSH-ключ в `ssh-agent`:

```bash
ssh-add ~/.ssh/id_rsa
```

---
#### Добавление SSH-ключа в ваш GitHub аккаунт (Windows и macOS):

1. Скопируйте содержимое файла публичного ключа в буфер обмена. Для этого можно использовать следующую команду в терминале или Git Bash:

```bash
pbcopy < ~/.ssh/id_rsa.pub  # macOS
clip < ~/.ssh/id_rsa.pub    # Windows
```

2. Войдите в ваш аккаунт на GitHub.
3. Перейдите в раздел "Settings" → "SSH and GPG keys" → "New SSH key".
4. В поле "Title" введите описательное название для ключа.
5. В поле "Key" вставьте содержимое буфера обмена.
6. Нажмите "Add SSH key".