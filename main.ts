namespace SpriteKind {
    export const shooter1 = SpriteKind.create()
    export const dmg1 = SpriteKind.create()
    export const distraction = SpriteKind.create()
    export const dmg = SpriteKind.create()
    export const incoming = SpriteKind.create()
    export const hdmg = SpriteKind.create()
    export const dmg2 = SpriteKind.create()
    export const shooter2 = SpriteKind.create()
    export const dmg3 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(option == 0)) {
        if (option == 2) {
            option = 3
            mySprite.setPosition(65, 44)
        } else if (option == 3) {
            option = 1
            mySprite.setPosition(45, 30)
        } else if (option == 4) {
            option = 2
            mySprite.setPosition(55, 59)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(option == 0)) {
        effects.clouds.endScreenEffect()
        blockSettings.writeString("normal", "?")
        sprites.destroy(textSprite, effects.fire, 10)
        sprites.destroy(textSprite2, effects.spray, 33)
        sprites.destroy(textSprite3, effects.rings, 44)
        game.setDialogTextColor(1)
        pause(100)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text, effects.clouds, 1)
        pause(2000)
        game.setDialogFrame(assets.image`d`)
        game.showLongText("    ready?", DialogLayout.Bottom)
        pause(500)
        statusbar = statusbars.create(27, 5, StatusBarKind.Health)
        pause(100)
        tiles.setCurrentTilemap(tilemap`level2`)
        controller.moveSprite(mySprite, 72, 72)
        tiles.placeOnTile(statusbar, tiles.getTileLocation(6, 6))
        shake = 1
        statusbar.positionDirection(CollisionDirection.Bottom)
        mySprite.setImage(assets.image`player`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(4, 5), 4))
        statusbar.setColor(1, 12, 2)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.setLabel("HP")
        mySprite2 = sprites.create(assets.image`shooter`, SpriteKind.shooter1)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, randint(3, 5)))
        mySprite3 = sprites.create(assets.image`bullet`, SpriteKind.dmg1)
        mySprite3.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnTile(mySprite3, mySprite2.tilemapLocation())
        mySprite3.setVelocity(50, randint(-5, 5))
        pause(500)
        effects.clouds.startScreenEffect()
        if (option == 1) {
            statusbar.max = 75
            option = 0
            mySprite.setImage(assets.image`heart1`)
            effects.blizzard.startScreenEffect()
            pause(1000)
            effects.hearts.startScreenEffect()
            pause(1000)
            effects.starField.startScreenEffect()
            pause(2000)
            effects.smiles.startScreenEffect()
            pause(1000)
            effects.bubbles.startScreenEffect()
            pause(5000)
            effects.confetti.startScreenEffect()
            pause(5000)
            mySprite3.startEffect(effects.fire)
            pause(11000)
            mySprite4 = sprites.create(assets.image`di`, SpriteKind.distraction)
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
            mySprite4.setVelocity(randint(50, 1000), randint(50, 1000))
            mySprite4.setStayInScreen(true)
            mySprite4.setBounceOnWall(true)
            mySprite4.startEffect(effects.spray)
            pause(5000)
            mySprite5 = sprites.create(assets.image`asset`, SpriteKind.dmg)
            mySprite5.setVelocity(50, 50)
            mySprite5.setBounceOnWall(true)
            pause(2000)
            mySprite5.startEffect(effects.warmRadial)
            mySprite5.startEffect(effects.coolRadial)
            pause(5000)
            mySprite.startEffect(effects.spray)
            pause(100)
            mySprite2.startEffect(effects.fountain)
            pause(100)
            statusbar.startEffect(effects.halo)
            pause(100)
            mySprite4.startEffect(effects.trail)
            pause(100)
            mySprite4.startEffect(effects.halo)
            scene.cameraShake(4, 500)
            pause(100)
            mySprite4.startEffect(effects.fire)
            pause(5000)
            mySprite6 = sprites.create(assets.image`fire`, SpriteKind.distraction)
            mySprite6.setVelocity(467, 0)
            tiles.placeOnTile(mySprite6, tiles.getTileLocation(4, 7))
            mySprite6.setStayInScreen(true)
            mySprite6.setFlag(SpriteFlag.BounceOnWall, true)
            pause(2000)
            mySprite6.startEffect(effects.fire)
            pause(100)
            mySprite6.startEffect(effects.disintegrate)
            mySprite6.startEffect(effects.fountain)
            pause(1000)
            mySprite.startEffect(effects.trail)
            pause(100)
            mySprite4.startEffect(effects.hearts)
            pause(5000)
            scene.cameraShake(4, 500)
            pause(5000)
            mySprite.setImage(assets.image`graviity`)
            pause(30000)
            game.showLongText("you have a bad feeling...", DialogLayout.Bottom)
            mySprite3.setVelocity(333, randint(-5, 5))
            mySprite5.setVelocity(100, 100)
            pause(20000)
            game.showLongText("you feel like you're going to die...", DialogLayout.Bottom)
            pause(100)
            mySprite12 = sprites.create(assets.image`rock`, SpriteKind.hdmg)
            mySprite12.setVelocity(1, 111)
            mySprite12.setBounceOnWall(true)
        } else if (option == 2) {
            shake = 1
            option = 0
            sprites.destroyAllSpritesOfKind(SpriteKind.Text, effects.fire, 500)
            pause(2000)
            statusbar.max = 5
            effects.blizzard.startScreenEffect()
            pause(100)
            mySprite.setImage(assets.image`heart broken`)
            effects.clouds.startScreenEffect()
            scene.setBackgroundImage(assets.image`bg2`)
            pause(5000)
            scene.setBackgroundImage(assets.image`bg1`)
            pause(5000)
            effects.starField.startScreenEffect()
            pause(5000)
            effects.starField.startScreenEffect()
            shake = 0
            pause(5000)
            mySprite7 = sprites.create(assets.image`asset`, SpriteKind.dmg)
            mySprite7.setVelocity(50, 50)
            mySprite7.setBounceOnWall(true)
            pause(10000)
            mySprite8 = sprites.create(assets.image`chain`, SpriteKind.incoming)
            mySprite8.setPosition(79, 35)
            pause(2000)
            mySprite8.setImage(assets.image`chainout`)
            mySprite8.setKind(SpriteKind.hdmg)
            pause(500)
            tyrchain = 1
            pause(20000)
            game.showLongText("you have a bad feeling...", DialogLayout.Bottom)
            mySprite3.setVelocity(randint(353, 555), randint(-5, 5))
            mySprite7.setVelocity(111, 111)
            pause(11010)
            game.showLongText("you feel like your going to die...", DialogLayout.Bottom)
            mySprite11 = sprites.create(assets.image`rock`, SpriteKind.hdmg)
            pause(200)
            mySprite11.setVelocity(75, 75)
            pause(500)
            mySprite11.setVelocity(100, 100)
        } else if (option == 3) {
            option = 0
            pause(100)
            shake = 0
            pause(5000)
            effects.clouds.startScreenEffect()
            pause(500)
            mySprite.setImage(assets.image`heart-s1`)
            pause(21111)
            mySprite9 = sprites.create(assets.image`spearbounce`, SpriteKind.dmg)
            mySprite9.setVelocity(50, 50)
            mySprite9.setScale(1, ScaleAnchor.Middle)
            mySprite9.setBounceOnWall(true)
            pause(60000)
            game.showLongText("you have a bad feeling...", DialogLayout.Bottom)
            mySprite9.setVelocity(110, 110)
            mySprite3.setVelocity(333, randint(-5, 5))
            pause(42648)
            game.showLongText("You feel like you're going to die...", DialogLayout.Bottom)
            mySprite10 = sprites.create(assets.image`ghost`, SpriteKind.hdmg)
            pause(500)
            mySprite10.setVelocity(75, 50)
            mySprite9.setVelocity(333, 333)
            mySprite10.setBounceOnWall(true)
        } else if (option == 4) {
            statusbar.max = 75
            option = 0
            mySprite3.startEffect(effects.fire)
            pause(2000)
            shake = 0
            pause(5000)
            mySprite15 = sprites.create(assets.image`rock`, SpriteKind.dmg)
            mySprite15.setVelocity(50, 50)
            mySprite15.setBounceOnWall(true)
            pause(10000)
            game.showLongText("You have a bad feeling...", DialogLayout.Bottom)
        }
        pause(15700)
        game.showLongText("you feel like your being watched...", DialogLayout.Bottom)
        mySprite13 = sprites.create(assets.image`laserwarning`, SpriteKind.incoming)
        for (let index = 0; index < randint(75, 110); index++) {
            mySprite13.setKind(SpriteKind.incoming)
            mySprite13.setImage(assets.image`laserwarning`)
            mySprite13.setPosition(randint(48, 113), 45)
            pause(1000)
            mySprite13.setImage(assets.image`laser`)
            mySprite13.setKind(SpriteKind.dmg2)
            pause(500)
        }
        sprites.destroy(mySprite13, effects.clouds, 500)
        pause(1000)
        mySprite14 = sprites.create(assets.image`shooterpower`, SpriteKind.shooter2)
        mySprite13 = sprites.create(assets.image`bulletL`, SpriteKind.dmg3)
        tiles.placeOnTile(mySprite14, tiles.getTileLocation(8, 4))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dmg1, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "you Died...")
    statusbar.value += -1
    pause(1)
})
scene.onOverlapTile(SpriteKind.dmg1, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnTile(mySprite3, mySprite2.tilemapLocation())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dmg, function (sprite, otherSprite) {
    statusbar.value += -1
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dmg2, function (sprite, otherSprite) {
    statusbar.value += -5
    pause(136)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    effects.bubbles.endScreenEffect()
    effects.hearts.endScreenEffect()
    effects.smiles.endScreenEffect()
    effects.confetti.endScreenEffect()
    effects.starField.endScreenEffect()
    effects.blizzard.endScreenEffect()
    sprites.destroyAllSpritesOfKind(SpriteKind.distraction)
    effects.clearParticles(mySprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.dmg)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.dmg1)
    controller.moveSprite(mySprite, 0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.shooter1)
    sprites.destroyAllSpritesOfKind(SpriteKind.hdmg)
    sprites.destroyAllSpritesOfKind(SpriteKind.dmg2)
    shake = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.incoming)
    tyrchain = 0
    scene.setBackgroundImage(assets.image`b`)
    effects.clouds.endScreenEffect()
    tiles.setCurrentTilemap(tilemap`level4`)
    pause(2000)
    mySprite.setImage(assets.image`h`)
    pause(500)
    mySprite.setImage(assets.image`cracking`)
    pause(750)
    mySprite.setImage(assets.image`heart broken`)
    pause(500)
    mySprite.setImage(assets.image`death1`)
    pause(100)
    animation.runImageAnimation(
    mySprite,
    assets.animation`break`,
    300,
    false
    )
    effects.starField.startScreenEffect(1000)
    pause(5000)
    game.reset()
})
sprites.onOverlap(SpriteKind.shooter1, SpriteKind.dmg1, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, randint(3, 5)))
})
scene.onOverlapTile(SpriteKind.dmg3, assets.tile`myTile10`, function (sprite, location) {
    mySprite13.setPosition(136, randint(56, 96))
    tiles.placeOnTile(mySprite13, mySprite14.tilemapLocation())
    mySprite13.follow(mySprite14, 10)
    pause(1)
    mySprite13.setVelocity(randint(-50, -100), randint(-1, 1))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(!(!(option == 0)))) {
        if (option == 3) {
            mySprite.setPosition(55, 59)
            option = 2
        } else if (option == 1) {
            mySprite.setPosition(65, 44)
            option = 3
        } else if (option == 2) {
            option = 4
            mySprite.setPosition(59, 72)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hdmg, function (sprite, otherSprite) {
    statusbar.value += -9
    pause(111)
})
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite15: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite11: Sprite = null
let tyrchain = 0
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite12: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let textSprite2: TextSprite = null
let textSprite3: TextSprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
let option = 0
let shake = 0
shake = 1
game.setGameOverMessage(false, "death of unknown cause...")
option = 0
scene.setBackgroundImage(assets.image`bgs`)
textSprite = textsprite.create("distraction")
textSprite.setPosition(80, 28)
mySprite = sprites.create(assets.image`name`, SpriteKind.Player)
mySprite.setPosition(45, 30)
textSprite3 = textsprite.create("easy")
textSprite3.setPosition(80, 44)
option = 1
game.setGameOverEffect(false, effects.melt)
textSprite2 = textsprite.create("tyrsday")
textSprite2.setPosition(80, 57)
textSprite.setOutline(2, 15)
textSprite2.setOutline(2, 15)
let textSprite4 = textsprite.create("normal")
textSprite4.setPosition(80, 70)
textSprite4.setOutline(2, 15)
pause(5000)
effects.clouds.startScreenEffect()
game.onUpdateInterval(5000, function () {
    if (tyrchain == 1) {
        mySprite8.setImage(assets.image`chainout`)
    }
})
game.onUpdateInterval(750, function () {
    if (0 == option) {
        if (1 == shake) {
            scene.cameraShake(2, 500)
        }
    }
})
game.onUpdateInterval(2500, function () {
    if (tyrchain == 1) {
        mySprite8.setPosition(randint(49, 112), 40)
        mySprite8.setImage(assets.image`chain`)
    }
})
