const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reporterOptions = {
    theme: 'bootstrap',
    jsonFile: path.resolve('./test/reports/report.json'),
    output: path.resolve('./test/reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true
};

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities:{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require:['../step_definitions/*.js'],
        format: ['json:../reports/report.json', '../../node_modules/@cucumber/pretty-formatter'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

    afterLaunch: () => {
        reporter.generate(reporterOptions);
    }
};