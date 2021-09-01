// create the team
const generateSite = (employeeInfo) => {
    const generateManager = Manager => {
        return `
        <div>
            <h1>${Manager.getName()}</h1>
            <h2>${Manager.getRole()}</h2>
            <h2>${Manager.getID()}</h2>
            <h2>${Manager.getOfficeNumber()}</h2>
        </div>
        `;
    };
    const generateEngineer = Engineer => {
        return `
            <div>
                <h1>${Engineer.getName()}</h1>
                <h2>${Engineer.getRole()}</h2>
                <h2>${Engineer.getID()}</h2>
                <h2>${Engineer.getOfficeNumber()}</h2>
            </div>
        `;
    };
    const generateIntern = Intern => {
        return `
            <div>
                <h1>${Intern.getName()}</h1>
                <h2>${Intern.getRole()}</h2>
                <h2>${Intern.getID()}</h2>
                <h2>${Intern.getOfficeNumber()}</h2>
            </div>
        `;
    };
}

// export function to generate entire page
module.exports = employeeInfo => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Employee Info</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1> Employee Info </h1>
    </div>
    <div>
        ${generateSite(employeeInfo)}
    </div>
</body>
</html>
    `;
};