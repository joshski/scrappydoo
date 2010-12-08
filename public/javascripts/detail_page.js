var DetailPage = function() {

  function extractPatternFromParent(patterns, textNode) {
    var parent = $(textNode).parent();
    var selector = "." + parent.attr('class');
    if (!patterns[selector]) patterns[selector] = { captures: [] };
    patterns[selector].captures.push(parent.text());
  }
  
  return {
    extractPatterns: function() {
      var patterns = {};
      for (var i = 0; i < arguments.length; i++) {
        $(arguments[i]).textNodes().each(function() {
          extractPatternFromParent(patterns, $(this));
          extractPatternFromParent(patterns, $(this).parent());
        })
      }
      return patterns;
    }
  }
}