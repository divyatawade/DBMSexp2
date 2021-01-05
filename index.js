$(document).ready(function() {
    var data1 = "1 2 3 4 5 6 7 8 9";
    var img_url = data1.split(" ");

    var data2 = "ER Diagram\nRelational Schema\nStep 1\nStep 2\nStep 3\nStep 4\nStep 5\nStep 6\nFinal Solution";
    var titles = data2.split("\n");

    var e1 = "<strong>ER Diagram </strong>stands for Entity Relationship Diagram, also known as ERD is a diagram that displays the relationship of entity sets stored in a database. <br>In other words, ER diagrams help to explain the logical structure of" +
        "databases. <br>ER diagrams are created based on three basic concepts: entities, attributes and relationships.<br>An entity can be a real-world object, either animate or inanimate, that can be easily identifiable.<br>Entities are represented" +
        "by means of their properties, called attributes.<br>The association among entities is called a relationship.";

    var e2 = "A <strong>database schema </strong>is the skeleton structure that represents the logical view of the entire database. <br>It defines how the data is organized" +
        "and how the relations among them are associated.<br> It formulates all the constraints that are to be applied on the data. <br>A database schema defines its entities and the relationship among them." +
        "<br>It contains a descriptive detail of the database, which can be depicted by means of schema diagrams. It’s the database designers who design the schema to help programmers understand the 	database and make it useful.";

    var e3 = "<strong>•Entity type becomes a table•</strong> <br><br>In the given ER diagram, LECTURE, STUDENT, SUBJECT and COURSE forms individual tables.";

    var e4 = "<strong>•All single-valued attribute becomes a column for the table•</strong><br><br>" +
        "In the STUDENT entity, STUDENT_NAME and STUDENT_ID form the column of STUDENT table.<br> Similarly, COURSE_NAME and COURSE_ID form the column of COURSE table.<br>LECTURER_ID and LECTURER_NAME form column of table LECTURE. <br>SUBJECT_ID and SUBJECT_NAME form column of table SUBJECT.";

    var e5 = "<strong>•A key attribute of the entity type represented by the primary key•</strong><br><br>" +
        "In the given ER diagram, COURSE_ID, STUDENT_ID, SUBJECT_ID, and LECTURE_ID are the key attribute of the entity.";

    var e6 = "<strong>•The multivalued attribute is represented by a separate table•</strong><br><br>" +
        "In the student table, a hobby is a multivalued attribute.<br> So it is not possible to represent multiple values in a single column of STUDENT table.<br> Hence we create a table STUD_HOBBY with column name STUDENT_ID and HOBBY. <br>Using both the column, we create a composite key.";

    var e7 = "<strong>•Composite attribute represented by components•</strong><br><br>" +
        "In the given ER diagram, student address is a composite attribute. <br>It contains CITY, PIN, DOOR#, STREET, and STATE.<br> In the STUDENT table, these attributes can merge as an individual column.";

    var e8 = "<strong>•Derived attributes are not considered in the table•</strong><br><br>" +
        "In the STUDENT table, Age is the derived attribute. <br>It can be calculated at any point of time by calculating the difference between current date and Date of Birth.<br>Hence, it is not required to be considered in schema.";

    var e9 = "Using the rules discussed, you can convert the ER diagram to tables and columns and assign the mapping between the tables. <br>Table structure for the given ER diagram is as shown. "

    var data3 = [e1, e2, e3, e4, e5, e6, e7, e8, e9];
    var i = 0;

    $("#playBtn").show();
    $("#nextBtn").hide();
    $("#imgSection").hide();
    $("#explanation").hide();
    $('#title').hide();
    $('#prevBtn').hide();

    $("#playBtn").click(function() {
        i = 0;
        $(this).hide();
        $("#nextBtn").show();
        $('#imgSection').show();
        $("#explanation").show();
        $('#title').show();
        $('#prevBtn').show();
        document.getElementById('image').src = "images/" + img_url[0] + ".png";
        document.getElementById('explanation').innerHTML = data3[0];
        document.getElementById('title').innerHTML = titles[0];
        i++;
    });

    $("#nextBtn").click(function() {

        document.getElementById('image').style.height = "350px";

        if (i == img_url.length) {
            alert("Simulation ended");
            $("#playBtn").show();
            $("#nextBtn").hide();
            $("#imgSection").hide();
            $("#explanation").hide();
            $('#title').hide();
            $('#prevBtn').hide();
            i = 0;
        }

        document.getElementById('title').innerHTML = titles[i];
        document.getElementById('image').src = "images/" + img_url[i] + ".png";
        document.getElementById('explanation').innerHTML = data3[i];
        i++;

    });

    $("#prevBtn").click(function() {

        if (i <= 1) {
            alert("Starting Point");
            i = 0;
            document.getElementById('image').src = "images/" + img_url[0] + ".png";
            document.getElementById('explanation').innerHTML = data3[0];
            document.getElementById('title').innerHTML = titles[0];
            i++;
        } else {
            document.getElementById('image').style.height = "350px";
            i = i - 2;
            document.getElementById('title').innerHTML = titles[i];
            document.getElementById('image').src = "images/" + img_url[i] + ".png";
            document.getElementById('explanation').innerHTML = data3[i];
            i++;
        }

    });

    $("#resetBtn").click(function() {
        $("#playBtn").show();
        $("#nextBtn").hide();
        $("#imgSection").hide();
        $("#explanation").hide();
        $('#title').hide();
        $('#prevBtn').hide();
        i = 0;
    });
});