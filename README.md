![Change Calculator](https://alexkmartinez77.github.io/web-102-change-calculator/images/changeApp.png)
# Change Calculator App

The Change Calculator calculates how much change you are due given a sale amount and
amount tendered. It goes a step further and shows you how many of each bill denomination
and coin you should expect to receive.

## How It Works

1. The user enters the sale amount and amount tendred in their respective input fields.
2. The user then clicks on the `Calculate` button to render how much of each denomination 
and coin you should expect as change.

## How It was built

This app demonstrates the use of fundamental HTML, CSS and Javascript. Form validation was
used to make sure that the monetary amounts entered were true monetary values. Leaving either
field empty, entering a number beyond two decimals, entering non-number values or entering
negative numbers will each give a repsective error message prompting the user to enter the
correct information. A javascript function was written to verify that the amount tendered is 
greater than the cost before allowing for the submission. The form submit button invokes the 
javascript function to calculate each coin and denomination count and sets that information in
it's correct place. A combination of tables and Materialize row classes were used to 
organize the denomination and coin information to be displayed. 
 
## Credits

[Materialize] was the CSS framework used for this application and [Google Fonts] provided
the Iceland, Sarpanch and Bebas Neue fonts used in the app.

[Google Fonts]: https://fonts.google.com/ 
[Materialize]: https://materializecss.com/

## Live App

This App is now live and can be visited at: https://alexkmartinez77.github.io/web102-change-calculator


