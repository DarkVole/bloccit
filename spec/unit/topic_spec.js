const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

   describe("Post", () => {

  beforeEach((done) => {
//#1
    this.topic;
    this.post;
    //sequelize.sync({force: true}).then((res) => {


    //});

  });
});

   describe("createTopics()", () => {
     it("should validate a topic has been created", (done) => {
      Topic.create({
        title: "Expeditions Michigan",
        description: "A tour of Michigan."
      })
      .then((topic) => {
        this.topic = topic;
         expect(topic.title).toBe("Expeditions Michigan");
         done();
       });
     });
   }); 

   describe("getPosts()", () => {

     it("should return the associated Post", (done) => {

        Post.create({
          title: "My first visit to Detroit",
          body: "I saw some trees.",
        topicId: this.topic.id
                })

        .then((posts) => {
         expect(posts.title).toBe("My first visit to Detroit");
         done();
         
       });
     });
   });  

 