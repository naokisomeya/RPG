let friend1 = new Friend("太郎", 180, 66, 13, 2, 45);                   // 味方
let friend2 = new Friend("加藤", 110, 16, 12, 3, 45);                 // 味方
let friend3 = new Friend("もこう", 140, 43, 11, 1, 45);                 // 味方
let enemy1 = new Troll("はんじょう", 270, 38, 20, "../image/troll.png");      // 敵
let enemy2 = new Dragon("おにや", 380, 68, 6, "../image/dragon.png");   // 敵

let characters = [];
characters.push.apply(friend1);
characters.push.apply(friend2);
characters.push.apply(friend3);
characters.push.apply(enemy1);
characters.push.apply(enemy2);

characters[0].command = "enemyCommand";
characters[0].target = characters[searchCharacterByName("トロル")[0]];
characters[0].action();

