    // const now = new Date(); // Current date and time in local time zone

    // const options = {
    //     timeZone: 'Asia/Dhaka', // Specify the desired time zone
    //     year: 'numeric',
    //     month: 'numeric',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    // };

    // const nowTime = now.toLocaleTimeString('en-US', options);
    // console.log(`Date: ${nowTime}`);

    
function timeSetUp(){
    const date = new Date(); // Represents current time in UTC
    const targetTimeZone = 'Asia/Dhaka';

    const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: targetTimeZone,
    weekday:"long",
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long', // or 'long', 'shortOffset', 'longOffset', 'shortGeneric'
    });

    const formattedTime = formatter.format(date);
    console.log(formattedTime); 
}