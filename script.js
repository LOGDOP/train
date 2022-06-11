document.body.innerHTML = "<h1>Hello Js</h1>";

function fib(f){
    return f <= 1 ? +f : fib(f-2) + fib(f-1);
}

console.log(fib(7))

function bin(arr, val){
    let start = 0;
    let fin = arr.length-1;

    if (val > arr[fin] || val < [start]){
        return -1;
    }

    while(true){
        if(val==arr[start]){
            return start;
        }

        else if(val==arr[fin]){
            return fin;
        }

        let middl = Math.floor((0 + (arr.length-1)) / 2);
        if (val > arr[middl]){
            start = middl +1;
        }
        else  if (val < arr[middl]){
            fin = middl - 1;
        }
        else  if (val == arr[middl]){
            return middl;
        }

    }
    
}

let s = [1,2,14,15,66,77,89]
console.log(bin(s,15))