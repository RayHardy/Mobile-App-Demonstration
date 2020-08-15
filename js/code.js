var procedureList = [];
var procedureValues = [];
var counterID = -1;
var numberOfprocedures = 11;
var sizeList = [];
var values = [];
var decision1 = "";
var decision2 = "";
var timerOver1 = false;
var clicked3 = false;
var mark1 = false;
var timerstop = "false";
var clicked = false;
var selectedIDNotes = 0;
var locationNew = "";
var continueLimit = 0;
var previous;
var change = true;
var currentStep = 0;
var previousStep = -1;
var counter1 = 0;



// creating the Procedure_Page2
$(document).on("pagecreate", "#home2", function() {
    $("#procedure_Page2").on("pagebeforeshow", function() {
        if (procedureList[selectedID].fruits[0] === false) {
            // resetting the values for every element in the procedure_page when it starts up.
            $(".step").each(function(index, element) {
                $(element).css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
            });
            $('#procedureList2').find('.ui-grid-b .ui-block-a').css({
                "width": "0%"
            });
            $('#procedureList2').find('.ui-grid-b .ui-block-b').css({
                "width": "100%"
            });
            $('#procedureList2').find(".ui-grid-b .ui-block-c").css({
                "width": "0%"
            });
            $("#procedureList2").find('.check').hide();
            $("#procedureList2").find('.comment').hide();
            $("#procedureList2").find('.text').hide();
            $("#procedureList2").find('.button').hide();
            $("#procedureList2").find('.continue').css({ "background-color": "" });
            $("#procedureList2").find('.continue').buttonMarkup({ icon: "" });
            $("#procedureList2").find('.acknowledge').css({ "background-color": "" });
            $("#procedureList2").find('.acknowledge').buttonMarkup({ icon: "" });
            $("#procedureList2").find('.save').css({ "background-color": "" });
            $("#procedureList2").find('.save').buttonMarkup({ icon: "" });
            $("#procedureList2").find('.textForms').val("");
            $("#procedureList2").find('.textForms').html("");
            $("#procedureList2").find('.calculations').html("");
            $("#procedureList2").find('#flowrateSpan1').html("");
            $("#stepDiv1").css({ "border-color": "lightblue", "border-radius": "5px", "border-width": "5px" });
            $("#stepDiv1").removeClass('ui-disabled');
            $(".button").first().show();
            $(".button").eq(1).show();

            $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(0).css({
                "width": "0%"
            });
            $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(0).css({
                "width": "83%"
            });
            $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(0).css({
                "width": "17%"
            });
            $('#procedureList2').find('.comment').eq(0).show();
        } else {
            var selected = procedureList[selectedID].stepID;
            openselected2();
            findNewOld2();
            console.log(selected);
        }
    });
});


