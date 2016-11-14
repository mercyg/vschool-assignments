var user ={
	name: "mehere",
	state: "UT"
}
function copy(obj){
	var users = Object.assign({}, obj);
	return users;
}

var newUser= copy(user);
newUser.name = "what",
newUser.state = "jwjddj"

console.log(newUser)
console.log(user)