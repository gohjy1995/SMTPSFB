window.addEventListener("DOMContentLoaded", (event) => {
  const sheetDataHandler = (sheetData) => {
    console.log("sheet data: ", sheetData);
    function generateHTML(data) {
      let html = '<table style="border-collapse: collapse; width: 100%;">';
  
    // Use the first object as the header
    const header = Object.keys(data[0]);
    html += '<thead><tr>';
    header.slice(2).forEach(col => {
      html += `<th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #4caf50; color: white; font-weight: bold;">${col}</th>`;
    });
    html += '</tr></thead>';
    
    // Iterate through the objects and create table rows
    html += '<tbody>';
    Object.values(data).forEach(obj => {
      html += '<tr>';
      header.forEach(col => {
        html += `<td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${obj[col]}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
        return html;
      }
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = generateHTML(sheetData);

    // Generate HTML table content
    htmlTable = generateHTML(sheetData);

    //ADD YOUR CODE TO WORK WITH sheetData ARRAY OF OBJECTS HERE
  };
  // --==== QUERY EXAMPLES ====--
  // --==== USE LETTERS FOR COLUMN NAMES ====--
  //  'SELECT A,C,D WHERE D > 150'
  //  'SELECT * WHERE B = "Potato"'
  //  'SELECT * WHERE A contains "Jo"'
  //  'SELECT * WHERE C = "active" AND B contains "Jo"'
  //  "SELECT * WHERE E > date '2022-07-9' ORDER BY E DESC"

  getSheetData({
    // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
    sheetID: "1Gd-AUTEOffmpO1oBQQbQ--eTOwM6gX98Yz8saP8scWE",
    // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
    sheetName: "test",
    // query: "SELECT * WHERE B > 250 AND C < date '1960-01-1' AND D = FALSE",
    query: "SELECT A, B",
    callback: sheetDataHandler,
  });
});

let htmlTable;
const submit = document.getElementsByClassName('email')[0];
const recipients = ["gohjy1995@gmail.com", "gohjy95@gmail.com"];

// Function to send email using SMTPJS
function sendEmail(htmlContent, recipients) {
  Email.send({
    SecureToken : "a5ab28b7-958d-4308-b9f8-e1ff0344a08d",
    To : recipients.join(", "),
    From : "josiahgoht@gmail.com",
    Subject : "This is the subject",
    Body: htmlContent,
  });
}

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log("Entered");
    // Send email with HTML table content
  sendEmail(htmlTable, recipients);
  console.log("Exited");

});

//2BF26B5679F7D47F5E2A99B2EEF3CDFAB285 stmp password

//a5ab28b7-958d-4308-b9f8-e1ff0344a08d security token
