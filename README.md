# A 2D Pixel Fighting Game HTML5 <canvas>

![Screenshot from 2024-10-01 20-17-31](https://github.com/user-attachments/assets/255397cb-9f4d-4a65-8424-9fd84eb1a6f6)

## How to Play

Each player has the same amount of health and damage. Heavy attacks deal twice the damage. Blocks only work against normal attacks. A player wins by having more health than the other player before the game reaches its end which is sixty seconds, or it is a tie between the player.

### Player1:

![HeroKnight_BlockNoEffect_4](https://github.com/user-attachments/assets/1552dca1-0f3b-4699-ba0a-2ae264799b02)

-w: jump
-a: move left
-d: move right
-s: shield block
-space: attack
-c: heavy attack

### Player2:

![prev](https://github.com/user-attachments/assets/7417bd78-2244-4338-b382-d654ff47f52e)

- arrowup: jump
- arrow left: move left
- arrow right: move right
- arrow down: sword block
- 0: attack
- 1: heavy attack

## Developer's Notes
 I have created this game on top of Chris Courses' fighting game tutorial. Check him out at https://www.youtube.com/@ChrisCourses .
### What I personally added to make this game my own:

### Gameplay

- Direction: Characters originally couldn't change direction.
- Attack Combos: Each character has a distinct three attack animation. Characters originally only had one attack.
- Heavy Attacks: Each character has a heavy attack that deals two times the normal damage.
- Blocking: Each character has a blocking ability that is able to protect against normal attacks.

### Background and NPCs
- Moving NPCs: Animated a handful of NPCs for the background, beggar, sweeper, flying crows etc.
- Background: Created a Gothic medieval city view.

### Sound Effects
- Walking SFX: Player1 has a metallic walk sound because of the heavy armor, Player2 has a softer walk sound because of the lack of armor. 
- Jumping and landing SFX: Player1 has a metallic jumping and landing sound because of the heavy armor, Player2 has a softer jumping and landing sound because of the lack of armor.
- Attack SFX: Slashing sounds that are changing every swing are added.
- Impact: When a character is successful with their attack an impact sound is played.
- Blocking SFX: Player1 blocks with a shield so one of the three -sword hitting a shield- sounds are played according to the slashing combos. Player2 blocks with a sword so one of the three -sword to sword- sounds are played according to the slashing combos.
- Death SFX: A death SFX is added for each player according to their animations.

### Bug Fixes
- Fixed continuous jumping error which results the characters to go out of the canvas bounds.
- Fixed rapid attack error by adding attack cooldown.
- Other minor bug fixes.
