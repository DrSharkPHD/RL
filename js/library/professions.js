/**
 * @class Fighter profession
 * @augments RPG.Professions.BaseProfession
 */

RPG.Professions.Fighter = OZ.Class().extend(RPG.Professions.BaseProfession);
RPG.Professions.Fighter.visual = { desc:"fighter", image:"fighter" };
RPG.Professions.Fighter.prototype.setup = function(being) {
	this.parent(being);

	being.addSpell(RPG.Spells.Heal);
}

/**
 * @class Warrior profession
 * @augments RPG.Professions.BaseProfession
 */
RPG.Professions.Warrior = OZ.Class().extend(RPG.Professions.BaseProfession);
RPG.Professions.Warrior.visual = { desc:"warrior", image:"warrior" };
RPG.Professions.Warrior.prototype.setup = function(being) {
	this.parent(being);

	being.adjustFeat(RPG.FEAT_MAX_HP, 5);
	being.adjustFeat(RPG.FEAT_MAX_MANA, -3);

	var sword = new RPG.Items.ShortSword();
	being.addItem(sword);	
}

/**
 * @class Archer profession
 * @augments RPG.Professions.BaseProfession
 */
RPG.Professions.Archer = OZ.Class().extend(RPG.Professions.BaseProfession);
RPG.Professions.Archer.visual = { desc:"archer", image:"archer" };
RPG.Professions.Archer.prototype.setup = function(being) {
	this.parent(being);

	being.addItem(new RPG.Items.ShortBow());
	being.addItem(new RPG.Items.Arrow(30));
}

/**
 * @class Mage profession
 * @augments RPG.Professions.BaseProfession
 */
RPG.Professions.Mage = OZ.Class().extend(RPG.Professions.BaseProfession);
RPG.Professions.Mage.visual = { desc:"mage", image:"wizard" };
RPG.Professions.Mage.prototype.setup = function(being) {
	this.parent(being);

	being.adjustFeat(RPG.FEAT_MAX_MANA, 5);
	being.adjustFeat(RPG.FEAT_MAX_HP, -3);

//	being.addSpell(RPG.Spells.Heal);
	being.addSpell(RPG.Spells.MagicBolt);
//	being.addSpell(RPG.Spells.MagicExplosion);
//	being.addSpell(RPG.Spells.Fireball);

//	var scroll = new RPG.Items.Scroll(RPG.Spells.MagicBolt);
//	being.addItem(scroll);
}

/**
 * @class Assassin profession
 * @augments RPG.Professions.BaseProfession
 */
RPG.Professions.Assassin = OZ.Class().extend(RPG.Professions.BaseProfession);
RPG.Professions.Assassin.visual = { desc:"assassin", image:"assassin" };
RPG.Professions.Assassin.prototype.setup = function(being) {
	this.parent(being);

	being.adjustFeat(RPG.FEAT_SIGHT_RANGE, 6);
	being.adjustFeat(RPG.FEAT_MAX_HP, -3);

//	being.addSpell(RPG.Spells.Heal);
//	being.addSpell(RPG.Spells.MagicBolt);
//	being.addSpell(RPG.Spells.MagicExplosion);
//	being.addSpell(RPG.Spells.Fireball);

//	var scroll = new RPG.Items.Scroll(RPG.Spells.MagicBolt);
//	being.addItem(scroll);
}
