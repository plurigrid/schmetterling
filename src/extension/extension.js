   // This is a new file. All code is new.
   const Context = require('./context');
   const ContinueAction = require('./continue_action');

   class Extension {
     constructor(service) {
       this.context = new Context(service);
       this.action = new ContinueAction(this.context);
     }

     run() {
       this.context.understandContext();
       this.action.performAction();
     }
   }

   module.exports = Extension;