const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info:{
        title : "Users Api",
        description : "Users Api"
    },
    host: "https://cse-w0304-project2.onrender.com",
    schemes: ["https"]
}


const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/bookRoutes.js",
    "./routes/authorRoutes.js" 
] ;

//This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);