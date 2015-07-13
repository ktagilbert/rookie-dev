# Chapter 1

## 6 different values:
	1. numbers
		- scientific notation is a thing (e)
		- operators for math.
			- multiply and divide before adding and subtracting)
			- % is remainder
			- not all are symbols ("typeof" a unary operator)
			- >= (greater than or equal to)
			- <= (less than or equal to)
			- == (equal to)
			- and != (not equal to). 
		- numbers that don't behave like numbers:
			- Infinity
			- -Infinity
			- NaN (not a number)
			- JavaScript supports three **logical operators**: 
				1. and && 
					- (true only if both the values given to it are true)
				2. or || 
					- (It produces true if either of the values given to it is true.) - i.e. login someone if they know their username OR email
				3. not !
					-true produces false and !false gives true (why would you use this?)
			-There's a ternary operation - the conditional operator :
				{% highlight JavaScript %}
				console.log(true ? 1 : 2);
				// → 1
				console.log(false ? 1 : 2);
				// → 2
				{% endhighlight %}


	2. strings
		- text (note: strings must stay on a single line but you can indicate a line break with a \. This is called escaping the character. Can put 'n' to indicate a new line and t for tab)
		- concatenation is when you add two strings together.
		- "The way strings are ordered: uppercase letters are always less than lowercase ones, so "Z" < "a". 
	3. booleans
	4. objects
	5. functions
	6. undefined values
		to create a value, you have to call it's names. 

# Chapter 2 - Program Structure

## Expressions and Statements
	- expression = a fragment sentence
	- a statement = a full sentence
	- a program = a list of statements (programming seems a lot like shorthand language)
	- Anything that produces a value is an expression in JavaScript

	- The = operator can be used at any time on existing variables to disconnect them from their current value and have them point to a new one
		{% highlight JavaScript %}
		var mood = "light";
		console.log(mood);
		// → light
		mood = "dark";
		console.log(mood);
		// → dark
		{% endhighlight %}

	- can define two variables at once
		{% highlight JavaScript %}
		var one = 1, two = 2;
		console.log(one + two);
		// → 3
		{% endhighlight %}
	- A function is a piece of program wrapped in a value. ()
		- call a function by placing () after an expression that produces a function value. 
		- instead of alert(), use console.log() to output values.
			**Great Example:**
				{% highlight JavaScript %}
			 	var x = 30;
			 	console.log("the value of x is", x);
			 	// → the value of x is 30
			 	{% endhighlight %}
			 		- expression that retrieves the log property from the value held by the console variable
	- want to ask the user to confirm something?
		OK/Cancel question. 
			{% highlight JavaScript %}
			confirm.("want to subscribe?");
			{% endhighlight %}
	- conditional execution (if, else)
		-example, only login in the user if they can provide a true username and password. Else, alert("wrong credentials").
			you can even have multiple "elses"
	- Loops (yay)
		- repeating some code
		{% highlight JavaScript %}
		var number = 0;
		while (number <= 12) {
		console.log(number);
		number = number + 2;
		}
		{% endhighlight %} 
		- "while" produces the loop
		- while is followed by an expression that is written within parentheses.
		- whenever you want to execute multiple statements within a loop, wrap them in curly braces (called a block)
			- there is a thing called a do loop. 
				- stops after an action takes place (?)

				{% highlight JavaScript %}
				do {
					var name = prompt ("what's you name?");
				} while (! name);
				console.log(name);
				{% endhighlight %}

					- the above is going to force you to enter a name and won't stop until the user enters something that is not an empty string.
			- similarly, there is a for loop.
				 groups statements together. 
			- case statements
				{% highlight JavaScript %}
				switch (prompt("What is the weather like?"))
				{case "rainy":
				console.log("Remember to bring an umbrella.");
				break;
				case "sunny":
				console.log("Dress lightly.");
				case "cloudy":
				console.log("Go outside.");
				break;
				default:
				console.log("Unknown weather type!");
				break;
				}
				{% endhighlight %}




