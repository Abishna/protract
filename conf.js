//Register protractor-jasmine2-html-reporter in jasmine
 var HtmlScreenshotReporter = require('C:/Users/sys-user/node_modules/protractor-jasmine2-html-reporter');
 var today = new Date(),
 timeStamp =  today.getDate() +'-'+today.getMonth() + 1 + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
 var reporter = new HtmlScreenshotReporter({
  
        cleanDestination: true,
        showSummary: true,
        showConfiguration: true,
        showQuickLinks: true,
		reportTitle: "Test " + timeStamp,
		savePath: 'target/Reports',
		fileName: 'testReports_'+ timeStamp,    
        
 });

exports.config = {
   // The address of a running selenium server.
   seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
   capabilities: {
     'browserName': 'chrome'
   },

  // Spec patterns are relative to the configuration file location passed
   // to protractor (in this example conf.js).
   // They may include glob patterns.
   specs: ['login_spec.js'],

  // Options to be passed to Jasmine-node.
   jasmineNodeOpts: {
     showColors: true,
     defaultTimeoutInterval: 2500000,	 // Use colors in the command line report.
   },
   
    // Assign the test reporter to each running instance
    onPrepare: function() {
       jasmine.getEnv().addReporter(reporter);
    }
 };