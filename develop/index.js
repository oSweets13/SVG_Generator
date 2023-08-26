const inquirer = require ('inquirer');
const fs = require('fs');
const jest = require('jest')
const {colors} = require ('./lib/colors')
const {Triangle, Circle, Square} = require('./lib/shapes')


const userQuestions = [
    // 3 letters
{
    type:'input',
    name:'threeLetters',
    message:'Enter the 3 letters you would desire on the logo',

    validate: threeLettersInput => {
        if(threeLettersInput.text.length > 3) {
            console.log('Please enter 3 letters');
            return false;
        }   else {
            return true;
        }
    }
},

    // text color
{
    type:'input',
    name:'textColor',
    message:'Enter the color you would like the text to be',

    validate: textColorInput => {
        const colorName = colors.includes(input.toLowerCase());
        const hexCode = /^#[0-9A-F]{6}$/i.test(input);
        return colorName || hexCode;
    }
},

    // shape
{
    type:'list',
    name:'shape',
    message:'Please select the type of shape you want',
    choices: ['Triangle','Circle','Square'],
},

    // shape color
{
    type:'input',
    name:'shapeColor',
    message:'Enter the color you would like the shape to be',

    validate: textColorInput => {
        const colorName = colors.includes(input.toLowerCase());
        const hexCode = /^#[0-9A-F]{6}$/i.test(input);
        return colorName || hexCode;
    }
}
]
.then ((data) => {
    const svgPath = "./tests/logo.svg"
    const finalLogo = generateShape(data);

    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
    err ? console.error(err) : console.log('Generated logo!'));
})
.catch((err) => console.error(err));