function findNewOld2() {
    var currentStepNumber = procedureList[selectedID].stepID;
    var currentButtonStep = procedureList[selectedID].buttonNumber;
    var nextcurrentStepNumber = currentStepNumber + 1;
    var nextButtonStep = currentButtonStep + 1;
    console.log("the button number is " + currentStepNumber);
    for (var newStep = 0; newStep < procedureList[selectedID].fruits.length; newStep++) {
        if (newStep === currentStepNumber) {
            // go from the next steps current step to the end. 
            for (var q = nextcurrentStepNumber; q < procedureList[selectedID].fruits.length; q++) {
                $("#procedure_Page2").find(".comment").eq(q).hide();
                $("#procedure_Page2").find(".check").eq(q).hide();
                $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(q).css({
                    "width": "0%"
                });
                $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(q).css({
                    "width": "100%"
                });
                $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(q).css({
                    "width": "0%"
                });
                // going through each step
                for (var t = 0; t < 5; t++) {
                    $("#procedure_Page2").find(".step").eq(q).find(".button").eq(t).hide();
                    $("#procedure_Page2").find(".step").eq(q).find(".text").eq(t).hide();
                    $("#procedure_Page2").find(".step").eq(q).find(".continue").eq(t).css({"background-color": ""});
                    $("#procedure_Page2").find(".step").eq(q).find(".continue").eq(t).buttonMarkup({ icon: ""});
                    $("#procedure_Page2").find(".step").eq(q).find(".acknowledge").eq(t).css({"background-color": ""});
                    $("#procedure_Page2").find(".step").eq(q).find(".acknowledge").eq(t).buttonMarkup({ icon: ""});
                    $("#procedureList2").find(".step").eq(q).find('.save').css({ "background-color": "" });
                    $("#procedureList2").find(".step").eq(q).find('.save').buttonMarkup({ icon: "" });
                    $("#procedureList2").find(".step").eq(q).find('.textForms').val("");
                    $("#procedureList2").find(".step").eq(q).find('.textForms').html("");
                    $("#procedureList2").find(".step").eq(q).find('.calculations').html("");

                }
            }
            // go from the beginning to the step before the current
            for (var j = 0; j < currentStepNumber; j++) {
                $("#procedure_Page2").find(".check").eq(j).show();
                $("#procedure_Page2").find(".comment").eq(j).hide();
                $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(j).css({
                    "width": "17%"
                });
                $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(j).css({
                    "width": "83%"
                });
                $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(j).css({
                    "width": "0%"
                });
                // going through each step
                for (var t = 0; t < 5; t++) {
                    $("#procedure_Page2").find(".step").eq(j).find(".button").eq(t).hide();
                    $("#procedure_Page2").find(".step").eq(j).find(".text").eq(t).show();
                    $("#procedure_Page2").find(".step").eq(j).find(".continue").eq(t).css({"background-color": "#b3ecff "});
                    $("#procedure_Page2").find(".step").eq(j).find(".continue").eq(t).buttonMarkup({ icon: "check"});
                    $("#procedure_Page2").find(".step").eq(j).find(".acknowledge").eq(t).css({"background-color": ""});
                    $("#procedure_Page2").find(".step").eq(j).find(".acknowledge").eq(t).buttonMarkup({ icon: ""});
                    $("#procedureList2").find(".step").eq(q).find('.save').css({ "background-color": "" });
                    $("#procedureList2").find(".step").eq(q).find('.save').buttonMarkup({ icon: "" });
                    $("#initialValue").val(procedureList[selectedID].intialLevel);
                    $("#levelDecreaseInMinutes").val(procedureList[selectedID].minLevel);
                    $("#finalValue").val(procedureList[selectedID].finalLevel);
                    $("#procedureList2").find(".step").eq(q).find('.calculations').html("");
                }
            }
            // change everything in current
            for (var p = 0; p < 5; p++) {
                $("#procedure_Page2").find(".step").eq(newStep).find(".button").eq(p).show();
                $("#procedure_Page2").find(".step").eq(newStep).find(".text").eq(p).hide();
                $("#procedure_Page2").find(".step").eq(newStep).find(".continue").eq(p).css({"background-color": ""});
                $("#procedure_Page2").find(".step").eq(newStep).find(".continue").eq(p).buttonMarkup({ icon: ""});
                $("#procedure_Page2").find(".step").eq(newStep).find(".acknowledge").eq(p).css({"background-color": ""});
                $("#procedure_Page2").find(".step").eq(newStep).find(".acknowledge").eq(p).buttonMarkup({ icon: ""});
            }
            $("#procedure_Page2").find(".step").eq(newStep).find(".check").eq(0).hide();
            $("#procedure_Page2").find(".step").eq(newStep).find(".comment").eq(0).show();
            $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(newStep).css({
                "width": "0%"
            });
            $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(newStep).css({
                "width": "83%"
            });
            $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(newStep).css({
                "width": "17%"
            });
        } else {

        }
    }
}


