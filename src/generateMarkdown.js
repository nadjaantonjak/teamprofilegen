// generates a readme from the inquirer answers
const generateMarkdown = (mapMembersCards) =>

  `<!DOCTYPE html>
  <head>
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
   
  
    </head>
  <body>
    <div class="jumbotron bg-danger text-white">
      <h1 class="text-center">Nadja's Team Profile </h1>
    </div>
    <div class="container">
      <div class="card-deck">
        <div class="row justify-content-center">
        
         
        
   


   
        
         ${mapMembersCards}
        </div>
      </div>
      
    </div>
  </body>
  </html>
`;

module.exports = generateMarkdown;