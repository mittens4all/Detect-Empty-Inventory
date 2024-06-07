
# Detect Empty Inventory

This behavior pack uses scoreboards to detect a player who does not have any items in their inventory. You can then run your own commands based on the player's score.

## Installing the pack:

Add the Detect Empty Inventory Add-on to your behavior packs on your world. Behavior packs disable achievements, but editing the world with an NBT editor can re-enable achievements.

To re-enable achievements with a free NBT editor, check out my video on Youtube, (https://www.youtube.com/@mittens4all) 

### How to use the scoreboard

You can give players who do not have any items in their inventory an effect, like strength. This example command would be put into a repeating command block, set to unconditional, always active in a tickingarea.

`effect @a[scores={empty_inventory=1}] strength 1 0 true`

## Authors

- [@mittens4all] (https://www.github.com/mittens4all)

## Support

For support, Join the discord (https://discord.gg/fbB8QgjxuQ)
