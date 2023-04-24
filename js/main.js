const btns = document.querySelectorAll('.btn')
let hasAdjacentLetters
const PreventHandler = () => {
	btns.forEach(btn =>
		btn.addEventListener('click', () => {
			if (btn.classList.contains('ex1btn')) {
				Palindrome()
			} else if (btn.classList.contains('ex2btn')) {
				const ex2input = document.querySelector('.ex2input').value
				const ex2label = document.querySelector('.ex2label')
				AdjacentLetters(ex2input, ex2label)
			} else if (btn.classList.contains('ex3btn')) {
				const ex3input = document.querySelector('.ex3input').value
				const devideinput = document.querySelector('.ex3devideinput').value
				const ex3label = document.querySelector('.ex3label')
				divideByDigit(ex3input, devideinput, ex3label)
			}
		})
	)
}

const Palindrome = () => {
	let inputvalue = document.querySelector('.ex1input').value
	const ex1label = document.querySelector('.ex1label')
	if (inputvalue === '') {
		ex1label.textContent = 'Prosze Wpisac Liczbe!'
	} else {
		isPalindrome(inputvalue, ex1label)
	}
}
function isPalindrome(number, label) {
	const str = number.toString()
	const reverseStr = str.split('').reverse().join('')
	if (str === reverseStr) {
		label.textContent = 'Liczba Jest Palindromem!'
	} else {
		label.textContent = 'Liczba Nie Jest Palindromem!'
	}
}

const AdjacentLetters = (word1, label) => {
	const word = word1.trim()
	if (word === '') {
		label.textContent = 'Prosze Wpisac Slowo!'
		return false
	}
	for (let i = 0; i < word.length - 1; i++) {
		if (word[i] === word[i + 1]) {
			hasAdjacentLetters = true
			break
		}
	}

	if (hasAdjacentLetters) {
		label.textContent = '2 litery sa takie same!'
		hasAdjacentLetters = false
	} else {
		label.textContent = 'Nie ma dwoch takich samych liter :('
		hasAdjacentLetters = false
	}
}

PreventHandler()

function divideByDigit(numStr, divisor, label) {
	let quotient = ''
	let remainder = 0
	if (divisor == 0) {
		label.textContent = 'Nie można dzielić przez 0!'
		return false
	}

	for (let i = 0; i < numStr.length; i++) {
		const currentDigit = parseInt(numStr[i])

		const partialDividend = remainder * 10 + currentDigit
		const partialQuotient = Math.floor(partialDividend / divisor)
		remainder = partialDividend % divisor

		quotient += partialQuotient.toString()
	}

	if (quotient.startsWith('0')) {
		quotient = quotient.slice(1)
	}

	label.textContent = `Wynik pojawi sie tutaj: ${quotient}`
	return [quotient]
}
