#!/bin/bash

rm -fr ../dist ../bower_components/ ../images ../scripts ../styles ../.htaccess ../404.html ../favicon.ico ../index.html ../robots.txt
grunt
mv ../dist/* ../
rm -fr ../dist
