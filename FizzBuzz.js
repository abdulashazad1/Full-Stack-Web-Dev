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

// this could also be done by making an output array and then appending
// values to that array depending on count.
