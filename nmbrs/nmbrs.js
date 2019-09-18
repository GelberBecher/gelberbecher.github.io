function main() {
	
	
	
}

function konv() {
	var input = document.getElementById("input").value.toString();
	var insys = document.getElementById("inputsys").value;
	var outsys = document.getElementById("outputsys").value;
	var output = "";
	
	var stored = 0;
	var length = input.length;
	
	while(length > 0) {
		var inp = konvChar(input.substring(0,1));
		if(inp>insys-1) {
			alert("Die eingegebene Zahl besitzt zu große Ziffern für das angegebene Zahlensystem.");
			return;
		}
		input = input.substring(1,length);
		stored += inp*(insys**(length-1));
		length--;
	}
	
	document.getElementById("dez").innerHTML = stored;
	var store = "";
	
	while(stored>0) {
		store += konvInt(stored%outsys);
		stored = Math.floor(stored / outsys);		
	}
	
	while(store != "") {
		output = output + "" + store.substring(store.length-1,store.length);
		store = store.substring(0,store.length-1);
	}
		
	document.getElementById("output").innerHTML = output;
}

/*
ABCDEF; 36; 2;
--toDez----------------
for {
stored *= 10;
in = A; ["A"]
36 <= 36 {return "wasauchimmer";}
in = A.konvChar; [36]
stored += in*(insys**stelle);
}
--fromDez--------------
for {
stored % outsys;
out = stored / outsys;
}
-----------------------

*/

function konvChar(input) {
	switch(input) {
		case "0": return 0;
		case "1": return 1;
		case "2": return 2;
		case "3": return 3;
		case "4": return 4;
		case "5": return 5;
		case "6": return 6;
		case "7": return 7;
		case "8": return 8;
		case "9": return 9;
		case "a": 
		case "A": return 10;
		case "b": 
		case "B": return 11;
		case "c": 
		case "C": return 12;
		case "d": 
		case "D": return 13;
		case "e": 
		case "E": return 14;
		case "f": 
		case "F": return 15;
		case "g":		
		case "G": return 16;
		case "h": 
		case "H": return 17;
		case "i": 
		case "I": return 18;
		case "j": 
		case "J": return 19;
		case "k": 
		case "K": return 20;
		case "l": 
		case "L": return 21;
		case "m": 
		case "M": return 22;
		case "n": 
		case "N": return 23;
		case "o": 
		case "O": return 24;
		case "p": 
		case "P": return 25;
		case "q": 
		case "Q": return 26;
		case "r": 
		case "R": return 27;
		case "s": 
		case "S": return 28;
		case "t": 
		case "T": return 29;
		case "u": 
		case "U": return 30;
		case "v": 
		case "V": return 31;
		case "w": 
		case "W": return 32;
		case "x": 
		case "X": return 33;
		case "y": 
		case "Y": return 34;
		case "z": 
		case "Z": return 35;
		default:  return 0;
	}
}

function konvInt(input) {
	switch(input) {
		case 0: return 0;
		case 1: return 1;
		case 2: return 2;
		case 3: return 3;
		case 4: return 4;
		case 5: return 5;
		case 6: return 6;
		case 7: return 7;
		case 8: return 8;
		case 9: return 9;
		case 10: return "A";
		case 11: return "B";
		case 12: return "C";
		case 13: return "D";
		case 14: return "E";
		case 15: return "F";
		case 16: return "G";
		case 17: return "H";
		case 18: return "I";
		case 19: return "J";
		case 20: return "K";
		case 21: return "L";
		case 22: return "M";
		case 23: return "N";
		case 24: return "O";
		case 25: return "P";
		case 26: return "Q";
		case 27: return "R";
		case 28: return "S";
		case 29: return "T";
		case 30: return "U";
		case 31: return "V";
		case 32: return "W";
		case 33: return "X";
		case 34: return "Y";
		case 35: return "Z";
		default: return 0;
	}
}

/*
12345 = 
12345%100
45/10
4

stelle1*insys^0
stelle2*insys^1
stelle3*insys^2
*/