var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'e', 'i', 'o', 'e', 'i', 'o', 'u', 'h'];
var consensnts = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var starting_letters = ['c', 'd', 'l', 'm', 'n', 'r', 's', 'y'];
function random_num(x, y) {
	var rand = Math.floor((Math.random() * y) + x);
	if (rand == y + 1) {
		rand -= 1;
		return rand;
	} else {
		return rand;
	}
}
function sample_rand(lst) {
	return lst[random_num(0, (lst.length - 1))];
}
function reverseindex(str, i) {
	return str.slice(-(i))[0];
}
function checkletter(letter, lst) {
	for (i = 0; i < lst.length; i++) {
		if (lst[i] == letter) {
			return true;
		}
	}
	return false;
}
function generate_random_word(maxlength) {
	var currentword = '';
	currentword += sample_rand(alphabet);
	var preceed_Vowel_letters = ['b', 'd', 'j', 'w', 'z', 'q'];
	var a_set = ['b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
	var e_set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
	var i_set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
	var o_set = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];
	var u_set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
	var y_set = ['a', 'o', 'e', 'u'];
	var cons_next = ['a', 'i', 'e', 'o', 'u', 't', 'r'];
	for (var i = 0; i < maxlength - 3; i++) {
		if (currentword.length >= 2) {
			if (checkletter(reverseindex(currentword, 2), vowels) && (checkletter(reverseindex(currentword, 1), vowels))) {
				currentword += sample_rand(consensnts);
			}
			if (checkletter(reverseindex(currentword, 2), consensnts) && (checkletter(reverseindex(currentword, 1), consensnts))) {
				currentword += sample_rand(vowels);
			}
		}
		if (checkletter(reverseindex(currentword, 1), vowels)) {
			if (reverseindex(currentword, 1) == 'a') {
				currentword += sample_rand(a_set);
			}
			if (reverseindex(currentword, 1) == 'e') {
				currentword += sample_rand(e_set);
			}
			if (reverseindex(currentword, 1) == 'i') {
				currentword += sample_rand(i_set);
			}
			if (reverseindex(currentword, 1) == 'o') {
				currentword += sample_rand(o_set);
			}
			if (reverseindex(currentword, 1) == 'u') {
				currentword += sample_rand(u_set);
			}
		}
		if (checkletter(reverseindex(currentword, 1), consensnts)) {
			if (reverseindex(currentword, 1) == 'y') {
				currentword += sample_rand(y_set);
			}
			if (checkletter(reverseindex(currentword, 1), preceed_Vowel_letters)) {
				currentword += sample_rand(vowels);
			}
			else {
				currentword += sample_rand(cons_next);
			}
		}
	}
	return currentword;

}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function random_word_list(amount, maxlength) {
	wordlist = '';
	var i = 0;
	while (i < amount) {
		wordlist = wordlist + capitalizeFirstLetter(generate_random_word(maxlength) + '\n');
		i++;
	}
	return wordlist;
}

function displaywords() {
	var val = document.getElementById("gentext").value
	console.log(val)
	document.getElementById("output").value = random_word_list(15, val);
}

