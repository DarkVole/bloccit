const Topic = require("./models").Topic;
const Post = require("./models").Post;
const Authorizer = require("../policies/topic");

module.exports = {

    //#1
    getAllTopics(callback) {
        return Topic.all()

            .then((topics) => {
                callback(null, topics);
            })
            .catch((err) => {
                callback(err);
            })
    },

    addTopic(newTopic, callback) {
        return Topic.create({
                title: newTopic.title,
                description: newTopic.description
            })
            .then((topic) => {
                callback(null, topic);
            })
            .catch((err) => {
                callback(err);
            })
    },

    getTopic(id, callback) {
        return Topic.findById(id, {

                include: [{
                    model: Post,
                    as: "posts"
      }]
            })

            .then((topic) => {
                callback(null, topic);
            })
            .catch((err) => {
                callback(err);
            })
    },

    /*deleteTopic(req, callback) {

        // #1
        return Topic.findById(req.params.id)
            .then((topic) => {

                // #2
                const authorized = new Authorizer(req.user, topic).destroy();

                if (authorized) {
                    // #3
                    topic.destroy()
                        .then((res) => {
                            callback(null, topic);
                        });

                } else {

                    // #4
                    req.flash("notice", "You are not authorized to do that.")
                    callback(401);
                }
            })
            .catch((err) => {
                callback(err);
            });
    },*/

    updateTopic(req, updatedTopic, callback) {

        return Topic.findById(req.params.id)
            .then((topic) => {
        console.log("*************Got to the update in Topic Query and User ====> " + req.user)
                if (!topic) {
                    return callback("Topic not found");
                }

                const authorized = new Authorizer(req.user, topic).update();

                if (authorized) {
        console.log("*************Updated Topic?====> " + updatedTopic)
                    topic.update(updatedTopic, {
                            fields: Object.keys(updatedTopic)
                        })
                        .then(() => {
                            callback(null, topic);
                        })
                        .catch((err) => {
                            callback(err);
                        });
                } else {

                    // #5
                    req.flash("notice", "You are not authorized to do that.");
                    callback("Forbidden");
                }
            });
    },

    deleteTopic(req, callback) {

        // #1
        return Topic.findById(req.params.id)
            .then((topic) => {
console.log("*************Got to the destory in topic Query and time to check ********" + req.user)
                // #2
                const authorized = new Authorizer(req.user, topic).destroy();

                if (authorized) {

                    topic.destroy()
                        .then((res) => {
                            callback(null, topic);
                        });

                } else {

                    // #4
                    req.flash("notice", "You are not authorized to do that.")
                    callback(401);
                }
            })
            .catch((err) => {
                callback(err);
            });
    }
}
