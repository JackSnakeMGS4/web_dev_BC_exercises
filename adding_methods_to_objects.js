/*
SUMMARY:
	Objects can hold any kind of data which can be accessed by property names.
*/
var jacksATK = 9999;
var enemyRES = 1;//% based where 1 is 100% resistance (normal); 2 would be (immune)
var enemyDEF = 4999.5;
var enemyHP = 9999;

var obj = {
	//can hold strings, ints, floats, bools, array, multi dimensional arrays
	name: "Jack",
	age: 22,
	isTransformed: false,
	friends: ["AWOL", "ELDER"],
	//EVEN functions!
	calcElbowPower: function(jacksATK, enemyDEF, enemyRES, enemyHP){
		if(jacksATK > (enemyDEF * enemyRES))
		{
			//take remaining atk and convert to %
			let dmg = Math.abs(((jacksATK - enemyDEF) * enemyRES)*0.00001);//5%
			let hpLoss = Math.abs(enemyHP * dmg);//500 hp

			enemyHP -= hpLoss;

			console.log(dmg,hpLoss, Math.floor(enemyHP));  
		}
	}
}