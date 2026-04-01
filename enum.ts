//collection of constants with single entity

enum BROWSERS{CHROME = 'chrome', EDGE = 'edge', FIREFOX='firefox', SAFARI='safari'};

enum ENVS{QA = 'qa', STAGE = 'stage', PROD='prod'};

console.log(BROWSERS.CHROME); 
console.log(BROWSERS.FIREFOX);


console.log(ENVS.PROD); 
console.log(ENVS.STAGE);

export {BROWSERS,ENVS};