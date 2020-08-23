function User(name,age){
    let user={};
    user.name=name;  user.age=age;
    return user;
}
const onurObj=User("Onur",39); 
const denizObj=User("Deniz",8);

console.log(onurObj);
