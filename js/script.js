var fen = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';	   


			
/*  
function clickGetPositionBtn() {
	console.log("Current position as an Object:");
			
	//Zuerst FEN-String auslesen (für die richtige Reihenfolge)
	var posFEN = board.fen();
	var pos = ChessBoard.fenToObj(posFEN);
	console.log(pos);
	console.log(berechne(posMuster,pos));
}



Bestimmung der richtig und falsch gesetzten Figuren
pos1 -> Musterstellung
pos2 -> Eingegebene Stellung 
*/


function berechne(fen1, fen2) {	
			
	var pos1 = ChessBoard.fenToObj(fen1);
	var pos2 = ChessBoard.fenToObj(fen2);
	
	var anzahl1 = Object.keys(pos1).length;
	//var anzahl2 = Object.keys(pos2).length;
			
	var richtig = 0;
	var falsch = 0;
	
		for (var prop in pos2) {
			if (pos1.hasOwnProperty(prop)) {
				if(pos1[prop] === pos2[prop]) {
					richtig++;
				}
			}
			else falsch++;
		}
			
		return "Richtige Figuren: " + richtig +"/"+anzahl1 
		+ "\nFalsche Figuren: " + falsch;	
}
