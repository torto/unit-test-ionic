// Karma configuration
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'www/lib/angular/angular.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'www/js/**/*.js',
            'test/**/*Test.js',
            {
                pattern: 'test/**/*.json',
                watched: true,
                served: true,
                included: false
            }, {
                pattern: 'www/**/*.svg',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'www/**/*.png',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'www/**/*.jpg',
                watched: false,
                included: false,
                served: true
            }
        ],
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'www/'
        },


        // list of files to exclude
        exclude: ['www/js/app.js'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'www/js/directives/**/*.html': 'ng-html2js',
            'www/js/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'coverage/'
            }, {
                type: 'text-summary'
            }]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Firefox'],
        // browsers: ['Chrome'],
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
