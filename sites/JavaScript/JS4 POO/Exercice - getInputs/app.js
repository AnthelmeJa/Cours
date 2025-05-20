export class Request{
 getInputs(inputs){
       inputs.forEach(input => {
            console.log(input.value);
        });
    }

    test1(inputs){
        let result=[];
        inputs.forEach(input => {
            result.push(input.value); 
        });
        console.log(result)
    }
    
    test2(inputs){
    let result={}
    result = {
        name: inputs[0].value,
        age: inputs[1].value
    }; 
        console.log(result)
    }
}



