#!/bin/bash


## Variables

# Directory for CV ( same )
cvDir=.


# Directory for CV Builds
# excuse the hard coding!
cvBuildDir=/Users/factornine/localhosts/www.factornine.co.uk/factornine.co.uk/cv/builds
#cvBuildDir=.builds


# Directory for the output
cvOutputDir=/Users/factornine/localhosts/www.factornine.co.uk/factornine.co.uk/cv/output

# Name of the CV file
#cvName="Russell Wenban - CV - $(date +%Y-%m-%d)"

cvName="cv"

###
## Create HTML files for each Markdown file
#

for i in $(ls $cvBuildDir/*md) ; do
  echo $i
  echo $cvBuildDir
  # Get the name of the file, sans extension, for generating HTML file
  cvBuildName=$(basename "$i" .md)
  # Convert to HTML
  pandoc --section-divs -f markdown -t  html5 -o $cvOutputDir/$cvBuildName.html $i
done

###
## Join the HTML files into one HTML CV
#

#-A $cvOutputDir/cv.html \
echo $cvBuildDir

pandoc -s -H $cvBuildDir/simple.css --section-divs -f markdown -t html5 \
-o "$cvOutputDir/$cvName.html" \
-A $cvOutputDir/objective.html \
-A $cvOutputDir/skills.html \
-A $cvOutputDir/experience.html \
-A $cvOutputDir/interests.html \
-A $cvOutputDir/self-study.html \
-A $cvOutputDir/education.html \
-A $cvOutputDir/github.html \
-A $cvOutputDir/factornine.html \
-A $cvOutputDir/social-media.html \
-A $cvOutputDir/references-request.html \
$cvBuildDir/cv.md

# -A $cvOutputDir/react.html \

# Convert HTML to PDF
pandoc -H  $cvBuildDir/f9.tex "$cvOutputDir/$cvName.html" -o "$cvOutputDir/$cvName.pdf"

# Convert HTMl to Word
pandoc -H $cvBuildDir/f9.tex "$cvOutputDir/$cvName.html" -o "$cvOutputDir/$cvName-$(date +%y%m%d).docx"

###
## Cover Letter
#

# Convert HTML to PDF
pandoc -H $cvBuildDir/f9.tex "$cvOutputDir/cover-letter.html" -o "$cvOutputDir/Cover-Letter-$(date +%y%m%d).pdf"

# pandoc -H $cvBuildDir/pdf-template.tex "$cvBuildDir/cover-letter.md" -o "$cvOutputDir/Cover-Letter-$(date +%Y-%m-%d).pdf
