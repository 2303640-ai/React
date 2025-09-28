
<html>
<body>

<h1>Example</h1>

<p>With template strings you can write strings that span multiple lines and include embedded expressions:</p>

<div id="es6"></div>

<script>
const name = "John";
const age = 30;
const message = `Hello, ${name}!
You are ${age} years old.`;

document.getElementById("es6").innerHTML = message;

</script>

</body>
</html>