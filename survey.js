const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const answers = {};

rl.question('What is your name?', (answer) => {
  answers.name = answer;
  rl.question('What is an activity you like to do?', (answer) => {
    answers.activity = answer
    rl.question('What do you like to listen to while you do that?', (answer) => {
      answers.music = answer
      rl.question('What is your favourite meal of the day?', (answer) => {
        answers.meal = answer
        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          answers.food = answer
          rl.question('What is your favourite sport?', (answer) => {
            answers.sport = answer
            rl.question('What is your superpower?', (answer) => {
              answers.super = answer
              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.super}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
