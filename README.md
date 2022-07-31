
# ORENDA BE TEST
## Features

- Create user
- Assign task
- Remove task
- Liast all common task

## Documentation
### SETUP
- clone github
- Install all dependencies
    ```bash
  npm install 
    ```
- Install nodemon global
    ```bash
  npm install -g nodemon
    ```
- Run server
    ```bash
  nodemon app.js
    ```
```
-if server runing you can see this in terminal-
  [nodemon] restarting due to changes...
  [nodemon] starting `node app.js`
  This app running at port:3000
```
### SETUP DB
- Create DB
    ```bash
  sequelize db:create
    ```
- Migrate DB
    ```bash
  sequelize db:migrate
    ```
- Connect DB
```
  you can see this in folder config, "development" environment
    username: postgres
    password: your password
    database: db_development
    dialect : postgres
```
  
## API Reference

```http
  POST /api/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `string` | `add multi user` |

```
Request JSON:
{
  "Users": ["example1.@mail.com","example1@mail.com"]
}
```
```http
  POST /api/assign
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user and task`      | `string and arry of string` | `add task by user` |

```
Request JSON:
{
  "user": "example1.@mail.com"
  "task": ["Buy eggs","Buy milk"]

}
```
```http
  POST /api/unassign
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user and task`      | `string and arry of string` | `remove task by user` |

```
Request JSON:
{
  "user": "example1.@mail.com"
  "task": ["Buy eggs"]

}
```

```http
  POST /api/tasks/common
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `users`      | `array of string` | `list all common task of two users` 

```
Request JSON:
{
  "user": ["example1.@mail.com","example2@mail.com]
}

----------------------------------------------------
if two users have "Buy eggs" as common task 
example1@mail task list :
{
  task:{"Buy eggs","Buy milk"}
}
example2@mail task list :
{
  task:{"Buy eggs"}
}
----------------------------------------------------

Response status 200
{
  "status": 200,
  "tasks":{"Buy eggs","Buy milk"}
}
```


