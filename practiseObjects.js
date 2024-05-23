// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes: ['Chuck Norris counted to infinity... Twice.', 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'],
    displayInfo() {
      console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
    },
    getAge() {
      // TODO
      let todaysDate = new Date();
      return age = todaysDate.getFullYear() - this.birthDate.getFullYear();
      // Hint: to get the current time, you can do: new Date()
      // Hint: to get the birthDate, you can do: this.birthDate
      // Hint: you can subtract 2 dates and you get the number of milliseconds
    },
    addJoke(joke) {
      // TODO (don't use return statement)
        this.jokes.push(joke)
    },
    getRandomJoke() {
        // TODO
        let randomIndex = Math.floor(Math.random() * this.jokes.length);
        return this.jokes[randomIndex];
    }
  };
  
  
  console.log('getAge', chuck.getAge()); // Should return 80 if you are in 2020
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris can do a wheelie on a unicycle.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris once won a game of Connect Four in three moves.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris can drown a fish.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris spices up his steaks with pepper spray.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke(`Chuck Norris' tears cure cancer. Too bad he has never cried.`);
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke(`Chuck Norris does not sleep. He waits.`);
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke(`Chuck Norris has never blinked in his entire life. Never.`);
  console.log('getRandomJoke', chuck.getRandomJoke());
  
  chuck.displayInfo();
