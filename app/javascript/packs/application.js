// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery-ui

//= require jquery_ujs
//= require turbolinks
//= require popper
//= require tether
//= require bootstrap-sprockets
//= require_self
//= require_tree

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import JQuery from "jquery";
window.$ = window.JQuery = JQuery;
import "bootstrap"
document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $('.toast').toast({ autohide: false })
  $('#toast').toast('show')
})


// Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("turbolinks").start()

// console.log('Hello from application.js')
