const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;

describe("Post", () => {

  beforeEach((done) => {
//#1
    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

//#2
      Topic.create({
        title: "Expeditions Michigan",
        description: "A tour of Michigan."
      })
      .then((topic) => {
        this.topic = topic;
//#3
        Post.create({
          title: "My first visit to Detroit",
          body: "I saw some trees.",
//#4
          topicId: this.topic.id
        })
        .then((post) => {
          this.post = post;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });
});

   describe("createTopics()", () => {

     it("should validate a topic has been create", (done) => {

       request.topic()
       .then((topic) => {
         expect(topic.title).toBe("Expeditions Michigan");
         done();
       });
     });
   }); 

   describe("getPosts()", () => {

     it("should return the associated Post", (done) => {

       this.topic.post()
       .then((associatedPosts) => {
         expect(associatedPosts.title).toBe("My first visit to Detroit");
         done();
       });
     });
   });  

 