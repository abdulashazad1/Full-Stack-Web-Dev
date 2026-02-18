var output = []

function  FizzBuzz(){
    if (output.length === 0){
        output.push(1)
    } else {
        var last = output.pop()
        var next = last + 1
        output.push(last)
        output.push(next)
    }
    
    console.log(output)
}

FizzBuzz()
FizzBuzz()
FizzBuzz()