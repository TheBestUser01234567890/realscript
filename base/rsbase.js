let ref = {
  prevRef: undefined,
  currentRef: undefined,
  getPrevRef: function{
    return this.prevRef;
  },
  getCurrentRef: function{
    return this.currentRef;
  }
}
