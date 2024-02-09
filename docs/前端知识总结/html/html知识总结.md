## InputHTMLAttributes

autocomplete 属性

```js
<!DOCTYPE html>
<html>

<head>
    <title>AutoComplete Input Example</title>
</head>

<body>
    <h2>AutoComplete Input</h2>
    <form>
        <label for="myInput">Enter a City:</label>
        <input type="text" id="myInput" name="myInput" autocomplete="on" list="cities" />
        <datalist id="cities">
            <option value="New York">
            <option value="Los Angeles">
            <option value="Chicago">
            <option value="Houston">
            <option value="Phoenix">
            <option value="Philadelphia">
            <option value="San Antonio">
            <option value="San Diego">
            <option value="Dallas">
            <option value="San Jose">
        </datalist>
        <input type="submit" value="Submit" />
    </form>
</body>

</html>
```
