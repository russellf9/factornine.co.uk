#!/bin/bash

echo "Hi from the script"


## Variables

# Directory for CV ( same )
cvDir=.

# Directory for CV Builds
# excuse the hard coding!
cvBuildDir=/Users/factornine/localhosts/www.factornine.co.uk/website/cv/builds
#cvBuildDir=.builds

# Name of the CV file
cvName="Russell Wenban - CV - $(date +%Y-%m-%d)"

###
## Create HTML files for each Markdown file
#

for i in $(ls $cvBuildDir/*md) ; do
  echo $i
  # Get the name of the file, sans extension, for generating HTML file
  cvBuildName=$(basename "$i" .md)
  # Convert to HTML
  pandoc --section-divs -f markdown -t html5 -o $cvBuildDir/$cvBuildName.html $i
done

###
## Join the HTML files into one HTML CV
#

pandoc -s -H $cvBuildDir/poole.css --section-divs -f markdown -t html5 \
-o "$cvDir/$cvName.html" \
-A $cvBuildDir/cv.html \
-A $cvBuildDir/experience.html \
-A $cvBuildDir/github.html \
-A $cvBuildDir/factornine.html \
$cvBuildDir/cv.md

