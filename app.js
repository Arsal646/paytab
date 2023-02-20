

function buildCounter(i){
    var counter=i
   // console.log(counter)
    var counter=function getCounter(){
        console.log(counter++)
    }
}


buildCounter(6)
getCounter()


