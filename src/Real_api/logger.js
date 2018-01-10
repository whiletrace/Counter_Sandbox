
var fs = require('fs')
var path = require('path');
var rfs = require('rotating-file-stream')
var debug = require('debug')('Real_api:logger')
var winston = require('winston')
winston.emitErrs = true

// log directory location
var logDir = './src/Real_api/all_logs';
var stream;

	if(process.env.REQUEST_LOG_FILE || process.env.DEBUG){
	fs.existsSync(logDir) || fs.mkdirSync(logDir);
    var stream = rfs(logDir, {
        size: '10M',
        interval: '1d'
	})
}

	

debug(path)
 var logger = new winston.Logger({
	transports: [
	
	  new winston.transports.File({
	  	name: 'info-file',
	  	level: 'info',
	  	timeStamp: true,
	  	filename: path.join(logDir, '/access.log'),
	  	json: false,
	  	maxsize: 5242880, // 5mb
	  	maxfiles: 1,
	  }),
	  new winston.transports.File({

	  	name: 'error-file',
	  	level: 'error',
	  	filename: path.join(logDir, '/error.log'),
	  	handleExceptions: true,
	    humanReadableUnhandledException: true,
	    json: false,
	    maxsize: 5242880, // 5mb
	  	maxfiles: 1,

	  }),
	  new winston.transports.Console({
	    level: 'debug',
	    handleExceptions: false,
	    json: false,
	    colorize: true
            
        })
    ],

    exitOnError: false
    
});

module.exports = logger

module.exports.stream = {
	write: function(message, encoding) {
		logger.info(message)
	}
}
 