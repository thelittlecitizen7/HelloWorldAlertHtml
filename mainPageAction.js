var loginName ;

makeLoginAlert();
makeAfterLoginAlert();
function makeLoginAlert()
{
    let name = prompt("Please enter you name for login");
    loginName = name;
}


function makeAfterLoginAlert()
{
    alert("Hello world Good morning! " + loginName)
}