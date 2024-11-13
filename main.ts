basic.forever(function () {
    if (input.soundLevel() > 130) {
        music.setVolume(255)
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
