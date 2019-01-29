//const request = require("request");
//const server = require("../../src/server");
const base = "http://localhost:3000/advert/";
const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Advert;

describe("routes : advert", () => {
    


   describe("GET /advert", () => {
        it("should return a status code 200 and advert", (done) => {
       request.get(base, (err, res, body) => {

         expect(res.statusCode).toBe(200);
         console.log(res.statusCode);
         expect(err).toBeNull();
         expect(body).toContain("advert");
         done();
       });
     });  
       }); 
 
});

