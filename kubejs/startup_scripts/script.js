//fluid.event

StartupEvents.registry('fluid', event => {//event.start

  event.create('dragon_steel_lighting')
    .thickTexture(0x8b84a2)
    .bucketColor(0x8b84a2)
    .displayName('Molten Lighting Dragonsteel')

event.create('dragon_steel_ice')
    .thickTexture(0xd5e9f8)
    .bucketColor(0xd5e9f8)
    .displayName('Molten Ice Dragonsteel')

event.create('dragon_steel_fire')
    .thickTexture(0xad9696)
    .bucketColor(0xad9696)
    .displayName('Molten Fire Dragonsteel')

event.create('dragon_steel_mix')
    .thickTexture(0xafacbb)
    .bucketColor(0xafacbb)
    .displayName('Molten Dragonsteel Mix')
//event.end
})

//item.event

StartupEvents.registry('item', event => {//event.start
  event.create('metal_dragon_skull')
	.unstackable()
	.displayName('Metalic Dragon Skull')
	.texture('kubejs:item/metal_dragon_skull')
//event.end
})