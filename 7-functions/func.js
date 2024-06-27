function greet(name){
    if(!name){
        console.log(`Hello! there`)
    }
    else {console.log(`Hello! ${name}`)}
}


function convertToFahrenheit(celsius){

    return (celsius*9/5)+32
}
console.log(convertToFahrenheit(25))


function convertToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9
}
console.log(convertToCelsius(86))


function convertTemperature(degree,unit){
    if(unit==='c'){
        const result= convertToFahrenheit(degree)
        return result
    }
    else{
        const result=convertToCelsius(degree)
        return result
    }
}
console.log(convertTemperature(86,'f'))