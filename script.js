function calculateAge() {
    var dob = document.getElementById("dob").value;
    var now = new Date();
    var birthDate = new Date(dob);
    var age = now.getFullYear() - birthDate.getFullYear();
    var month = now.getMonth() - birthDate.getMonth();
    var day = now.getDate() - birthDate.getDate();
    var name = document.getElementById("name").value;

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
        month += 12;
    }

    if (day < 0) {
        month--;
        var lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        day += lastMonth.getDate();
    }

    var totalMonths = age * 12 + month;

    document.getElementById("op").innerHTML = `<b>Hey ${name}</b><br>Your age in terms of years: ${age}<br>Your age in terms of months: ${totalMonths}`;
}