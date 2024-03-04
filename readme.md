** env-guide **

PORT-

JWT_KEY-

_ _ _ _ _ _ 

** api_service **

method         path                        params    body

POST           /auth/register              none      {username, password,confirmPassword,email}
POST           /auth/login                 none      {username,password}
POST           /todo                       :id       {title,duedate}


_ _ _ _ _ _
Notes

MVC=model,view,controler {Models,route+Controller, View}