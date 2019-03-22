function startFunction() {
    alert("Nu startar allt");
}

function texts() {
    var text1 = parseInt(document.getElementById("text1").value);
    // var text2 = parseInt(document.getElementById("text2").value);

    if (text1 >= 100) {
        document.getElementById("result").innerHTML = "Det var ett stort tal";
    }
    else {
        document.getElementById("result").innerHTML = "Det var ett litet tal";
    }
}

function Person(firstName, lastName, adress, email) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Adress = adress;
    this.Email = email;
}

function arrays() {
    // var myList = ['Fågel', 'Häst', 'Katt'];

    // for(var i = 0; i < myList.length; i++) {
    //     document.getElementById("theList").innerHTML += "<li>" + myList[i] + "</li>";
    // }

    var p = new Person("Sebastian", "Tegel", "Agatvägen 18", "sebastian.tegel@tegelconsulting.se");
    var p2 = new Person("Hanna", "Tegel", "Agatvägen 18", "hannat@kth.se");
    var p3 = new Person("Alvar", "Tegel", "Agatvägen 18", "alvar.tegel@icoud.com");
    var p4 = new Person("Astrid", "Tegel", "Agatvägen 18", "astrid.tegel@icloud.com");

    var listOfPersons = [p, p2, p3, p4];

    for(var i = 0; i < listOfPersons.length; i++) {
        document.getElementById("theList").innerHTML += "<li>" + listOfPersons[i].FirstName + " " + listOfPersons[i].LastName + "</li>";
    }
}

function savingStuff() {
    localStorage.setItem("SomeText", "This is the text to be saved");

    var p = new Person("Sebastian", "Tegel", "Agatvägen 18", "sebastian.tegel@tegelconsulting.se");
    var p2 = new Person("Hanna", "Tegel", "Agatvägen 18", "hannat@kth.se");
    var p3 = new Person("Alvar", "Tegel", "Agatvägen 18", "alvar.tegel@icoud.com");
    var p4 = new Person("Astrid", "Tegel", "Agatvägen 18", "astrid.tegel@icloud.com");

    var listOfPersons = [p, p2, p3, p4];

    localStorage.setItem("persons", JSON.stringify(listOfPersons));

    var theListFromStorage = JSON.parse(localStorage.getItem("persons"));

    document.getElementById("theList").innerHTML = '';
    for(var i = 0; i < theListFromStorage.length; i++) {
        document.getElementById("theList").innerHTML += "<li>" + theListFromStorage[i].FirstName + "</li>";
    }
}