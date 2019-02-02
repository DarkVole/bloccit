const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/adverts/";
const sequelize = require("../../src/db/models/index").sequelize;
const Advert = require("../../src/db/models").Advert;

describe("routes : advert", () => {
    
    beforeEach((done) => {
      this.advert;
      sequelize.sync({force: true}).then((res) => {

       Advert.create({
         title: "JS Frameworks",
         description: "There is a lot of them"
       })
        .then((advert) => {
          this.advert = advert;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      });

    });
    
    describe("GET /adverts", () => {
        it("should return a status code 200 and advert", (done) => {
            request.get(base, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            expect(err).toBeNull();
            expect(body).toContain("Advertisements");
            done();
            });
        });  
    }); 
    
    describe("GET /adverts/new", () => {

    it("should render a new advert form", (done) => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Advertisement");
        done();
      });
    });

  });   
    
    describe("POST /adverts/create", () => {
      const options = {
        url: `${base}create`,
        form: {
          title: "Coke",
          description: "I'd like to buy the world a Coke"
        }
      };

      it("should create a new advertisement and redirect", (done) => {

//#1
        request.post(options,

//#2
          (err, res, body) => {
            Advert.findOne({where: {title: "Coke"}})
            .then((advert) => {
              expect(res.statusCode).toBe(303);
              expect(advert.title).toBe("Coke");
              expect(advert.description).toBe("I'd like to buy the world a Coke");
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          }
        );
      });
    });  
    
    describe("GET /adverts/:id", () => {

     it("should render a view with the selected advert", (done) => {
       request.get(`${base}${this.advert.id}`, (err, res, body) => {
         expect(err).toBeNull();
         expect(body).toContain("JS Frameworks");
         done();
       });
     });

   });
    
    describe("POST /adverts/:id/destroy", () => {

     it("should delete the advert with the associated ID", (done) => {

 //#1
       Advert.all()
       .then((adverts) => {

 //#2
         const advertCountBeforeDelete = adverts.length;

         expect(advertCountBeforeDelete).toBe(1);

 //#3
         request.post(`${base}${this.advert.id}/destroy`, (err, res, body) => {
           Advert.all()
           .then((adverts) => {
             expect(err).toBeNull();
             expect(adverts.length).toBe(advertCountBeforeDelete - 1);
             done();
           })

         });
       });

     });

   });    

    describe("GET /adverts/:id/edit", () => {

     it("should render a view with an edit advert form", (done) => {
       request.get(`${base}${this.advert.id}/edit`, (err, res, body) => {
         expect(err).toBeNull();
         expect(body).toContain("Edit Advertisement");
         expect(body).toContain("JS Frameworks");
         done();
       });
     });

   });     
       
    describe("POST /adverts/:id/update", () => {

     it("should update the advert with the given values", (done) => {
        const options = {
           url: `${base}${this.advert.id}/update`,
           form: {
             title: "JavaScript Frameworks",
             description: "There are a lot of them"
           }
         };
//#1
         request.post(options,
           (err, res, body) => {

           expect(err).toBeNull();
//#2
           Advert.findOne({
             where: { id: this.advert.id }
           })
           .then((advert) => {
             expect(advert.title).toBe("JavaScript Frameworks");
             done();
           });
         });
     });

   });
});

