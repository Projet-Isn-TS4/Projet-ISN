// variables globales :
var grille= new Array(7); // les indices vont de 0 à 6, seuls les indices 1 à 6 correspondent à la grille réelle
// pour créer un tableau à 2 dimensions on crée à la main un second tableau dans le premier :
for (i=0;i<=6;i++) {
	grille[i]= new Array(8);
	}


function remise_a_zero()
{
for (i=1;i<=6;i++) {
	for (j=1;j<=7;j++) {
		cellule=i+":"+j;
		document.getElementById(cellule).innerHTML = '<img src="images/blanc.png" width="60" height="60" />'; //chaque case contient une image blanche
		grille[i][j]=0;
		}
	joueur=1;
	document.getElementById("ma_balise").innerHTML = 'NOUVELLE PARTIE - Couleur du prochain joueur : BLEU';	}
	document.getElementById("score").innerHTML = '&nbsp;'; //'&nbsp;'=espace
}


function jouer_pion(i)
{
    // extrait le 1er et 3ème caractère dans la chaine i qui est de la forme 2:5
	y=eval(i.charAt(0));
	x=eval(i.charAt(2));
	
	//recherche le nombre de pions déjà joués dans cette colonne :
	n=0;
	for (j=1;j<=6;j++) 
		{
			if (grille[j][x]!=0) { n++ }
		}
    n=6-n;
	
	if (n==0)
	{
		document.getElementById("score").innerHTML = 'La colonne est pleine'; //si le joueur joue sur une colonne pleine : msg d'erreur
	}
	else
	{
		document.getElementById("score").innerHTML = '&nbsp;'; 
		cellule=n+":"+x;
		if (joueur==1)
		{ 
		 document.getElementById(cellule).innerHTML = '<img src="images/bleu.png" width="60" height="60" />'; 
		 grille[n][x]=1;
		 joueur=2;
		 document.getElementById("ma_balise").innerHTML = 'Couleur du prochain joueur : ROUGE';	
		}
		else
		{ 
		 document.getElementById(cellule).innerHTML = '<img src="images/rouge.png" width="60" height="60" />';
		 grille[n][x]=1;
		 joueur=1;
		 document.getElementById("ma_balise").innerHTML = 'Couleur du prochain joueur : BLEU';	
		}
	}
}

// Programme principal


document.write("<center><table border=\"3\" cellpadding=\"0\" cellspacing=\"0\" bordercolor=\"#252629\">");
for (i=1;i<=6;i++) {
 	document.write("<tr>");
	for (j=1;j<=7;j++) {
 		document.write("<td width=\"60\" height=\"60\" id=\""+i+":"+j+"\" onClick='jouer_pion(\""+i+":"+j+"\")'><img src=\"blanc.png\" width=\"60\" height=\"60\" /></td>");
		} 
	document.write("</tr>");
	}
document.write("</table></center>");
remise_a_zero()