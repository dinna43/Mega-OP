//tags

ServerEvents.tags('item', event => {//event.start
	event.removeAll('twilightforest:portal/activator')

	event.add('twilightforest:portal/activator', 'kubejs:metal_dragon_skull')
//event.end
})

//recipes.remove

ServerEvents.recipes(event => {//event.start
event.remove({ id: 'divinerpg:shapeless/divine_rock_shapeless'})

event.remove({ id: 'forbidden_arcanus:obsidian_with_iron'})

event.remove({ id: 'cyclic:smelting/fireball'})

event.remove({ id: 'ic2:machine_block'})

event.remove({ id: 'mekanism:steel_casing'})

event.remove({ id: 'ae2:transform/fluix_crystals'})

event.remove({ id: 'ae2:transform/fluix_crystal'})

event.remove({ id: 'mekanism:metallurgic_infuser'})

event.remove({ mod: 'eyesoficeandfire'})

//event.end
})

//recipes.custom.craft

ServerEvents.recipes(event => {//event.start
event.shaped(
  Item.of('ic2:machine_block', 1),
  [
    'aaa',
    'aba', 
    'aaa'
  ],
  {
    a: 'ic2:ingot_refined_iron',
    b: 'cyclic:gem_obsidian'
  }
)

event.shaped(
  Item.of('mekanism:metallurgic_infuser', 1),
   [
    'asa',
    'zxz', 
    'asa'
   ],
   {
    a: 'minecraft:iron_ingot',
    s: 'minecraft:furnace',
    z: 'minecraft:redstone',
    x: 'mekanism:steel_casing'
   }
 )
 
 event.shaped(
  Item.of('eyesoficeandfire:eye_of_fire_dragon', 1),
  [
    'zsz',
    'dad', 
    'zxz'
  ],
  {
    z: {tag: 'iceandfire:scales/dragon/fire'},
    x: 'iceandfire:fire_dragon_heart',
	s: 'iceandfire:fire_dragon_blood',
	d: 'iceandfire:fire_dragon_flesh',
	a: 'minecraft:ender_eye'
  }
)

 event.shaped(
  Item.of('eyesoficeandfire:eye_of_ice_dragon', 1),
  [
    'zsz',
    'dad', 
    'zxz'
  ],
  {
	z: {tag: 'iceandfire:scales/dragon/ice'},
    x: 'iceandfire:ice_dragon_heart',
	s: 'iceandfire:ice_dragon_blood',
	d: 'iceandfire:ice_dragon_flesh',
	a: 'minecraft:ender_eye'
  }
)


 event.shaped(
  Item.of('eyesoficeandfire:eye_of_lightning_dragon', 1),
  [
    'zsz',
    'dad', 
    'zxz'
  ],
  {
    z: {tag: 'iceandfire:scales/dragon/lightning'},
    x: 'iceandfire:lightning_dragon_heart',
	s: 'iceandfire:lightning_dragon_blood',
	d: 'iceandfire:lightning_dragon_flesh',
	a: 'minecraft:ender_eye'
  }
)
//event.end
})