
namespace Story{
    type Parent = Window & { gameState: boolean};
    declare let parent: Parent;

    console.log(parent);
    console.log(parent.gameState);
    if (parent.gameState == true) {
        console.log("You can't get in again");
        location.href = "../pages/ralf.html";
    }
    parent.gameState = true;
    console.log(parent.gameState);
}  