# Detect Inventory

This behavior pack uses scripts to detect if a player has an empty or full inventory and assigns the player a score. You can then run your own commands based on the player's score.

## Installing the pack:

Download the latest DetectInventory.mcpack file from the [Releases](https://github.com/mittens4all/Detect-Inventory/releases) page.

Add the Detect Inventory Add-on to your behavior packs on your world. Behavior packs disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail) 

### How to use the scoreboard

These example commands would be put into a repeating command block, set to unconditional, always active in a tickingarea.

- You can give players who have an empty inventory an effect, like strength.

```js
effect @a[scores={detect:empty_inventory=1}] strength 1 0 true
```

- You can warn players when their inventory is full.

```js
titleraw @a[scores={detect:full_inventory=1}] actionbar {"rawtext":[{"text":"You're inventory is full."}]}
```

## Author

- [@mittens4all](https://www.github.com/mittens4all)
- [Youtube](https://www.youtube.com/@mittens4all)

```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```
