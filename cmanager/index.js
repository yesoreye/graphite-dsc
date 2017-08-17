var fs = require('fs');
var _ = require("lodash");
var ini = require('ini');

var baseConfig, overrideConfig;

var replaceIniConfig = function(configuration) {
    try {
        fs.readFile(configuration.base, function(err, content) {
            if (err) {
                console.log("File Reading Error", configuration.base);
            } else {
                baseConfig = ini.parse(content.toString());
                fs.readFile(configuration.override, function(err, content1) {
                    if (err) {
                        console.log("File Reading Error", configuration.override);
                    } else {
                        overrideConfig = ini.parse(content1.toString());
                        fs.writeFile(configuration.destination, ini.stringify(_.merge(baseConfig, overrideConfig)), function(err, res) {
                            if (err) console.log("Error while writing the file", configuration.destination);
                            else console.log("Done", configuration.override, configuration.destination);
                        })

                    }
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }

}
if (process.argv[2]) {
    if (process.argv[2].toLowerCase() === "general") {
        if (process.argv[3] && process.argv[4] && process.argv[5]) {
            var c = {
                type: process.argv[2],
                base: process.argv[3],
                override: process.argv[4],
                destination: process.argv[5],
            }
            replaceIniConfig(c);
        } else console.log("No enouogh arguments");
    }
} else console.log("No enough arguments");
