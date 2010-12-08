describe("DetailPage", function() {
  
  it("extracts patterns from very simple examples", function() {
    var page1 = $('<div class="a"><div class="b">JIM</div><div class="c">10</div></div>').appendTo("body");
    var page2 = $('<div class="a"><div class="b">BOB</div><div class="c">27</div></div>').appendTo("body");
    var page3 = $('<div class="a"><div class="b">TED</div><div class="c">99</div></div>').appendTo("body");
    var patterns = new DetailPage().extractPatterns(page1, page2, page3);
    expect(patterns[".a"].captures[0]).toEqual("JIM10");
    expect(patterns[".c"].captures[2]).toEqual("99");
    $(page1).add(page2).add(page3).remove();
  });
  
});