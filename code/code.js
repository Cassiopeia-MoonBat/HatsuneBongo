"use strict";
var Story;
(function (Story) {
    console.log(parent);
    console.log(parent.gameState);
    if (parent.gameState == true) {
        console.log("You can't get in again");
        location.href = "../pages/ralf.html";
    }
    parent.gameState = true;
    console.log(parent.gameState);
})(Story || (Story = {}));
//# sourceMappingURL=code.js.map