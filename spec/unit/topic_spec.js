const sequelize = require("../../src/db/models/index").sequelize;

const Topic = require("../../src/db/models").Post;

describe("Post", () => {

  beforeEach((done) => {
//#1
    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

//#2
      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      .then((topic) => {
        this.topic = topic;
//#3
        Post.create({
          title: "My first visit to Proxima Centauri b",
          body: "I saw some rocks.",
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

describe("GET /topics/post", () => {
      it("should create a new post", (done) => {

//#1
        request.get(base,

//#2
          (err, res, body) => {
            Topic.findOne({where: {title: "My first visit to Proxima Centauri b"}})
            .then((post) => {
              expect(post.title).toBe("My first visit to Proxima Centauri b");
              expect(post.description).toBe("I saw some rocks.");
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          
                     });
      });

});
