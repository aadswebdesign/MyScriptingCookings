## PHPNOTES

Presented here are snippets of my module based php folder that I use in my project where I'm working on!

All functions/methods I'm using here exists within the backend folder of my project and what is backed by **slim4**.

Therefor, you have to translate them to your own disciplines to get those snippets to work.

1. 21-12-2024  "ValidatorExtended.php".
Depedencies;an extension of vlucas's Valitron/Validator.

Why?
The Valitron/Validator errors method is creating an array after each object key <code>{"key":["value"]}</code> and if you pass that to json then you get this <code>{"key":[0]}</code>!

So it is creating a dept that you have to remove later on and I don't think it is a good idea to create what you not need.

Therefor I extended it with the ErrorFlatten method 'in fact it has a very small edition and that is by removing the [] within the return'

Anyhow this method produces <code>{"key":"value"}</code> and what you need within your json!

Finally, the Errors method is still available and ErrorsFlatten method has been added!