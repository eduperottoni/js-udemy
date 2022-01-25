# Date Object

Date is a constructor function. It means that it creates an instance of a class.

There are many ways to work with the Date class.

1. ```new Date()``` (catch the currently date)
    ```
    const now = new Date()
    console.log(now)
    ```
2. ```new Date(value)```(increments the parameter in the unix timestamp)
  This calue is the time increment (in miliseconds) passed since 1970, January 1st (ground zero of Unix).
  In this case, the Date function parameter is the time (in miliseconds) after (if positive) or before (if negative) the zero time (unix timestamp)
    ```
    const aDay = 60*60*24*1000 //Quantity of miliseconds in a day
    const aDayPassed = new Date(0 + aDay)
    console.log(aDayPassed)
    ```
3. ```new Date(year, month, day, hour, minutes, seconds, miliseconds)```
  The Date also can receive a set of values as parameter. In order, we can pass (year, month [0 to 11], day, hour, minutes, seconds, miliseconds). The parameters are considered in the local time and the return is always in the GMT=0;
    ```
    const date = new Date(2001, 6, 18, 19, 30, 15, 3000)
    console.log(date)
    ```
  If we omit some value, the function set it as 00.
4. ```new Date(dataString)``` (catches the string and returns the data)
  This dataString must be as a format recognized by the Date.parse() method, that transforms this string in a quantity of miliseconds passed since 1970-00-00T00:00:00.000 and increments this time to this original date.
  ```
  const data = new Date('2019-04-20 20-30-59')
  console.log(data)
  ```
## Date.tostring()
This method converts the data to the local GMT, according to the OS configuration.
```
const date3 = new Date('2001-07-18 19:30:15')
console.log(date3.toString())
```
## Date methods
* Date.getDate()
* Date.getMonth()
* Date.getFullYear()
* Date.getHours()
* Date.getMinutes()
* Date.getSeconds()
* Date.getMilliseconds()
* Date.getDay()
* Date.now() //returns the miliseconds passed since the timestamp to now