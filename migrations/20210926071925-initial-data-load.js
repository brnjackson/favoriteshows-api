'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('netflixshows', [
      { id: 1, title: 'The Vampire Diaries', numberofEps: 171, starring:'Nina Dobrev, Ian Somerhalder', favCharacter: 'Bonnie Bennett'},
      { id: 2, title: 'Breaking Bad', numberofEps: 62, starring:'Bryan Cranston, Aaron Paul', favCharacter: 'Jesse Pinkman'},
      { id: 3, title: 'Orange is the New Black', numberofEps: 91, starring:'Laura Prepon, Taylor Schilling', favCharacter: 'Taystee'},
      { id: 4, title: 'Manifest', numberofEps: 42, starring:'Melissa Roxburgh, Josh Dallas', favCharacter: 'Saanvi'},
      { id: 5, title: 'Jane the Virgin', numberofEps: 100, starring:'Gina Rodriguez, Justin Baldoni', favCharacter: 'Xiomara'},
      { id: 6, title: 'How To Get Away With Murder', numberofEps: 90, starring:'Viola Davis, Liza Weil', favCharacter: 'Oliver'}
    ])

    await queryInterface.bulkInsert('hulushows', [
      { id: 1, title: 'Cruel Summer', numberofEps: 10, starring:'Olivia Holt, Chiara Aurelia', favCharacter: 'Vince'},
      { id: 2, title: 'Lost', numberofEps: 121, starring:'Naveen Andrews, Josh Holloway', favCharacter: 'Sawyer'},
      { id: 3, title: '90 Day Fiance', numberofEps: 79, starring:'Matt Ryan, Ashley Martson', favCharacter: 'Jorge'}
    ])

    await queryInterface.bulkInsert('starzshows', [
      { id: 1, title: 'Power', numberofEps: 63, starring:'Omari Hardwick, Naturi Naughton', favCharacter: 'Proctor'},
      { id: 2, title: 'Run the World', numberofEps: 8, starring:'Amber Stevens West, Corbin Reid', favCharacter: 'Renee'},
      { id: 3, title: 'Survivors Remorse', numberofEps: 36, starring:'Jessie T. Usher, Erica Ash', favCharacter: 'Mary Jo'},
      { id: 4, title: 'P-Valley', numberofEps: 8, starring:'Brandee Evans, Nicco Annan', favCharacter: 'Mississippi'}
    ])
 
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('netflixshows')
    await queryInterface.bulkDelete('hulushows')
    
    return queryInterface.bulkDelete('starzshows')
  }
};