$(document).on("pagecreate", "#home2", function() {
    $('.button').on("click", function() {
        procedureList[selectedID].buttonNumber++;
        console.log(procedureList[selectedID].buttonNumber);
    });
    $("#buttonPump24").on("click", function() {
        ButtonClicked(this);
        $("#procedureList2").find(".button").eq(25).hide();
        $("#procedureList2").find(".text").eq(16).show();
        $("#openDiv15").eq(0).find(".button").show();
        procedureList[selectedID].done = true;
    });

    $('#save_button1').click(function(e) {
        if ($("#save_title1").val() !== "") {
            procedureList[selectedID].name = $("#save_title1").val();
            procedureList[selectedID].date = $("#save_date1").val();
            localStorage.procedureList = JSON.stringify(procedureList);
        } else {
            event.preventDefault();
            $.mobile.activeBtnClass = 'unused';
        }
    });

});

function ButtonClicked(x) {
    if (change === true) {
        Next(x);
        openNext(x);
        check();
    }
}

function openNext(x) {
    var Stepnumber = procedureList[selectedID].stepID;
    $("#procedureList2").find(".step").eq(Stepnumber - 1).css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
    $("#procedureList2").find(".step").eq(Stepnumber).css({ "border-color": "lightblue", "border-radius": "5px", "border-width": "5px" });
}


function findNextWithoutChanging() {
    for (var i = 0; i < 10; i++) {
        if (procedureList[selectedID].fruits[i] === false) {
            return i;
        } else {
            continue;
        }
    }
}

function markAsOff() {
    $('#offtext1').show();
    $('#markAsOff1').hide();
}

function check() {
    var number = procedureList[selectedID].stepID;
    var previous = number - 1;
    $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(previous).css({
        "width": "17%"
    });
    $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(previous).css({
        "width": "83%"
    });
    $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(previous).css({
        "width": "0%"
    });
    $('#procedureList2').find('.ui-grid-b .ui-block-a').eq(number).css({
        "width": "0%"
    });
    $('#procedureList2').find('.ui-grid-b .ui-block-b').eq(number).css({
        "width": "83%"
    });
    $('#procedureList2').find(".ui-grid-b .ui-block-c").eq(number).css({
        "width": "17%"
    });
    $('#procedureList2').find(".check").eq(previous).show();
    $('#procedureList2').find(".comment").eq(number).show();
}


function changeButton(x) {
    
    if (previous !== x) {
        $(x).css({
            "background-color": "#b3ecff "
        });
        $(x).buttonMarkup({
            icon: "check"
        });
        previous = x;
        continueLimit++;
    } else {
       
    }
}

function changeBack(x) {
    $(x).css({
        "background-color": ""
    });
    $(x).buttonMarkup({
        icon: ""
    });
}



function myFunction(event) {
    var x = event.keyCode;
    if (x == 13 && $("#userName-fc").val() === "") {
        $("#popupBasic4").popup("open");
    } else if (x == 13) {
        $("#btn_login").click();
        createUserName();
    }
}

function createUserName() {
    var user = {};
    user.name = $("#userName-fc").val();
    localStorage.usersList = JSON.stringify(user);
    $("#nameOfUser").html(user.name);
}

$(function() {
    $("#btn_login").on("click", function() {
        if ($("#userName-fc").val() === "") {
            $("#popupBasic4").popup("open");
            event.preventDefault();
            $.mobile.activeBtnClass = 'unused';
        } else {
            createUserName();
        }
    });
});

function myFunction2(event) {
    var x = event.keyCode;
    if (x == 13 && $("#single").val() !== "select") {
        $("#btn_new_procedure").click();
    }
}

function myFunction3(event) {
    var x = event.keyCode;
    if (x == 13 && $("#save_title").val() !== "") {
        $("#save_button").click();
    }
    if (x == 13 && $("#save_title").val() === "") {
        event.preventDefault();
        $.mobile.activeBtnClass = 'unused';
    }
}

function openselected2() {
    number = procedureList[selectedID].stepID;
    for (var i = 0; i < 12; i++) {
        if (i !== number) {
            $('#procedureList2').find('.step').eq(i).css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
        } else {
            $('#procedureList2').find('.step').eq(number).css({ "border-color": "lightblue", "border-radius": "5px", "border-width": "5px" });
        }
    }
    $('html, body').animate({
        scrollTop: $('.step').first().offset().top
    }, 1000);
}

