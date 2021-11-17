document.getElementById("calDistanceBtn").addEventListener("click", PostDistance);

var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

function changeBG(val){
    var body = document.getElementsByTagName("body")[0];
    if (val == 1){
        body.style.backgroundColor = "blue";
    }

    else if (val == 2){
        body.style.backgroundColor = "white";
    }

    if (val == 3){
        body.style.backgroundColor = "purple";
    }

    if (val == 4){
        body.style.backgroundColor = "#41b3a3";
    }
}

function PostDistance() {
    var form = document.getElementById("formDistance");
    form.onsubmit = (event)  =>{
        event.preventDefault();

        var x1 = parseInt(document.getElementById("x1val").value);
        var y1 = parseInt(document.getElementById("y1val").value);
        var x2 = parseInt(document.getElementById("x2val").value);
        var y2 = parseInt(document.getElementById("y2val").value);
        var t = document.getElementById("taylor").checked;
        var k = document.getElementById("mcphee").checked;
        var c = document.getElementById("chris").checked;
        var e = document.getElementById("elliot").checked;

        var totalDistance = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1- y2), 2) );
        var totalSum = x1 + x2 + y1 + y2;
        var totalAvg = totalSum / 4;
        var totalProduct = x1 * x2 * y1 * y2;
        var findLargest = Math.max(x1, y1, x2, y2);
        var findSmallest = Math.min(x1, y1, x2, y2);

        var choice = "";

        if (t) choice += "Taylor Hicks | ";
        if (k) choice += "Katharine McPhee | ";
        if (c) choice += "Chris Daughtry | ";
        if (e) choice += "Elliot Yamin";

        var output = `
        <table style="width: 50%;">
            <tr>
                <th>Date</th>
                <td><p>${date}</p></td>
            </tr>
            <tr>
                <th>Total Distance</th>
                <td><input type="text" value="${Math.abs(totalDistance)}" disabled /></td>
            </tr>
            <tr>
                <th>Sum</th>
                <td><input type="number" value="${totalSum}" disabled /></td>
            </tr>
            <tr>
                <th>Average</th>
                <td><input type="text" value="${totalAvg}" disabled /></td>
            </tr>
            <tr>
                <th>Product</th>
                <td><input type="number" value="${totalProduct}" disabled /></td>
            </tr>
            <tr>
                <th>Largest</th>
                <td><input type="number" value="${findLargest}" disabled /></td>
            </tr>
            <tr>
                <th>Smallest</th>
                <td><input type="number" value="${findSmallest}" disabled /></td>
            </tr>
            <tr>
                <th>Favourite Idol</th>
                <td><input type="text" value="${choice}" size="50" disabled /></td>
            </tr>
        </table>
        `;

        document.getElementById("displayOutput").innerHTML = output;

    }
}

var bgColor = document.getElementById("bgColor");
bgColor.onchange = () => {changeBG(bgColor.value);}

