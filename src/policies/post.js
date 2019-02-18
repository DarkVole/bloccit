 // #1
 const ApplicationPolicy = require("./application");

 module.exports = class PostPolicy extends ApplicationPolicy {

     // #2
     new() {
         return (this.user != null || this._isAdmin());
         //return this.user != null;
     }

     create() {
         return this.new();
     }

     // #3
     edit() {
         return (this._isOwner() || this._isAdmin());
     }

     update() {
         return this.edit();
     }

     destroy() {
         return this.update();
     }
 }