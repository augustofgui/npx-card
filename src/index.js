#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from 'chalk';
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const username = "augustofgui";

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: chalk.green("What you want to do?"),
        choices: [
            {
                name: "Send me an email.",
                value: () => {
                    open("mailto:" + username + "@gmail.com");
                    console.log("\n" + chalk.greenBright("Done") + ", see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.cyan.bold(" Augusto Ferreira Guilarducci"),
    desc: `${chalk.cyanBright.bold(" Full Stack")} ${chalk.whiteBright("Developer")}`,
    school: `${chalk.whiteBright(" Student Computer Science in")} ${chalk.cyanBright.bold("UFOP")}`,
    twitter: chalk.blue(" https://twitter.com/" + username),
    github: chalk.blue("  https://github.com/" + username),
    linkedin: chalk.blue("https://linkedin.com/in/" + username),
    npx: chalk.red("npx") + " " + chalk.white(username),

    labelSchool: chalk.white.bold(" University:"),
    labelWork: chalk.white.bold(" Work:"),
    labelTwitter: chalk.white.bold(" Twitter:"),
    labelGitHub: chalk.white.bold(" GitHub:"),
    labelLinkedIn: chalk.white.bold(" LinkedIn:"),
    labelCard: chalk.white.bold(" Card:"),

    quote: chalk.italic('"Coding is easy, you simply shouldn\'t try at all." ~ Me, sadly'),
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.desc}`,
        `${data.school}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard} ${data.npx}`,
        ``,
        `${data.quote}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 2,
        borderStyle: "single",
        borderColor: "#8FBCBB"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.green.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());