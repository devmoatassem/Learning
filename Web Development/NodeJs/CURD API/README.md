# Rest API CURD Project
Vanila Node.js Rest API CRUD Project
## Rest API Convention
![Rest API Convention](./REST%20API%20Convention.png "Rest API Convention")
## Run 
> node .\server.js
### Create
- This function uses POST request method.
> http://localhost:5002/api/users
- Change method to POST and then type JavaScript object in the body of request. It'll add the object in the body to the data file on the system.
### Update

### Read
- This function uses GET request method.
> http://localhost:5002/api/users/{uid}
- Visiting this URL while method is GET, it will output the list with object that macthes the {uid}.
> http://localhost:5002/api/users
- This will output the array of all the users data objects.

### Delete
- This function uses DELETE request method.
> http://localhost:5002/api/users/{uid}
- Visiting this URL while method is DELETE, it will delete the object that macthes the {uid}. It'll also return 