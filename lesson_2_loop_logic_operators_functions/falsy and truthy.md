**Ложноподобное** (**falsy**) значение — значение, которое становится `false` в [булевом](https://developer.mozilla.org/ru/docs/Glossary/Boolean) контексте.

[JavaScript](https://developer.mozilla.org/ru/docs/Glossary/JavaScript) использует [преобразование типов](https://developer.mozilla.org/ru/docs/Glossary/Type_Conversion), чтобы привести значение к булевому типу, там, где это требуется (например, в [условных конструкциях](https://developer.mozilla.org/ru/docs/Glossary/Conditional) и [циклах](https://developer.mozilla.org/ru/docs/Glossary/Loop).

В следующей таблице приведен полный список ложноподобных значений JavaScript:
falsy:
``` js 
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")

```
### [Оператор логического И, &&](https://developer.mozilla.org/ru/docs/Glossary/Falsy#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B8)

Если первый операнд ложноподобен, то он будет возвращён в качестве результата:
``` js
false && "dog";
// ↪ false

0 && "dog";
// ↪ 0

```
|Значение|Описание|
|---|---|
|`false`|Ключевое слово [`false`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards).|
|`0`|Ноль [`Number`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number) (к нему также относятся `0.0`, `0x0` и т.д.).|
|`-0`|Отрицательный ноль типа [`Number`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number) (к нему также относятся `-0.0`, `-0x0` и т.д.).|
|`0n`|Ноль типа [`BigInt`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt) (также `0x0n`). Обратите внимание, что не может быть негативного нуля типа [`BigInt`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt) — отрицательный `0n` равняется `0n`.|
|`""`, `''`, ` `` `|Значение, содержащее пустую [строку](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String) .|
|[null](https://developer.mozilla.org/ru/docs/Glossary/Null)|[null](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/null) — отсутствие какого-либо значения.|
|[undefined](https://developer.mozilla.org/ru/docs/Glossary/Undefined)|[undefined](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined) — примитивное значение.|
|[NaN (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/NaN "Currently only available in English (US)")|[NaN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN) — значение, не являющиеся числом.|
|[`document.all`](https://developer.mozilla.org/ru/docs/Web/API/Document/all)|Объекты считаются ложноподобными тогда и только тогда, когда у них есть внутренний слот [[[IsHTMLDDA]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot). Этот слот есть только в объекте [`document.all`](https://developer.mozilla.org/ru/docs/Web/API/Document/all), и его нельзя задать через JavaScript.|

****
В [JavaScript](https://developer.mozilla.org/ru/docs/Glossary/JavaScript) **истинноподобное (truthy)** значение — это значение, рассматривающиеся как `true` в [булевом](https://developer.mozilla.org/ru/docs/Glossary/Boolean) контексте. К истинноподобным значениям относятся все значения кроме [ложноподобных](https://developer.mozilla.org/ru/docs/Glossary/Falsy) значений. То есть все значения **истинноподобны** кроме `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` и `NaN`.

В булевых контекстах [JavaScript](https://developer.mozilla.org/ru/docs/Glossary/JavaScript) использует механизм [приведения типов](https://developer.mozilla.org/ru/docs/Glossary/Type_coercion).

Примеры _истинноподобных_ значений в JavaScript (которые будут принудительно приведены к `true` в булевых контекстах, выполняя таким образом содержимое блока `if`):
 Truthy
 ``` js
 if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

```
### [Оператор логического И, &&](https://developer.mozilla.org/ru/docs/Glossary/Truthy#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B8)

Если первый операнд истинноподобен, то [оператор логического И](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND) вернёт второй операнд:
``` js
true && "dog"
// возвращает "dog"

[] && "dog"
// возвращает "dog"

```**Ложноподобное** (**falsy**) значение — значение, которое становится `false` в [булевом](https://developer.mozilla.org/ru/docs/Glossary/Boolean) контексте.

[JavaScript](https://developer.mozilla.org/ru/docs/Glossary/JavaScript) использует [преобразование типов](https://developer.mozilla.org/ru/docs/Glossary/Type_Conversion), чтобы привести значение к булевому типу, там, где это требуется (например, в [условных конструкциях](https://developer.mozilla.org/ru/docs/Glossary/Conditional) и [циклах](https://developer.mozilla.org/ru/docs/Glossary/Loop).

В следующей таблице приведен полный список ложноподобных значений JavaScript: