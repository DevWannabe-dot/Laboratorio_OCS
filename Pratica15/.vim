function! Fatorial(n)
	" Calcula o fatorial de um numero n
 	let fat = 1
	let i = a:n
	while i >= 1
		let fat *= i
		let i -= 1
	endwhile
	return fat
endfunction

function! CalcularCosseno(x)
	let num = a:x
	let i = 0
	let n = 2
	let cos_x = 0.0

	while i <= 5
 		let cos_x += pow(num, n) / Fatorial(n)
		let n += 2
		let cos_x -= pow(num, n) / Fatorial(n)
		let n += 2
		let i += 1
	endwhile

	return 1.0 - cos_x
endfunction                                                                                                                                                                                                

" Valor de teste em relacao a pi (radianos)
let x = 3.14159
let cosX = CalcularCosseno(x)
                                             
echo "\nO cosseno de " x " eh " cosX
