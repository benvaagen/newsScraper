var makeDate = function() {
    var d = new Date;
    var formattedDate = "";

    formattedDate += (d.getMonth() + 1) + "_";

    formattedDated += d.getDate() + "_";

    formattedDate += d.getFullYear();

    return formattedDate;
};

module.exports = makeDate;