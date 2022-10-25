### General Information
This is PNGs to PDF converter NodeJS script, it will convert all PNG files inside the `Input` Directory into a single PDF file, for page order simply name those PNG files in numerical order

### NodeJS version
v16.15.0

### Warning
Resolution of the PNG files must be **1200**x**1683** (width, height), otherwise the PDF conversion will behave badly

### How it works
It will start a Puppeteer browser and render all the PNG and convert it into PDF and store it into temporary directory that automatically generate and delete during execution, it do that all for given PNGs in order, after that it will merge all the PDFs in order, lastly save the result into the same directory the script living in and delete the temporary directory, everything is Sync so the execution only exits when it finished everything.

### Installation
Download this repository and run `npm install` to install all the required dependencies and remove all the placeholder inside `Input` Directory if you want to.

### How to use
Provide all PNGs you want to convert into `Input` Directory and change their name with number order if you want to, run `npm start` and the result will be in the same directory the script lives in as `merged.pdf`.

### Used dependencies
**express**: ^4.18.2 \
**fs**: ^0.0.1-security \
**pdf-merger-js**: ^4.1.2 \
**puppeteer**: ^19.1.1

### Reason I made this
The reason I made it is very straightforward, we all use PDFs normally for work and often we want to convert a lot of PNG files (images) into a single PDF file, the issue is that if you want to do that online services tend to give you delays, queues and even have to pay, the other issue is also PDF documents almost always contain sensitive data, let's say ID numbers, number phone, location, etc, if you were to convert those PNGs containing those data know that those PNGs got uploaded to the service host database, sure they say they won't keep and track your data, but will they? so I made this to allow anyone to convert PNGs to PDF on their own machine without having to pay nor internet at all

### Copyright
As the reason suggests, you're free to use this, by either embedding it into your application or hosting a service and put price on it, without permission. (but make sure used dependencies also allow you to use them)
