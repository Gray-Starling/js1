"use strict";

//Очень долго мучался, пока не нагуглил проверку в виде (i <= n/2), и даже сейчас не могу сообразить как она появилась

let maxN = 100;
let n = 2;
while (n <= maxN) {
	let flag = true;
	let i = 2;
	while ((i <= n / 2) && (flag == true)) {
		if (n % i == 0) {
			flag = false;
		}
		i++;
	} if (flag == true) {
		document.write(n + ", ");
	}
	n++;
}



