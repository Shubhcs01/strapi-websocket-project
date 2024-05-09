# How to run:
1. cd my-crm-project
2. npm run develop
3. project running on : http://localhost:1337/admin
4. open postman -> New Request -> choose websocket
5. Enter Url : ws://localhost:1337/admin/ws 
6. Enter Connect button -> 200 OK
7. Write message -> Press Send button (below Textbox)
8. You'll receive an echo message in the response and saved to strapi in-built mySql database.
9. To Check DB go to -> http://localhost:1337/admin -> Message collection
