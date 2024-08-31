//Enhancement Scatter Turret
Blocks.scatter.inaccuracy = 8;
Blocks.scatter.reload = 40;
Blocks.scatter.range = 270;

Blocks.scatter.shoot.shotDelay = 3.5;
Blocks.scatter.shoot.shots = 6;

Blocks.scatter.limitRange(90);
Blocks.scatter.ammoTypes.get(Items.lead).damage = 8;
Blocks.scatter.ammoTypes.get(Items.metaglass).damage = 8;
Blocks.scatter.ammoTypes.get(Items.scrap).damage = 8;
