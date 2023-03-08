<script>
import Phaser from 'phaser';
    
var config = {
type: Phaser.AUTO,
scale: {
    parent: 'game-div',
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
},
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},

scene: {
    preload: preload,
    create: create,
    update: update
}
};

var player;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var bombs;
var platforms;
var cursors;
var level = 0;
var score = 0;
var gameOver = false;
var scoreText;
var emptyList = [];
var question = [
    {Question: 'Select multiples of 3',
    Answer: ["three","six","nine"]},
    {Question: 'What are the prime factors of 10?',
    Answer: ["two","five"]},
    {Question: 'Select multiples of 2',
    Answer: ["two","four","six","eight"]},
    {Question: 'What are the prime factors of 12?',
    Answer: ["two","three"]},
];
var questionText;

var game = new Phaser.Game(config);


function preload ()
{
this.load.image('sky', 'assets/sky.png');
this.load.image('ground', 'assets/platform.png');
this.load.image('one', 'assets/1.png');
this.load.image('two', 'assets/2.png');
this.load.image('three', 'assets/3.png');
this.load.image('four', 'assets/4.png');
this.load.image('five', 'assets/5.png');
this.load.image('six', 'assets/6.png');
this.load.image('seven', 'assets/7.png');
this.load.image('eight', 'assets/8.png');
this.load.image('nine', 'assets/9.png');
this.load.image('bomb', 'assets/bomb.png');
this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
//  A simple background for our game
this.add.image(400, 300, 'sky');

//create gem


//  The platforms group contains the ground and the 2 ledges we can jump on
platforms = this.physics.add.staticGroup();

//  Here we create the ground.
//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
platforms.create(400, 568, 'ground').setScale(2).refreshBody();

//  Now let's create some ledges
platforms.create(600, 400, 'ground');
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');

// The player and its settings
player = this.physics.add.sprite(100, 450, 'dude');

//  Player physics properties. Give the little guy a slight bounce.
player.setBounce(0.2);
player.setCollideWorldBounds(true);

//  Our player animations, turning, walking left and walking right.
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});

//  Input Events
cursors = this.input.keyboard.createCursorKeys();

//  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
one = this.physics.add.group({
    key: 'one',
    repeat: 0,
    setXY: { x: 30, y: 0, stepX: 0 }
});

one.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

two = this.physics.add.group({
    key: 'two',
    repeat: 0,
    setXY: { x: 115, y: 0, stepX: 0 }
});

two.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

three = this.physics.add.group({
    key: 'three',
    repeat: 0,
    setXY: { x: 200, y: 0, stepX: 0 }
});

three.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

four = this.physics.add.group({
    key: 'four',
    repeat: 0,
    setXY: { x: 285, y: 0, stepX: 0 }
});

four.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

five = this.physics.add.group({
    key: 'five',
    repeat: 0,
    setXY: { x: 370, y: 0, stepX: 0 }
});

five.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

six = this.physics.add.group({
    key: 'six',
    repeat: 0,
    setXY: { x: 470, y: 0, stepX: 0 }
});

six.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

seven = this.physics.add.group({
    key: 'seven',
    repeat: 0,
    setXY: { x: 600, y: 0, stepX: 0 }
});

seven.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

eight = this.physics.add.group({
    key: 'eight',
    repeat: 0,
    setXY: { x: 685, y: 0, stepX: 0 }
});

eight.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

nine = this.physics.add.group({
    key: 'nine',
    repeat: 0,
    setXY: { x: 770, y: 0, stepX: 0 }
});

nine.children.iterate(function (child) {

//  Give each star a slightly different bounce
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});

bombs = this.physics.add.group();

//  The score
scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
questionText = this.add.text(125, 75, question[level]['Question'], { fontSize: '32px', fill: '#000' });

//  Collide the player and the stars with the platforms
this.physics.add.collider(player, platforms);
this.physics.add.collider(one, platforms);
this.physics.add.collider(two, platforms);
this.physics.add.collider(three, platforms);
this.physics.add.collider(four, platforms);
this.physics.add.collider(five, platforms);
this.physics.add.collider(six, platforms);
this.physics.add.collider(seven, platforms);
this.physics.add.collider(eight, platforms);
this.physics.add.collider(nine, platforms);


this.physics.add.collider(bombs, platforms);

//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
this.physics.add.overlap(player, one, collectOne, null, this);
this.physics.add.overlap(player, two, collectTwo, null, this);
this.physics.add.overlap(player, three, collectThree, null, this);
this.physics.add.overlap(player, four, collectFour, null, this);
this.physics.add.overlap(player, five, collectFive, null, this);
this.physics.add.overlap(player, six, collectSix, null, this);
this.physics.add.overlap(player, seven, collectSeven, null, this);
this.physics.add.overlap(player, eight, collectEight, null, this);
this.physics.add.overlap(player, nine, collectNine, null, this);



this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update ()
{
if (gameOver)
{
    return;
}

if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}
}

function collectOne (player, one)
{
one.disableBody(true, true);
checkAnswer(one)
}

function collectTwo (player, two)
{
two.disableBody(true, true);
checkAnswer(two)
}

function collectThree (player, three)
{
three.disableBody(true, true);
checkAnswer(three)
}

function collectFour (player, four)
{
four.disableBody(true, true);
checkAnswer(four)
}

function collectFive (player, five)
{
    five.disableBody(true, true);
    checkAnswer(five)
}

function collectSix (player, six)
{
    six.disableBody(true, true);
    checkAnswer(six)
}

function collectSeven (player, seven)
{
    seven.disableBody(true, true);
    checkAnswer(seven)
}

function collectEight (player, eight)
{
    eight.disableBody(true, true);
    checkAnswer(eight)
}

function collectNine (player, nine)
{
    nine.disableBody(true, true);
    checkAnswer(nine)
}

function checkAnswer(choice)
{
if (question[level]['Answer'].includes(choice.texture.key))
{   
    for( var i = 0; i < question[level]['Answer'].length; i++)
    { 
        if ( question[level]['Answer'][i] === choice.texture.key) { 
            question[level]['Answer'].splice(i, 1); 
        }
    }
    score += 10;
    scoreText.setText('Score: ' + score);
    checkLengthAnswer(choice.texture.key);
}
else
{
    score -= 10;
    scoreText.setText('Score: ' + score);
}
}

function checkLengthAnswer(answer)
{
    emptyList.push(answer);
    if(question[level]['Answer'].length == 0)
    {
        levelUp();
    }
}

function levelUp()
{
    //  A new batch of stars to collect

    one.children.iterate(function (child) {

        child.enableBody(true, child.x, 0, true, true);

    });

    two.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    three.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    four.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    five.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    six.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    seven.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    eight.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    nine.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

    });

    //reset the answer to the original and set empty list to zero
    question[level]['Answer'] = emptyList;
    emptyList = [];
    level += 1;
    if (level ==question.length)
    {   
        questionText.setText(question[0]['Question']);
        level = 0
    }
    else
    {   
        questionText.setText(question[level]['Question']);
    }
    

    var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;

}


function hitBomb (player, bomb)
{
this.physics.pause();

player.setTint(0xff0000);

player.anims.play('turn');

gameOver = true;
}
</script>