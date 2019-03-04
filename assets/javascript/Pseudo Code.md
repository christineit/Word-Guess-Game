1. User input that is triggered by an event
2. User gets 9 guesses with an array
3. Computer generates a random letter with math.Random
4. if user input === computersInput then win
   4a. else user input !== computersInput then try again
   4b. Users input print on screen would be a variable

To detect userGuess possible functions:
function myFunction() {
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
document.getElementById("demo").innerHTML = n;

OR
indexOf returns value: A Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs
Syntax:
string.indexOf(searchvalue, start at)
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<p><strong>Note:</strong> The includes() method is not supported in IE 11 (and earlier versions).</p>

<script>
function myFunction() {
  var str = "Hello world, welcome to the universe.";
  var n = str.includes("world", 12);
  document.getElementById("demo").innerHTML = n;
}
</script>

<!-- Would use indexOf if we wanted to say if array value doesn't exist -1 then alert with message b/c we know if chosen from myBands then it won't equal -1 (not in array)-->:
<!-- Arrays are cast sensitive to we have to change user inputs .toLowerCase -->

script type="text/javascript">
var myBands = ["a", "b", "c", "d"];
var userBand = prompt("What is your favorite band?");
var lowerCase = userBand.toLowerCase();
if (myBands.indexOf(lowerCase) == -1) {
alert("Pretty Lame");
console.log("Pretty Lame");
} else {
alert("Cool");
console.log("Cool");
}
</script>

<!-- Would use Events to log userInput -->
<!-- We have to put this at the end of our document to ensure the user-text
         span exists when we try to access it. -->

    <script type="text/javascript">
      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("user-text");

<!-- // Next, we give JavaScript a function to execute when onkeyup event fires. -->

      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };
