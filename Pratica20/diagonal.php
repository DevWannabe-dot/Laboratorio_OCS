<?php
	function quadrado($N){
		return $N*$N;
	}
	function diagonal($A, $B, $C){
		return quadrado($A) + quadrado($B) + quadrado($C);
	}
	echo "D = " . diagonal($_POST["A"], $_POST["B"], $_POST["C"]);
?>
