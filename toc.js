!function(a) {
    "use strict";
    var b = function(b) {
        return this.each(function() {
            var c, d, e = a(this), f = e.data(), g = [e], h = this.tagName, i = 0;
            // Use a more specific selector if necessary
            c = a.extend({
                content: ".content-wrapper > .content", // Adjusted selector for specificity
                headings: "h2,h3,h4,h5"
            }, {
                content: f.toc || void 0,
                headings: f.tocHeadings || void 0
            }, b);
            d = c.headings.split(",");
            a(c.content).find(c.headings).attr("id", function(b, c) {
                var d = function(a) {
                    0 === a.length && (a = "?");
                    for (var b = a.replace(/\s+/g, "_"), c = "", d = 1; null !== document.getElementById(b + c);) c = "_" + d++;
                    return b + c;
                };
                return c || d(a(this).text());
            }).each(function() {
                var b = a(this), c = a.map(d, function(a, c) {
                    return b.is(a) ? c : void 0
                })[0];
                if (c > i) {
                    var e = g[0].children("li:last")[0];
                    e && g.unshift(a("<" + h + "/>").appendTo(e))
                } else {
                    g.splice(0, Math.min(i - c, Math.max(g.length - 1, 0)));
                }
                a("<li/>").appendTo(g[0]).append(a("<a/>").text(b.text()).attr("href", "#" + b.attr("id"))), i = c;
            })
        })
    }, c = a.fn.toc;
    a.fn.toc = b;
    a.fn.toc.noConflict = function() {
        return a.fn.toc = c, this
    };
    a(function() {
        b.call(a("[data-toc]"));
    })
}(window.jQuery);
