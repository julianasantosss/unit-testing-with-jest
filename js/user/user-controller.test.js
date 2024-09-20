const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });


test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('find By Email to userController', () => {    
  let user = new User(12347,"Santiago", "ssantiago@generation.org");
  userController.add(user);   
  let email = "ssantiago@generation.org";
  expect(userController.findByEmail(email)).toEqual(user);
});

test('find By Email to userController', () => {    
  let user = new User(12345,"Mayra", "julis@generation.org");
  userController.add(user);   
  let email = "julis@generation.org";
  expect(userController.findByEmail(email)).toEqual(user);
});

test('find By id to userController', () => {    
  let user = new User(12345,"Mayra", "julis@generation.org");  
  let id = 12345;
  expect(userController.findById(id)).toEqual(user);
});


