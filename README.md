# Friend-Finder

## Deployed Application

[Friend Finder](https://safe-fortress-99339.herokuapp.com/)

## Description

Friend-finder is a created server application using Express in Node.js framework. It uses client input to forward a request to the server and return a most likely match keeping the data of the user input to add to the optional choices. The entire app then is deployed on Heroku.

This paticular version is if there was a zombie apocalyspe, who would be your best partner to team up with and survive the hoards. 

### Modules Used
- Express
- Path
- Body Parser

### Directions
The loading page is just a minor introduction with a button that navigates to the survey for the client. Options for each question arem 1 to 5. 1 being most likely to happen and 5 being least likely to happen. 

Client must input a name and an image to place with their 10 questionaire. The form will not submit without those values. Client then answers the 10 questions and on submit click the most compatible zombie killing friend will be shown along with their image for the client. 

#### Welcome Screen
![Index](/app/public/images/screen1.png)

#### Fill Out the Survey 
![Survey](/app/public/images/screen2.png)

#### Your Best Match
![Match](/app/public/images/screen3.png)