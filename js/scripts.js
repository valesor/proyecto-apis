//https://628295be92a6a5e46216b39d.mockapi.io/users

const getUsers  = () => {
fetch('https://628295be92a6a5e46216b39d.mockapi.io/jobs')
.then(response=> response.json())
.then(data => console.log(data))
.catch(arr=> console.log(arr))
}
getUsers()