function openTextsandCloseButons(x) {
    number = procedureList[selectedID].stepID;
    next = number + 1;
    for (var j = 0; j < number; j++) {
        $('#procedureList2').find('.step .ui-grid-b .ui-block-a').eq(j).css({
            "width": "17%"
        });
        $('#procedureList2').find('.step .ui-grid-b .ui-block-b').eq(j).css({
            "width": "83%"
        });
        $('#procedureList2').find('.step .check').eq(j).show();
        $('#procedureList2').find('.step .comment').eq(j).hide();

    }

    $('#procedureList2').find('.step .ui-grid-b .ui-block-a').eq(number).css({
        "width": "0%"
    });
    $('#procedureList2').find('.step .ui-grid-b .ui-block-b').eq(number).css({
        "width": "80%"
    });
    $('#procedureList2').find('.step .ui-grid-b .ui-block-c').eq(number).css({
        "width": "20%"
    });

    for (var i = next; i < 20; i++) {
        $('#procedureList2').find('.step .ui-grid-b .ui-block-a').eq(i).css({
            "width": "0%"
        });
        $('#procedureList2').find('.step .ui-grid-b .ui-block-b').eq(i).css({
            "width": "100%"
        });
        $('#procedureList2').find('.step .ui-grid-b .ui-block-c').eq(i).css({
            "width": "0%"
        });
        $('#procedureList2').find('.step .check').eq(i).hide();
        $('#procedureList2').find('.step .comment').eq(j).show();
    }
}



