class Players extends Sprite {
    constructor({
        position,
        velocity,
        direction = 1,
        imageSrc,
        scale,
        framesH,
        framesW,
        framesHold,
        framesCurrentW,
        framesCurrentH,
        framesElapsed,
        offset = { x: 0, y: 0 },
    }) {
        super({
            imageSrc,
            scale,
            framesH,
            framesW,
            framesHold,
            framesCurrentW,
            framesCurrentH,
            framesElapsed,
            position,
            offset,
        });
        this.direction = direction;
        this.velocity = velocity;
        this.height = 150;
        this.width = 100;
        this.lastKey;
        this.attackCount = 0;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 100,
            height: 50,
        };
        this.isAttacking;
        this.checkHeavyAttack = false;
        this.health = 100;
    }
    draw() {
        ctx.save();
        if (this.direction === -1) {
            ctx.scale(-1, 1);
            ctx.drawImage(
                this.image,
                this.framesCurrentW * (this.image.width / this.framesW),
                this.framesCurrentH * (this.image.height / this.framesH),
                this.image.width / this.framesW,
                this.image.height / this.framesH,
                -this.position.x -
                    (this.image.width / this.framesW) * this.scale + this.offset.x,
                this.position.y - this.offset.y,
                (this.image.width / this.framesW) * this.scale,
                (this.image.height / this.framesH) * this.scale
            );
        } else {
            ctx.drawImage(
                this.image,
                this.framesCurrentW * (this.image.width / this.framesW),
                this.framesCurrentH * (this.image.height / this.framesH),
                this.image.width / this.framesW,
                this.image.height / this.framesH,
                this.position.x - this.offset.x,
                this.position.y - this.offset.y,
                (this.image.width / this.framesW) * this.scale,
                (this.image.height / this.framesH) * this.scale
            );
        }

        ctx.restore();
    }
    update() {
        this.draw();
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrentW < this.framesW - 1) {
                this.framesCurrentW++;
            } else {
                this.framesCurrentW = 0;
                if (this.framesCurrentH < this.framesH - 1) {
                    this.framesCurrentH++;
                } else {
                    this.framesCurrentH = 0;
                }
            }
        }
        if (this.direction === 1) {
            this.attackBox.position.x = this.position.x + this.width;
        } else {
            this.attackBox.position.x = this.position.x - this.attackBox.width;
        }
        this.attackBox.position.y = this.position.y;
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (
            this.position.x + this.width >= canvas.width ||
            this.position.x <= 0
        ) {
            this.velocity.x = 0;
        }
        if (
            this.position.y + this.height + this.velocity.y >=
                canvas.height - 19 ||
            this.position.y + this.height + this.velocity.y <= 0
        ) {
            this.velocity.y = 0;
        } else this.velocity.y += gravity;
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 100);
    }
}

const player1 = new Players({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    imageSrc: "./assets/Player1/player1_idle.png",
    framesW: 7,
    scale: 2.1,
    offset: {
        x: 17,
        y: -45,
    },
});

const player2 = new Players({
    position: {
        x: 850,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    direction: -1,
    imageSrc: "./assets/Player2/Idle.png",
    framesW: 10,
    scale: 1.9,
    offset: {
        x: 46,
        y: 2,
    },
});
