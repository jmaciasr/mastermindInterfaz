var Singleton = {
  dingleton: null,
  getSingleton: function() {
    if (!this.dingleton) {
      this.dingleton = {
        method: function() {
          console.log("method");
        }
      }
    }
    return this.dingleton;
  }
};
// Invoke: namespace.getSingleton().amethod() 