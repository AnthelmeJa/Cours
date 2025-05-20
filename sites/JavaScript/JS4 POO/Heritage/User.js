class User{
    #name;
    #firstName;
    #job;
    #age;
    constructor(a,b,c=null,d){
        this.#name=a
        this.#firstName=b
        this.#job=c  
        this.#age=Number(d)
    }
    
    fullName(){
        return `${this.#firstName}  ${this.#name}`
    }
    
     get job(){
        console.log("get job");
        
        return this.#job ?? "Pas renseigné";
    }
    
    set job(c){
         console.log('set job');
        this.#job = c;
    }
    
    
     get age(){
        console.log("get age");
        if(this.#age>0 && this.#age<150 ){
            return this.#age;
        }else{
            return  "age incorrect"
        }
     }
    set age(d){
         console.log('set age');
            this.#age =Number(d);
    }
}

export default User
