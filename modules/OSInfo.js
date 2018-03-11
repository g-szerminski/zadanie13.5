var os = require('os');
var colors = require('colors');
var uptime = require('../modules/time');
var release = os.release();
var cpu = os.cpus()[0].model;
var userInfo = os.userInfo();
var type = os.type();

function getOsInfo() {
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
	}

	console.log('System:'.gray, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime: '.green, uptime.time());
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.white, userInfo.homedir);
};

exports.print = getOsInfo;