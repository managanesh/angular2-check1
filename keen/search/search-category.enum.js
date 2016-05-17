/**
 * Created by chalaki on 5/15/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoryENUM;
    return {
        setters:[],
        execute: function() {
            (function (CategoryENUM) {
                CategoryENUM[CategoryENUM["All"] = { code: "ALL", value: "All Categories" }] = "All";
                CategoryENUM[CategoryENUM["Terminals"] = { code: "TRM", value: "Terminals" }] = "Terminals";
                CategoryENUM[CategoryENUM["Machines"] = { code: "MACH", value: "Machines" }] = "Machines";
            })(CategoryENUM || (CategoryENUM = {}));
            exports_1("CategoryENUM", CategoryENUM);
            (function (CategoryENUM) {
                function getCode(cat) {
                    return cat['code'];
                }
                CategoryENUM.getCode = getCode;
                function getValue(cat) {
                    return cat['value'];
                }
                CategoryENUM.getValue = getValue;
                function getCategories() {
                    var categories = [];
                    for (var entry in CategoryENUM) {
                        var obj = (CategoryENUM[entry]);
                        if (obj != null && obj.hasOwnProperty('code')) {
                            categories.push(obj);
                        }
                    }
                    return categories;
                }
                CategoryENUM.getCategories = getCategories;
            })(CategoryENUM = CategoryENUM || (CategoryENUM = {}));
            exports_1("CategoryENUM", CategoryENUM);
        }
    }
});
//# sourceMappingURL=search-category.enum.js.map