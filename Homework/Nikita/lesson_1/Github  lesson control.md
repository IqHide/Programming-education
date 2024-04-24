Name: 

---
## *Control questions for today's lesson*:


1. Что такое гит?
2. Зачем он нужен?

3. Как инициализировать локальный репозиторий? 
4. Как связать локальный и удалённый репозиторий? 
5. Как мне создать и отправить файл с моего локального реп. в удалённый?
6. Как стянуть последние обновления с удалённой ветки?
7. Что такое ветки в git?
8. Как создать ветку на удалённом репозитории?
9. Как переключиться на ветку?
10. Как влить ветку на удалённый репозиторий? 
11. Как слить 2 ветки в 1?
12. Что такое merge conflict?
13. Как зарезолвить merge conflict?
14. Что такое пул реквест?
15. Как создать пр?
16. Как откатить commit?

## *Answers*: 
1. Система контроля версий
2. Чтобы неколько разработчиков эффективнее работали вместе, было легче поддерживать и следить за версиями систему
3. git init
4. git remote origin main, есть точные команды при создании репозитория на гитхабе
5. Закоммитить, потом запушить
6. git pull
7. это отдельные версии программы
8. git branch -d branch_name
9. git checkout branch_name
10. git push origin branch_name
11. git merge another_branch_name
12. когда изменения одного и того же файла из разных веток могут противоречить друг другу
13. удобно это делать в интерфейсе IDE-шки, а в терминале нужно поправлять файлики с конфликтами
14. запрос на изменения репозитория в гитхабе
15. запушить изменения на форк, и на сайте отправить pull request
16. git rm с какими-то флагами
