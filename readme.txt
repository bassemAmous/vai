VAI TASK
LI have made a good structure and the setup of best practice concerning the tools the architecture...
I used seneca microservices hapi-js and hapi test lab for tests hapi-js hapi/joi
I really like this combination and this is one of the reason that I prefer hapi than express.
I also used jsDoc you can find the documentation of some functions on a folder called documentation
you just have to enter to the folder and open the HTM global file.
I used Eslint for identifying JavaScript patterns.
I made the configuration of raven sentry for handling the errors on the server but we don't need it for
the moment I guess.
how to use: Easy! :)
npm install
npm test.
node index.js

endpoint:
post: localhost:9999/complexity
body
{
    "text": "john smith loves going to the cinema"
}
