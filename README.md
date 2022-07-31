
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
  task:{"Buy eggs","Buy milk"}
}
```


