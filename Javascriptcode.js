<script type="text/javascript">
		var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");

       
	
	
	
         //////Triangle
		ctx.beginPath();
		ctx.moveTo(160,400);
		ctx.lineTo(300,300);
		ctx.lineTo(400,400);
		
		    //////Carre
		ctx.lineTo(400,520);
		ctx.lineTo(160,520);
		ctx.lineTo(160,400);
		ctx.lineWidth=2;
		ctx.strokeStyle='#black';
		ctx.fillStyle='#F9CD65'
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		 ////////Porte 1
		ctx.beginPath();
		ctx.moveTo(257, 485);
		ctx.lineTo(320, 485);
		ctx.lineTo(320, 415);
		ctx.lineTo(257, 415);
		ctx.lineWidth=2;
		ctx.strokeStyle='#black';
		ctx.fillStyle='#97BDD8';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		    ////////Mini rectangle in door 1
		  ctx.beginPath();
		ctx.moveTo(257, 475);
		ctx.lineTo(320,475);
		ctx.lineTo(320, 485);
		ctx.lineTo(257, 485);
		ctx.lineWidth=2;
		ctx.strokeStyle='#000';
		ctx.fillStyle='#F9CD65';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		
		  //////Triangle
		ctx.beginPath();
		ctx.moveTo(230,382);
		ctx.lineTo(290,335);
		ctx.lineTo(340,382);
		ctx.lineWidth=2;
		ctx.strokeStyle='#black';
		ctx.fillStyle='#97BDD8'
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		  ////////Porte 2
		ctx.beginPath();
		ctx.moveTo(370, 485);
		ctx.lineTo(340, 485);
		ctx.lineTo(340, 415);
		ctx.lineTo(370, 415);
		ctx.lineWidth=2;
		ctx.strokeStyle='#black';
		ctx.fillStyle='#97BDD8';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
				  
		
		
		  ////////Porte 3
		ctx.beginPath();
		ctx.moveTo(235, 485);
		ctx.lineTo(199, 485);
		ctx.lineTo(199, 415);
		ctx.lineTo(235, 415);
		ctx.lineWidth=2;
		ctx.strokeStyle='#black';
		ctx.fillStyle='#97BDD8';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		
		
		
		////////trace in Door 1 
		ctx.beginPath();
		ctx.moveTo(290, 475); //  496 pr lngr b , 280 2plase b vers la droite 
		ctx.lineTo(290, 415); ///415 pour lngr h , 280 + 2plase h vers la droite , - 2plase h vers la gauche 
		//ctx.lineTo(300, 420);
	    //ctx.lineTo(275, 420);
		ctx.lineWidth=2;
		ctx.strokeStyle='#000';
		ctx.fillStyle='e3d647';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		
		
		
////////trace in window 
		ctx.beginPath();
		ctx.moveTo(290, 383); //  485 pr lngr b , 280 2plase b vers la droite 
		ctx.lineTo(290, 336); ///415 pour lngr h , 280 + 2plase h vers la droite , - 2plase h vers la gauche 
		//ctx.lineTo(300, 415);
	    //ctx.lineTo(275, 415);
		ctx.lineWidth=2;
		ctx.strokeStyle='#000';
		ctx.fillStyle='e3d647';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		
		////////trace in window  2
		ctx.beginPath();
		ctx.moveTo(260, 358); //  485 pr lngr b , 280 2plase b vers la droite 
		ctx.lineTo(315, 358); ///415 pour lngr h , 280 + 2plase h vers la droite , - 2plase h vers la gauche 
		//ctx.lineTo(300, 415);
	    //ctx.lineTo(275, 415);
		ctx.lineWidth=2;
		ctx.strokeStyle='#000';
		ctx.fillStyle='e3d647';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
    
    
//////// Chemine
		ctx.beginPath();
		ctx.moveTo(330, 350);
		ctx.lineTo(330, 300);
		ctx.lineTo(350, 300);
		ctx.lineTo(350, 370);
		ctx.lineWidth=2;
		ctx.strokeStyle='#red';
		ctx.fillStyle='#F9CD65';
		ctx.fill();
		ctx.stroke();
		
		////////En Tete Chemine
		ctx.beginPath();
		ctx.moveTo(320, 300);
		ctx.lineTo(360, 300);
		ctx.lineTo(360, 290);
		ctx.lineTo(320, 290);
		ctx.lineWidth=2;
		ctx.strokeStyle='#000';
		ctx.fillStyle='blue';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();

		
		

     ////////////Trace 1 a.g
		ctx.beginPath();
		ctx.moveTo(145,408);
		ctx.lineTo(299, 300);
		//ctx.lineTo(300,400);
		//ctx.lineTo(160,400);
		ctx.lineWidth=15;
		ctx.strokeStyle='#4440A9';
		ctx.fillStyle='#A99db5';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		 ////////////Trace 2 a.g
		ctx.beginPath();
		ctx.moveTo(149,414);
		ctx.lineTo(299, 310);
		//ctx.lineTo(300,410);
		//ctx.lineTo(160,410);
		ctx.lineWidth=12;
		ctx.strokeStyle='#292EA6';
		ctx.fillStyle='blue';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		 ////////////Trace 2 a.d
		ctx.beginPath();
		ctx.moveTo(410,420);
		ctx.lineTo(290, 309);
		//ctx.lineTo(300,400);
		//ctx.lineTo(160,400);
		ctx.lineWidth=15;
		ctx.strokeStyle='#292EA6';//292EA6
		ctx.fillStyle='#8e47e3';//#8e47e3
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
	
     ////////////Trace 1 a.d
		ctx.beginPath();
		ctx.moveTo(416, 414);
		ctx.lineTo(294, 300);
		//ctx.lineTo(300,400);
		//ctx.lineTo(160,400);
		ctx.lineWidth=10;
		ctx.strokeStyle='#4440A9';
		ctx.fillStyle='000';
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
		
		
		

			//ctx.beginPath();
		//ctx.moveTo(310, 350);
		//ctx.lineTo(340, 350);
		//ctx.lineTo(325, 335);
		//ctx.lineTo(325, 379);
		//ctx.lineWidth=2;
		//ctx.strokeStyle='#000';
		//ctx.fill();
		//ctx.stroke();

		
		

	</script>
