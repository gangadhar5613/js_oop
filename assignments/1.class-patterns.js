
// creating object using function

function user(name,id,password,noOfProjects){
    let object = {};
    object.name = name;
    object.id = id;
    object.password = password;
    object.noOfProjects = noOfProjects;
    object.getProjects = function(){
        return object.noOfProjects;
    };
    object.changeUserName = function(){
        return object.name;
    };
    object.incrementProject = function(){
        object.noOfProjects++;
        return object.noOfProjects;
    };
    object.decrementProject = function(){
        object.noOfProjects--;
        return object.noOfProjects;
    }
    return object;
}


let object = user("reddy",123456,"gangadhar@123",10);



// creating object using Object.create();

let objectMethods = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeUserName : function(){
        return this.name;
    },
    incrementProject : function(){
        this.noOfProjects++;
        return this.noOfProjects;
    },
    decrementProject : function(){
        this.noOfProjects--;
        return this.noOfProjects;
    }
}

function user(name,id,password,noOfProjects){
    let object =  Object.create(objectMethods);
    object.name = name;
    object.id = id;
    object.password = password;
    object.noOfProjects = noOfProjects;

    return object;
}


let object = user("reddy",123456,"gangadhar@123",10);



// creating object Using Pseudoclassical Way


function user(name,id,password,noOfProjects){
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProjects = noOfProjects;
}


user.prototype = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeUserName : function(){
        return this.name;
    },
    incrementProject : function(){
        this.noOfProjects++;
        return this.noOfProjects;
    },
    decrementProject : function(){
        this.noOfProjects--;
        return this.noOfProjects;
    }
}

let object = new user("reddy",123456,"gangadhar@123",10);





// creating object using class

class user{
    constructor(name,id,password,noOfProjects){
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProjects = noOfProjects;
    }
    getProjects (){
        return this.noOfProjects;
    };
    changeUserName (){
        return this.name;
    };
    incrementProject (){
        this.noOfProjects++;
        return this.noOfProjects;
    };
    decrementProject (){
        this.noOfProjects--;
        return this.noOfProjects;
    }
}


let object = new user("reddy",123456,"gangadhar@123",10);
