#!/bin/bash


## Variables

# Directory for CV ( same )
cvDir=.


# Directory for CV Builds
# excuse the hard coding!
cvBuildDir=/Users/factornine/localhosts/www.factornine.co.uk/website/cv/builds
#cvBuildDir=.builds


# Directory for the output
cvOutputDir=/Users/factornine/localhosts/www.factornine.co.uk/website/cv/output

# Name of the CV file
#cvName="Russell Wenban - CV - $(date +%Y-%m-%d)"

cvName="cv"

###
## Create HTML files for each Markdown file
#

for i in $(ls $cvBuildDir/*md) ; do
  echo $i
  # Get the name of the file, sans extension, for generating HTML file
  cvBuildName=$(basename "$i" .md)
  # Convert to HTML
  pandoc --normalize --section-divs -f markdown -t  html5 -o $cvOutputDir/$cvBuildName.html $i
done

###
## Join the HTML files into one HTML CV
#

#-A $cvOutputDir/cv.html \


pandoc -s -H $cvBuildDir/simple.css --section-divs -f markdown -t html5 \
-o "$cvOutputDir/$cvName.html" \
-A $cvOutputDir/objective.html \
-A $cvOutputDir/skills.html \
-A $cvOutputDir/experience.html \
-A $cvOutputDir/education.html \
-A $cvOutputDir/github.html \
-A $cvOutputDir/factornine.html \
-A $cvOutputDir/social-media.html \
-A $cvOutputDir/references-request.html \
$cvBuildDir/cv.md


# Convert HTML to PDF
pandoc -H  $cvBuildDir/f9.tex "$cvOutputDir/$cvName.html" -o "$cvOutputDir/$cvName.pdf"

# Convert HTMl to Word
pandoc -H $cvBuildDir/f9.tex "$cvOutputDir/$cvName.html" -o "$cvOutputDir/$cvName.docx"

###
## Cover Letter
#

# Convert HTML to PDF
pandoc -H $cvBuildDir/f9.tex "$cvOutputDir/cover-letter.html" -o "$cvOutputDir/Cover-Letter-$(date +%Y-%m-%d).pdf"

# pandoc -H $cvBuildDir/pdf-template.tex "$cvBuildDir/cover-letter.md" -o "$cvOutputDir/Cover-Letter-$(date +%Y-%m-%d).pdf
