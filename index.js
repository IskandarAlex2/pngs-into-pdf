const puppeteer = require('puppeteer');
const fs = require('fs');
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger(); // initialize the PDFMerger

const input = fs.readdirSync("Input"); // read everything inside the input directory

(async () => {
    console.log("Starting PNG to PDF converter...");

    // start puppeteer

    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", '--allow-file-access-from-files', '--enable-local-file-accesses']
    });

    //

    let howMany = 0; // for counting page order

    fs.mkdirSync("MiddleMan"); // create temporary directory
    const page = await browser.newPage(); // create page

    console.log("Registering PNG files and converting them...");

    for (howMany = 0; howMany < input.length; howMany++) {

        const ORDER_NAME = input[howMany]; // get the file name

        await page.goto(`${__dirname}/Input/${ORDER_NAME}`, { waitUntil: 'networkidle0' }); // load the PNG inside puppeteer

        // set viewport

        await page.setViewport({
            width: 1200,
            height: 1682,
        })

        //

        await page.pdf({ path: `MiddleMan/${howMany}.pdf`, format: 'A4', scale: 1 }); // convert into PDF and save it into the temporary directory
    }

    await browser.close(); // close puppeteer (it will also close the page)

    console.log("Merging all PDF files...");

    for (let i = 0; i < howMany; i++) {
        await merger.add(`MiddleMan/${i}.pdf`); // add all the PDFs into the merger
    }

    console.log("Cleaning up...");

    fs.rmSync("MiddleMan", { force: true, recursive: true }); // delete the temporary directory

    console.log("Saving output...")

    await merger.save('merged.pdf'); // save the result

    console.log("done");
    process.exit(0);
})();