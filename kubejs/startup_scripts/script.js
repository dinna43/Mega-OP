StartupEvents.registry('fluid', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('dragon_steel_storm')
    .thickTexture(0x8b84a2)
    .bucketColor(0x8b84a2)
    .displayName('Расплавленая грозовая драконосталь')

event.create('dragon_steel_ice')
    .thickTexture(0xd5e9f8)
    .bucketColor(0xd5e9f8)
    .displayName('Расплавленая леденая драконосталь')

event.create('dragon_steel_fire')
    .thickTexture(0xad9696)
    .bucketColor(0xad9696)
    .displayName('Расплавленая огненная драконосталь')

event.create('dragon_steel_mix')
    .thickTexture(0xafacbb)
    .bucketColor(0xafacbb)
    .displayName('Расплавленая смесь драконостали')
})

StartupEvents.registry('item', event => {
  event.create('metal_dragon_skull')
	.unstackable()
	.displayName('Драконостальной череп дракона')
	.texture('kubejs:item/metal_dragon_skull')
})
