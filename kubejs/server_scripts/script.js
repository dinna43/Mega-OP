ServerEvents.tags('item', event => {
	event.remove('twilightforest:portal/activator', 'forge:gems/diamond')
})

ServerEvents.recipes(event => {
event.remove({ id: 'divinerpg:shapeless/divine_rock_shapeless'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'forbidden_arcanus:obsidian_with_iron'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'cyclic:smelting/fireball'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'ic2:machine_block'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'mekanism:steel_casing'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'ae2:transform/fluix_crystals'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'ae2:transform/fluix_crystal'})
})

ServerEvents.recipes(event => {
event.remove({ id: 'mekanism:metallurgic_infuser'})
})

ServerEvents.recipes(event => {
event.shaped(
  Item.of('ic2:machine_block', 1), // arg 1: output
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
}
)

ServerEvents.recipes(event => {
event.shaped(
  Item.of('mekanism:metallurgic_infuser', 1), // arg 1: output
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
}
)

ServerEvents.recipes(event => {
event.remove({ mod: 'projecte' })
}
)

