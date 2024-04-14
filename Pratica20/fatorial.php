<?php
	function fatorial($N){
		$j=1;

		for($i=1; $i<=$N; $i++){
			$j=$j*$i;
		}

		echo "O fatorial de " . $N . " eh " . $j;
	}
	fatorial($_GET["N"]);
?>
