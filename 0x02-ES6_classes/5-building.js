export default class Building {
  constructor(sqft) {
    // Check if the current class (subclass) has implemented evacuationWarningMessage
    if (
      new.target !== Building &&
      Object.getPrototypeOf(this).evacuationWarningMessage === undefined
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
