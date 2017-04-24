# cc-lesson-api
Code Companion module to give lesson creators limited access to the user's computer.

## Theory
This module is loosely based off of facets in the Actor Model. See [this talk](https://youtu.be/zKuFu19LgZA?t=40m3s) by Douglas Crockford for reference (approx. 8 minutes).

### Inputs
The module creates an object with an interface that gives lesson creators restricted access to the user's computer.
- Filesystem access is limited to one folder (chosen at the beginning of the lesson by the user).
- Program execution is limited to a whitelisted set of programs.
- Web fetches are limited to a whitelisted set of sites (possibly only localhost).
- etc.

Options for managing these events include:
- raw access
- promise chains
- a custom event system
- FRP observables

### Outputs
The module also gives lesson creators access to the screen in order to present content.

Options for managing presentation content include:
- accepting a subset of html
- react.js components
- an isolated redux-style state store
- markdown, wikitext
- a custom markup language (yuck)
