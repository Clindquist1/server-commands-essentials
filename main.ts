player.onChat("?spawn", function () {
    player.teleport(pos(0, 0, 0))
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 204, 129)
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 204, 129)
})
player.onChat("?Help", function () {
    player.say("---------Commands 1/1 ---------")
    player.say("§l3?expstick ----- Gives Exp Stick ")
    player.say("§l3?Spawn ----- Tps You To Spawn")
    player.say("§l3?PA ------ Tps You To PVP Area")
    player.say("§l3?PvpO ----- Pvp On")
    player.say("§l3?PvpOF ----- Pvp Off")
    player.say("§l3?Day----- Day")
    player.say("§l3?Night----- Night")
    player.say("§l3?God----- Gives God Mode")
})
player.onChat("?expstick", function () {
    player.runChatCommand("/give @s Golden_shovel")
    player.execute(
    "Say Exp Shovel given"
    )
})
player.onChat("?God", function () {
    mobs.applyEffect(HEALTH_BOOST, mobs.target(NEAREST_PLAYER), 600, 255)
    mobs.applyEffect(REGENERATION, mobs.target(NEAREST_PLAYER), 600, 255)
})
player.onChat("?Pvp0f", function () {
    gameplay.setGameRule(PV_P, false)
})
player.onChat("?Day", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("?PA", function () {
    player.teleport(pos(0, 0, 0))
})
player.onItemInteracted(GOLDEN_SHOVEL, function () {
    gameplay.xp(10, mobs.target(LOCAL_PLAYER))
    player.say("Exp Stick Used")
})
player.onChat("?Night", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
player.onChat("?Pvp0", function () {
    gameplay.setGameRule(PV_P, true)
})
player.say("§3Server Commands Loading")
player.say("§3Server Commands Loading")
player.say("§3Server Commands Loaded")
player.say("§3Say ?Help For Command List")
