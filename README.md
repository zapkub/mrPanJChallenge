# mrPanJChallenge
another web application with SPAs.

# Bonus point
 - SASS + Autoprefixer
 - responsive
 - Gulp Webpack
 - Babel(ecma6)
 - use promise instead of classic ajax http async request
 - a little ecma6 backend with mongoose

#End point
  github is not provide an environment to run node and mongo so I deploy it to my (little) ec2 server.
  restful (GET,POST,PUT,DELETE) : http://rungsikorn.rocks:1234/api/trips

# Question

###Please explain what is single-page application and how it work. Give examples of tools used to make SPAs.

SPAs is a web application that will reload only content without full page load via resource api.
There are many tools to make SPAs but the core is Javascript Ajax ( xhr ) inside a tons of js library and framework.

###What is the difference between MongoDB and MySql?

Simple answer is MongoDB store data in different way it store data as json structure record instead of table like MySql.There are a lot of different thing between these two style of database ex. MySQL is relational database and has it own SQL query syntax , Mongo is better for scalability if I need to choose database for a project I prefer MongoDB.
