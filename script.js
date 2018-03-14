    "use strict";

    //   JavaScript 6th Edition
    //   Chapter 8
    //   Hands-on Project 8-1

    //   Author: Jessi Magraw  
    //   Date:   3/13/18

    //   Filename: script.js

    var newAccountArray = [];
  
    function createID() {
        var fName = fnameinput;
        var lname = lnameinput;
        var zip = zipinput;
        account = accountidbox;

        var fields = document.getElementsById(/^input/);
        var acctid
        var firstInit
        var lastInit

        if (fname == "" || lname == "" || zip == "") {
            console.log("one or more fields are empty");
        }else{
            firstInit = fname.value.charAt(0).toUpperCase ();
            lastInit = lname.value.charAt(0).toUpperCase ();
            acctid = firstInit + lastInit + zip.value;
            account.value = acctid;
            newAccountArray = [];

            for (var i = 0; i < fields.length - 1; i++) {
                newAccountArray.push(fields[i].value);
            }
        }

       
    }
    function createEvenListeners () {
        var fname = document.getElementById ("fnameinput");
        var lname = document.getElementById ("lnameinput");
        var zip = document.getElementById ("zipinput");

        if (fname.addEventListener) {
            fname.addEventListener("change", createID, false);
            lname.addEventListener("change", createID, false);
            zip.addEventListener("change", createID, false);
        } else if (fname.attachEvent) {
            fname.attachEvent("onchange", createID);
            lname.attachEvent("onchange", createID);
            zip.attachEvent("onchange", createID);
        }
    }

        if (window.addEventListener) {
            window.addEventListener ("load", createEvenListeners, false );
        } else if (window.attachEvent) {
            window.attachEvent("onload", createEvenListeners);
        }