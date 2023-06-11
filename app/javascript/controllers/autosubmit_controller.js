import { Controller } from "@hotwired/stimulus"
import debounce from 'debounce'

// Connects to data-controller="autosubmit"
export default class extends Controller {
  initialize() {
    this.debouncedSubmit = debounce(this.debouncedSubmit.bind(this), 300)
  }

  submit() {
    this.element.requestSubmit()
  }

  debouncedSubmit() {
    this.submit()
  }
}