$(function() {
    $("#btn_new_procedure").click(function() {
        if ($("#single").val() === "select") {
            $("#popupBasic3").popup("open");
            event.preventDefault();
            $.mobile.activeBtnClass = 'unused';
        }
        if ($("#single").val() === "workflow1") {
            $("#btn_new_procedure").attr("href", "#home2");
            $("#backToProcedure").attr("href", "#procedure_Page2");
            $('.acknowledgeBtn').css({ "background-color": "" });
            $('.acknowledgeBtn').buttonMarkup({ icon: "" });
            $('.markAsEnsuredBtn').css({ "background-color": "" });
            $('.markAsEnsuredBtn').buttonMarkup({ icon: "" });
            $('.markAsEnsuredBtn').hide();
            continueLimit = 0;

            counterID++;
            selectedID = counterID;
            procedure = {};
            procedure.fruits = [false, false, false, false, false, false, false, false, false, false, false, false, false];
            procedure.stepID = 0;
            procedure.notesList = [];
            procedure.name = "";
            procedure.date = "";
            procedure.pump = "";
            procedure.done = false;
            procedure.intialLevel = 0;
            procedure.minLevel = 0;
            procedure.finalLevel = 0;
            procedure.difference = 0;
            procedure.flowrate = 0;
            procedure.ProcedureType = "Swapping Trains";
            procedure.buttonNumber = 0;
            procedureList.push(procedure);

            var current = this.parent;

            continueLimit = 0;
            previous = null;
            counter1 = 0;

            $("#save_title").val("");
            $("#save_date").val("");
        }
    });

    $(".sign-out").click(function() {
        $("#userName-fc").val("");
    });


    // function when mark is clicked
    $('#mark').click(function() {
        //if it hasn't been clicked
        if (clicked === false) {
            $('#mark').css({
                "background-color": "#b3ecff "
            });
            $('#mark').buttonMarkup({
                icon: "check"
            });
            $('#mark').html("marked as read");
            clicked = true;
        }
        // if clicked again will change back
        else {
            $('#continue').addClass('ui-disabled');
            $('#mark').css({
                "background-color": "white"
            });
            $('#mark').buttonMarkup({
                icon: null
            });
            $('#mark').html("mark as read");
            clicked = false;
        }
    });


    $("#page_procedures").on("pagebeforeshow", function() {
        $("#list_procedures").html("");
        $("#list_procedures_complete").html("");

        if (localStorage.proceduresList !== undefined) {
            proceduresList = JSON.parse(localStorage.procedureList); // undefined for the 1st time
        }

        for (var t = 0; t < procedureList.length; t++) {
            if (procedureList[t].done === false && procedureList[t].ProcedureType === "Swapping Trains") {
                console.log("hello");
                $("#list_procedures").append("<li id='" + t + "'><a href='#procedure_Page2'>" + procedureList[t].name + "  " + procedureList[t].date + "</a></li>");
            } else if (procedureList[t].done === false && procedureList[t].ProcedureType === "Swapping Fans") {
                $("#list_procedures").append("<li id='" + t + "'><a href='#procedure_Page'>" + procedureList[t].name + "  " + procedureList[t].date + "</a></li>");
            } else if (procedureList[t].done === true && procedureList[t].Proceduretype === "Swapping Fans") {
                $("#list_procedures_complete").append("<li id='" + t + "'><a href='#procedure_Page'>" + procedureList[t].name + "  " + procedureList[t].date + "</a></li>");
            } else {
                $("#list_procedures_complete").append("<li id='" + t + "'><a href='#procedure_Page2'>" + procedureList[t].name + "  " + procedureList[t].date + "</a></li>");
            }
        }

        $("#list_procedures li").on("click", function() {
            selectedID = this.id;

        });

        $("#list_procedures_complete li").on("click", function() {
            selectedID = this.id;

        });


        $("#list_procedures").listview("refresh");
        $("#list_procedures_complete").listview("refresh");
    });


    $("#btn_addNote2").on("click", function() {
        var note = {};
        note.title = $("#tf_title2").val();
        note.content = $("#tf_content2").val();
        note.location = ('Step Number ' + procedureList[selectedID].stepID);
        procedureList[selectedID].notesList.push(note);
        $("#tf_title2").val("");
        $("#tf_content2").val("");

        localStorage.procedureList[selectedID].notesList = JSON.stringify(procedureList[selectedID].notesList);
    });

    $("#btn_addNote1").on("click", function() {
        var note = {};
        note.title = $("#tf_title1").val();
        note.content = $("#tf_content1").val();
        note.location = $("#tf_location1").val();
        procedureList[selectedID].notesList.push(note);
        $("#tf_title").val("");
        $("#tf_content").val("");

        localStorage.procedureList[selectedID].notesList = JSON.stringify(procedureList[selectedID].notesList);
    });

    $("#btn_cancel").on("click", function() {
        $("#tf_title").val("");
        $("#tf_content").val("");
    });

    $("#page_notes").on("pagebeforeshow", function() {
        $("#tf_title1").val("");
        $("#tf_content1").val("");
        $("#tf_location1").val("");
    });

    $("#btn_editNote").on("click", function() {
        procedureList[selectedID].notesList[selectedIDNotes].title = $("#tf_title_edit").val();
        procedureList[selectedID].notesList[selectedIDNotes].content = $("#tf_content_edit").val();
        procedureList[selectedID].notesList[selectedIDNotes].location = $("#tf_location_edit").val();
        localStorage.notesList = JSON.stringify(notesList);
    });

    $("#btn_deleteNote").on("click", function() {
        procedureList[selectedID].notesList.splice(selectedIDNotes, 1);
        localStorage.procedureList[selectedID].notesList = JSON.stringify(notesList);
    });

    $("#page_notes").on("pagebeforeshow", function() {
        $("#list_notes").html("");

        if (localStorage.procedureList[selectedID].notesList !== undefined) {
            procedureList[selectedID].notesList = JSON.parse(localStorage.procedureList[selectedID].notesList); // undefined for the 1st time
        }

        for (i = 0; i < procedureList[selectedID].notesList.length; i++) {
            $("#list_notes").append("<li id='" + i + "'><a href='#page_viewNote'>" + procedureList[selectedID].notesList[i].title + "</a></li>");
        }

        $("#list_notes li").on("click", function() {
            selectedIDNotes = this.id;
        });
        $("#list_notes").listview("refresh");
    });

    $("#page_viewNote").on("pagebeforeshow", function() {
        $(this).find(".ui-content h2").html(procedureList[selectedID].notesList[selectedIDNotes].title);
        $(this).find(".ui-content p#p_content").html(procedureList[selectedID].notesList[selectedIDNotes].content);
        $(this).find(".ui-content p#p_location").html(procedureList[selectedID].notesList[selectedIDNotes].location);
    });

    $("#page_editNote").on("pagebeforeshow", function() {
        $(this).find("#tf_title_edit").val(procedureList[selectedID].notesList[selectedIDNotes].title);
        $(this).find("#tf_content_edit").val(procedureList[selectedID].notesList[selectedIDNotes].content);
        $(this).find("#tf_location_edit").val(procedureList[selectedID].notesList[selectedIDNotes].location);
    });

    function findStepReturn() {
        var findNumber = procedureList[selectedID].stepID;
        if (findNumber === 0) {
            locationNew = "open1";
            return "procedure_Page";
        }
        if (findNumber === 1) {
            locationNew = "open2";
            return "location1";
        }
        if (findNumber === 2) {
            locationNew = "open3";
            return "location2";
        }
        if (findNumber === 3) {
            locationNew = "open4";
            return "location3";
        }
        if (findNumber === 4) {
            locationNew = "open5";
            return "location4";
        }
        if (findNumber === 5) {
            locationNew = "open6";
            return "location5";
        }
        if (findNumber === 6) {
            locationNew = "open7";
            return "location6";
        }
        if (findNumber === 7) {
            locationNew = "open8";
            return "location7";
        }
        if (findNumber === 8) {
            locationNew = "open9";
            return "location8";
        }
        if (findNumber === 9) {
            locationNew = "open10";
            return "location9";
        }
        if (findNumber === 10) {
            locationNew = "open11";
            return "location10";
        } else {
            return "";
        }
    }

    function clone_cancel() {
        $("#popupBasic3").popup("close");
        var $button = $("#cancel");
        var $clone = $button.clone();
        $button.replaceWith($clone);
    }

    function clone_change() {
        $("#popupBasic4").popup("close");
        var $button = $("#change");
        var $clone = $button.clone();
        $button.replaceWith($clone);
    }

    function clone_acknowledge() {
        var $button = $("#acknowledgeBtn3");
        var $clone = $button.clone();
        $button.replaceWith($clone);
    }


    function refresh() {
        for (var i = 0; i < 11; i++) {
            if (procedureList[selectedID].fruits[i] === false) {
                $(this).parents().next().prev('.procedure').css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
                $(this).parents().next().prev('.procedure').addClass("ui-disabled");
            }
            if (procedureList[selectedID].fruits[i] === true) {
                $(this).parents().next('.procedure').css({ "border-color": "lightblue", "border-radius": "5px", "border-width": "5px" });
                $(this).parents().next('.procedure').removeClass("ui-disabled");
            }
        }
    }

    function Skip(x) {
        findNext();
        var q = findNext();
        procedureList[selectedID].stepID++;
        procedureList[selectedID].stepID++;
        if (typeof q === 'undefined') {
            $('.procedure').css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
            $('.procedure').addClass("ui-disabled");
            procedureList[selectedID].done = true;
        } else {
            $('html, body').animate({
                scrollTop: $(x).parents().offset().top
            }, 1000);
        }
    }

    $('.Active_step_setting').click(function() {
        CurrentStep();
    });

    $('.Step_number_setting').click(function() {
        // toggle in the menu bar between show step Numbers and hide Step numbers
        $('.Step_number_setting').text(function(i, v) {
            return v === 'Show Step Numbers' ? 'Hide Step Numbers' : 'Show Step Numbers'
        })
        $(".step_number").toggle();
    });

    function CurrentStep() {
        var div = findStepReturn();
        $('html, body').animate({
            scrollTop: $("#" + div).offset().top
        }, 1000);
    }

    function skip_check() {
        number = procedureList[selectedID].stepID;
        previous = number - 1;
        previousPre = number - 2;
        $('.step').eq(previous).hide();
        $('.step .ui-grid-b .ui-block-a').eq(previousPre).css({
            "width": "17%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(previousPre).css({
            "width": "83%"
        });
        $('.step.ui-grid-b .ui-block-c').eq(previousPre).css({
            "width": "0%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(number).css({
            "width": "80%"
        });
        $('.step .ui-grid-b .ui-block-c').eq(number).css({
            "width": "20%"
        });
    }


    function check() {
        number = procedureList[selectedID].stepID;
        previous = number - 1;
        $('.step .ui-grid-b .ui-block-a').eq(previous).css({
            "width": "17%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(previous).css({
            "width": "83%"
        });
        $('.step.ui-grid-b .ui-block-c').eq(previous).css({
            "width": "0%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(number).css({
            "width": "80%"
        });
        $('.step .ui-grid-b .ui-block-c').eq(number).css({
            "width": "20%"
        });
    }

    function goThroughTwo() {
        number = procedureList[selectedID].stepID;
        next = number + 1;
        for (var j = 0; j < number; j++) {
            $('.step .ui-grid-b .ui-block-a').eq(j).css({
                "width": "17%"
            });
            $('.step .ui-grid-b .ui-block-b').eq(j).css({
                "width": "83%"
            });
            $('.step .comment').eq(j).hide();
        }
        $('.step .ui-grid-b .ui-block-a').eq(number).css({
            "width": "0%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(number).css({
            "width": "80%"
        });
        $('.step .ui-grid-b .ui-block-c').eq(number).css({
            "width": "20%"
        });
        for (var i = next; i < 11; i++) {
            $('.step .ui-grid-b .ui-block-a').eq(i).css({
                "width": "0%"
            });
            $('.step .ui-grid-b .ui-block-b').eq(i).css({
                "width": "100%"
            });
            $('.step .ui-grid-b .ui-block-c').eq(i).css({
                "width": "0%"
            });
            $('.step .latest').eq(i).hide();
        }
    }

    function goThrough() {
        number = procedureList[selectedID].stepID;
        next = number + 1;
        for (var j = 0; j < number; j++) {
            $('.step .ui-grid-b .ui-block-a').eq(j).css({
                "width": "17%"
            });
            $('.step .ui-grid-b .ui-block-b').eq(j).css({
                "width": "83%"
            });
            $('.step .comment').eq(j).hide();
        }
        $('.step .ui-grid-b .ui-block-a').eq(number).css({
            "width": "0%"
        });
        $('.step .ui-grid-b .ui-block-b').eq(number).css({
            "width": "80%"
        });
        $('.step .ui-grid-b .ui-block-c').eq(number).css({
            "width": "20%"
        });
        for (var i = next; i < 11; i++) {
            $('.step .ui-grid-b .ui-block-a').eq(i).css({
                "width": "0%"
            });
            $('.step .ui-grid-b .ui-block-b').eq(i).css({
                "width": "100%"
            });
            $('.step .ui-grid-b .ui-block-c').eq(i).css({
                "width": "0%"
            });
            $('.step .latest').eq(i).hide();
        }
        $('.step ').eq(number).show();
    }

    function openselected() {
        number = procedureList[selectedID].stepID;
        for (var i = 0; i < 12; i++) {
            if (i !== number) {
                $('.step').eq(i).css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
                $('.step').eq(i).addClass("ui-disabled");
            } else {
                $('.step').eq(number).css({ "border-color": "lightblue", "border-radius": "5px", "border-width": "5px" });
                $('.step').eq(number).removeClass("ui-disabled");
            }
        }
        $('html, body').animate({
            scrollTop: $('.step').first().offset().top
        }, 1000);
    }
});

function Next(x) {
    var j = findNext();
    procedureList[selectedID].stepID++;
    if (typeof j === 'undefined') {
        $('.turn').css({ "border-color": "none", "border-radius": "0", "border-width": "0" });
        $('.turn').addClass("ui-disabled");
        procedureList[selectedID].done = true;
    } else {
        $('html, body').animate({
            scrollTop: $(x).parents().offset().top
        }, 1000);
    }
}

function findNext() {
    for (var i = 0; i < procedureList[selectedID].fruits.length; i++) {
        if (procedureList[selectedID].fruits[i] === false) {
            procedureList[selectedID].fruits[i] = true;
            return i;
        } else {
            continue;
        }
    }
}
