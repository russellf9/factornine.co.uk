# CV

## Description

I'm in the process of automating the process of writing my CV in formats for web and distribution.

See: [Trello #57-cv-task-md-html](russellwenban1+52f3c97a4fe671c230c877f0+54f5fd00a74831cf3d0f28b5+9fb7cea7a3d6d74d13d5ae12cc14ed4625972d2e@boards.trello.com)




## Instructions

To create the output files fron the source:

```
# CD to `factornine.co.uk/cv`
sh cv.sh
```

So far, rather than using a MD file as the source I'm using the HTML file.

To export the HTML to a docx file using Pandoc:

```
# CD to `factornine.co.uk/cv/output`
pandoc -s -S cv.html -o cv.docx
```

The output needs to be tidied up before distributing as a document.



