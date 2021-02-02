//Fixes webify typescript error

function browserCompatible() {
    if (window.safari !== undefined) {
		console.log("this is safari")
      $('.tb-hover-layer').wrap('<div class="tb-hover-layer-wrap tb-style1"></div>')
    }
  }