const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Flair = require("../../src/db/models").Flair;

describe("Flair", () => {

  beforeEach((done) => {

    this.topic;
    this.flair;
    sequelize.sync({force: true}).then((res) => {


      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      .then((topic) => {
        this.topic = topic;

        Flair.create({
          name: "My first visit to Proxima Centauri b",
          color: "I saw some rocks.",

          topicId: this.topic.id
        })
        .then((flair) => {
          this.flair = flair;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });
  describe("#create()", () => {

     it("should create a post object with a name, body, and assigned topic", (done) => {
//#1
       Flair.create({
         name: "Pros of Cryosleep during the long journey",
         color: "1. Not having to answer the 'are we there yet?' question.",
         topicId: this.topic.id
       })
       .then((flair) => {

//#2
         expect(flair.name).toBe("Pros of Cryosleep during the long journey");
         expect(flair.color).toBe("1. Not having to answer the 'are we there yet?' question.");
         done();

       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

      
     it("should not create a post with missing name, body, or assigned topic", (done) => {
     Flair.create({
       name: "Pros of Cryosleep during the long journey"
     })
     .then((post) => {

      // the code in this block will not be evaluated since the validation error
      // will skip it. Instead, we'll catch the error in the catch block below
      // and set the expectations there

       done();

     })
     .catch((err) => {

       expect(err.message).toContain("Flair.color cannot be null");
       expect(err.message).toContain("Flair.topicId cannot be null");
       done();

     })
   });
   });
    
  describe("#setTopic()", () => {

     it("should associate a topic and a post together", (done) => {

// #1
       Topic.create({
         name: "Challenges of interstellar travel",
         description: "1. The Wi-Fi is terrible"
       })
       .then((newTopic) => {

// #2
         expect(this.flair.topicId).toBe(this.topic.id);
// #3
         this.flair.setTopic(newTopic)
         .then((flair) => {
// #4
           expect(flair.topicId).toBe(newTopic.id);
           done();

         });
       })
     });

   });
    
   describe("#getTopic()", () => {

     it("should return the associated topic", (done) => {

       this.flair.getTopic()
       .then((associatedTopic) => {
         expect(associatedTopic.title).toBe("Expeditions to Alpha Centauri");
         done();
       });

     });

   });
});

