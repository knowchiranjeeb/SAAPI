// Required Dependencies
//const https = require('https');
//const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const btypeRoutes = require('./src/BusinessType');
const indtypeRoutes = require('./src/IndustryType');
const fiscalRoutes = require('./src/FiscalYear');
const curRoutes = require('./src/Currency');
const contRoutes = require('./src/Country');
const langRoutes = require('./src/Language');
const datformatRoutes = require('./src/DateFormat');
const salRoutes = require('./src/Salutation');
const stateRoutes = require('./src/State');
const gsttreatRoutes = require('./src/GSTTreatment');
const compRoutes = require('./src/Company');
const itemRoutes = require('./src/Items');
const hsnRoutes = require('./src/HSNCode');
const userRoutes = require('./src/Users');
const cors = require('cors');
const app = express();
const port = 8080;


app.use(cors());

// Middleware
app.use(bodyParser.json());


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "KF Invoice SA API",
        version: "1.0.0",
        description: "KF Invoice SA API",
        contact: {
          name: "Chiranjeeb Sengupta",
        },
        servers: ["https:*localhost:8080"],
      },
    },    
    apis: ["./src/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


  // API endpoints
app.use('/', btypeRoutes);
app.use('/', indtypeRoutes);
app.use('/', fiscalRoutes);
app.use('/', curRoutes);
app.use('/', contRoutes);
app.use('/', langRoutes);
app.use('/', datformatRoutes);
app.use('/', salRoutes);
app.use('/', stateRoutes);
app.use('/', gsttreatRoutes);
app.use('/', compRoutes);
app.use('/', userRoutes);
app.use('/', itemRoutes);
app.use('/', hsnRoutes);

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
