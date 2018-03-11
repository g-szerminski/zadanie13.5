var osInfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	var help = 'ver - node version\n\
    			osinfo - system information\n\
    			lang - OS language\n\
   				help - this info\n\
    			exit - exit program\n';

	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case 'exit': 
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;
		 	case 'ver':
		 		process.stdout.write('Node version is: ' + process.versions.node + '\n');
		 	break;
		 	case 'lang':
		 		process.stdout.write('Environment language is: ' + process.env.lang + '\n');
		 	break;
		 	case 'osinfo':
		 		osInfo.print();
		 	break;
		 	case 'help':
				process.stdout.write('Usage: \n' + help);
			break;
		 	default:	
				process.stderr.write('Wrong instruction!\n');
		}
	}
});