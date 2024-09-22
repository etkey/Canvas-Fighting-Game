let timeElement = document.querySelector("#countdown");
let timerId;

function countDown() {
    let time = parseInt(timeElement.innerHTML, 10);
    if (time > 0) {
        timerId = setTimeout(countDown, 1000);
        time--;
        timeElement.innerHTML = time;
    }
    if (time === 0) {
        selectWinner({ player1, player2, timerId });
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    crow1.update();
    crow2.update();
    beggar.update();
    sweeper.update();
    pigeon.update();
    girlOnTheBalcony.update();
    dog.update();
    player1.update();
    player2.update();
    player1.velocity.x = 0;
    player2.velocity.x = 0;

    if (keys.a.pressed && player1.lastKey === "a") {
        player1.velocity.x = -5;
        player1.switchSprite("run");
    } else if (keys.d.pressed && player1.lastKey === "d") {
        player1.velocity.x = 5;
        player1.switchSprite("run");
    } else {
        player1.switchSprite("idle");
    }
    if (player1.velocity.y < 0) {
        player1.switchSprite("jumpUp");
    } else if (player1.velocity.y > 0) {
        player1.switchSprite("jumpDown");
    }
    if (player1.health === 0) {
        player1.switchSprite("death");
    }

    if (keys.ArrowLeft.pressed && player2.lastKey === "ArrowLeft") {
        player2.velocity.x = -5;
        player2.switchSprite("run");
    } else if (keys.ArrowRight.pressed && player2.lastKey === "ArrowRight") {
        player2.velocity.x = 5;
        player2.switchSprite("run");
    } else {
        player2.switchSprite("idle");
    }
    if (player2.velocity.y < 0) {
        player2.switchSprite("jumpUp");
    } else if (player2.velocity.y > 0) {
        player2.switchSprite("jumpDown");
    }
    if (player2.health === 0) {
        player2.switchSprite("death");
    }

    if (
        collisionDetection({ box1: player1, box2: player2 }) &&
        player1.isAttacking
    ) {
        player1.succesfulAttackCount++;
        player2.switchSprite("hurt");
        if (player1.succesfulAttackCount % 3 === 0) {
            player1.checkHeavyAttack = true;
        }
        player1.isAttacking = false;
        player2.health = player2.health - 7;
        if (player2.health <= 0) player2.health = 0;
        document.querySelector("#player2-health").style.width =
            player2.health + "%";
    }
    if (
        collisionDetection({ box1: player1, box2: player2 }) &&
        player1.lastKey === "c" &&
        player1.checkHeavyAttack
    ) {
        player1.switchSprite("heavyAttack");
        player2.switchSprite("hurt");
        player2.health = player2.health - 14;
        if (player2.health <= 0) player2.health = 0;
        player1.checkHeavyAttack = false;
        document.querySelector("#player2-health").style.width =
            player2.health + "%";
    }

    if (
        collisionDetection({ box1: player2, box2: player1 }) &&
        player2.isAttacking
    ) {
        player2.succesfulAttackCount++;
        player1.switchSprite("hurt");
        if (player2.succesfulAttackCount % 3 === 0) {
            player2.checkHeavyAttack = true;
        }
        player2.isAttacking = false;
        player1.health = player1.health - 7;
        if (player1.health <= 0) player1.health = 0;
        document.querySelector("#player1-health").style.width =
            player1.health + "%";
    }
    if (
        collisionDetection({ box1: player2, box2: player1 }) &&
        player2.lastKey === "1" &&
        player2.checkHeavyAttack
    ) {
        player2.switchSprite("heavyAttack");
        player2.attackCount = 0;
        player1.switchSprite("hurt");
        player1.health = player1.health - 14;
        if (player1.health <= 0) player1.health = 0;
        player2.checkHeavyAttack = false;
        document.querySelector("#player1-health").style.width =
            player1.health + "%";
    }
    if (player1.health <= 0 || player2.health <= 0) {
        selectWinner({ player1, player2, timerId });
    }
}

countDown();
animate();
