//=============================================================================
// Woratana's Skill HP Condition
//=============================================================================

/*:
 * @plugindesc Enable skill if actor is in specfic HP % range
 * @author Woratana [RPGMaker-MV.com]
 *
 * @help
 *
 * Skill Note:
 *   <whpmore:50>       # Enable skill if HP is more than 50% (50% - 100%)
 *   <whpless:50>       # Enable skill if HP is less than 40% (0% - 50%)
 */

(function() {

Wora_SkillHPCondition_GameBatBase_meetSkC = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
  // Check if this skill has HP Less than xxx
  if (skill.meta.whpless != undefined && (this.hpRate() > skill.meta.whpless/100)) return false;
  // Check if this skill has HP More than xxx
  if (skill.meta.whpmore != undefined && (this.hpRate() < skill.meta.whpmore/100)) return false;
  return Wora_SkillHPCondition_GameBatBase_meetSkC.call(this, skill);
}

})();