Template.test.viewmodel({

  values: null,

  onCreated() {
    this.values([]);
  },

  inputProps(index) {
    return {
      onChange: (value) => {
        this.values()[index] = value;
        this.values.changed();
      }
    };
  },

  valuesAsReactiveArray() {
    return JSON.stringify(this.values(), null, 4);
  },

  valuesAsArray() {
    const valuesArray = this.values().array();
    return JSON.stringify(valuesArray, null, 4);
  }
});