/*  Training Days sending you message the day you have left 

// The scope of random is too loose

const randomNumber = Math.floor(Math.random() * 3);

const getRandEvent = () => {
      if(randomNumber === 0){
       return 'Marathon';    
      }else if(randomNumber == 1){
            return 'Triathlon';
      }else if(randomNumber === 2){
            return 'Pentathlon';

      }      
};

// The scope of day is too tight

const getTrainingDays = event => {
      
      if (event === 'Marathon'){
      let days = 50;
}else if(event === 'Triathlon'){
      let days = 100;
}else if(event === 'Pentathlon'){
      let days = 200;
}
return days;
};

// The scope of name is too tight

const name = event => {
      const name = 'Mala';
      console.log(`${name}'s event is: &{event}`);
};

const logTime = days => {
      const name = 'Mala';
}*/

// Training Days sending you message the day you have left 

// The scope of random is too loose

const randomNumber = Math.floor(Math.random() * 3);

const getRandEvent = () => {
      if(randomNumber === 0){
       return 'Marathon';    
      }else if(randomNumber == 1){
            return 'Triathlon';
      }else if(randomNumber === 2){
            return 'Pentathlon';

      }      
};

// The scope of day is too tight

const getTrainingDays = event => {
let days = 50;
      if (event === 'Marathon'){
             days = 50;
}else if(event === 'Triathlon'){
             days = 100;
}else if(event === 'Pentathlon'){
             days = 200;
}
return days;
};

// The scope of name is too tight

const logEvent = event => {
      const name = 'Mala';
      console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
      const name = 'Mala';
      console.log(`${name}'s event is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays();

logEvent(event);
logTime(days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Sport';

logEvent(name2, event2);
logTime(name2, days2);

