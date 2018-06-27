'use strict'

module.exports = function (Model, options) {
  console.log("I'm being called by Model : " + Model.definition.name)
  Model.hello = function () {
    console.log('Hello World!')
  }
}
