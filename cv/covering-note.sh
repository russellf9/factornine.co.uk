#!/usr/bin/env bash


## Variables


# Directory for files ( same )
dir=.


# Directory for builds
# excuse the hard coding of the full path!
buildDir=/Users/factornine/localhosts/www.factornine.co.uk/website/cv/cover-note-builds


# Directory for the output
outputDir=/Users/factornine/localhosts/www.factornine.co.uk/website/cv/cover-note-output



name="cover-note"


###
## Join the Mark-down files into one file

pandoc -s \
-o "$outputDir/$name.html" -f markdown -t html5 \
-A $buildDir/looking.md \
-A $buildDir/recent-focus.md \
-A $buildDir/github.md \
-A $buildDir/contact.md \
-A $buildDir/thanks.md \
$buildDir/salutation.md


# Convert to Markdown

pandoc -s -r html $outputDir/$name.html -o $outputDir/$name.text
