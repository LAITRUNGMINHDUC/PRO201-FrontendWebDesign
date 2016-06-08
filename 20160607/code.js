/**
 * Created by Henry on 6/7/2016.
 */
function demo() {
    var y = window.pageYOffset;
    if (y >= 100) {
        var tag = document.getElementById('d1');
        tag.style.position = "fixed";
        tag.style.top = 0 + "px";
    }
    else {
        location.replace("JS Events.html");
        return;
    }
}

function laySP(id1, id2) {
    var t1 = document.getElementById(id1);
    var t2 = document.getElementById(id2);
    var i = t1.selectedIndex;
    var s = t1.options[i].text;

    var LG = ['Tu lanh', 'TV', 'Quat may'];
    var SS = ['DT', 'TV', 'May lanh'];

    while (t2.length > 0) {
        t2.remove(0);
    }

    switch (i) {
        case 1:
            for (var j = 0; j < LG.length; j++) {
                var temp = document.createElement("option");
                temp.text = LG[j];
                t2.add(temp);
            }
            break;
        case 2:
            for (var j = 0; j < SS.length; j++) {
                var temp = document.createElement("option");
                temp.text = SS[j];
                t2.add(temp);
            }
            break;
    }
}

function thayDoi(x) {
    if (x.value.length == 0) {
        alert("Error babe");
    }
    else {
        x.style.backgroundColor = 'yellow';
    }
}
