> [!сноска]- 
>![[GitBranching1.pdf]]

master - ветка *стабильного* проекта.
Новые функции обычно разрабатываются в смежных ветках.
Fast - Forward merge - слияние без конфликтов. Не создается отдельный merge commit.
~~Fast - Forward merge~~ - слияние с конфликтом. Создается отдельный merge commit.
****
git branch название_ветки - создание ветки.
git branch - посмотреть на какой ветке находимся.(где указатель HEAD)
git branch -d  - удалить текущую ветку.
git checkout название_ветки - переключение между ветками.
git merge - сливает одну ветку с другой.%%завершили работу с почкой, переходим на мастер(git checkout master), выполняем слияние(git merge название_почки).%%
$ git push --delete origin add-feature1 - удаление ветки с гита

****
###### git pull / git fetch
> [!сноска]- 
>![[GitPullvsFetch.pdf]]

git fetch  - скачивает, но не производит актуализацию моей локальной ветки.

git pull = git fetch + git merge origin/master

****
#### Конфликт слияния
> [!сноска]- 
>![[GitMergeConflicts.pdf]]

****
#### Удаленные ветки
> [!сноска]- 
>![[GitRemoteBranch.pdf]]

git remote show название_репозитория (origin) - информация о ветках в проекте.
