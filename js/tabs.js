$(document).ready(function () {
  //Gruppeneinteilung-----------------------

  var group;
  var subGroup;

  group = Math.round(Math.random());

  if (group == 0) {
    //DF
    subGroup = Math.round(Math.random());
  } else {
    //SEM
    subGroup = Math.round(Math.random() * 3);
  }

  //group = 0;
  //subGroup = 1;

  console.log(group);
  console.log(subGroup);

  //-------------------------------------------------

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  //-------------------------------

  var positions1 = [
    "1rb2r1k/7p/2np2p1/p3p3/R1B1P3/1PPQNpPq/5P1P/3R2K1",
    "2q1rb1k/1n3pp1/3p1n1p/1p1P4/1PpNPB2/2P2Q1P/2B3P1/R5K1",
    "1r1r2k1/2p1qpp1/2p2n1p/2P4b/1P2P3/2Qp1P2/1B1N2PP/R3R1K1",
    "2r3k1/1p1qbppp/pn6/3p3b/1P1Q1B2/PNN1P2P/5PP1/2R3K1",
  ];

  var positions2 = [
    "r4r2/p1p1qpk1/2b3pp/2P1P3/n2Np1QP/B7/P4PP1/2R1R1K1",
    "r4rk1/4nppp/1pp1b3/3nN3/PpBP4/3N4/1P3PPP/R3R1K1",
    "rqr3k1/1b3pp1/p3p2p/3n4/2NP4/4B2P/1P2BPPb/2RQR2K",
    "b3kb2/2qn1p1p/p2p1Pr1/4p2N/1r2P3/2N2Q1B/1PP4P/2KR2R1",
  ];

  //Zufällige Reihenfolge der Stellungen
  positionsDF = shuffle(positions1);
  positionsSEM = shuffle(positions2);

  var board1 = ChessBoard(
    "board1",
    "r5k1/ppq2p1p/2p1nbp1/P3p3/1PQ1P3/2P1BN1P/5PP1/R5K1"
  );

  var boardDF1 = ChessBoard("DF1", positionsDF[0]);
  var boardDF2 = ChessBoard("DF2", positionsDF[1]);
  var boardDF3 = ChessBoard("DF3", positionsDF[2]);
  var boardDF4 = ChessBoard("DF4", positionsDF[3]);

  var boardSEM1 = ChessBoard("SEM1", positionsDF[0]);
  var boardSEM2 = ChessBoard("SEM2", positionsDF[1]);
  var boardSEM3 = ChessBoard("SEM3", positionsSEM[0]);
  var boardSEM4 = ChessBoard("SEM4", positionsSEM[1]);
  var boardSEM5 = ChessBoard("SEM5", positionsDF[2]);
  var boardSEM6 = ChessBoard("SEM6", positionsDF[3]);
  var boardSEM7 = ChessBoard("SEM7", positionsSEM[2]);
  var boardSEM8 = ChessBoard("SEM8", positionsSEM[3]);

  var config = { draggable: true, dropOffBoard: "trash", sparePieces: true };

  var RecBoard = ChessBoard("recBoard", config);
  var RecBoard1 = ChessBoard("recDF_1", config);
  var RecBoard2 = ChessBoard("recDF_2", config);
  var RecBoard3 = ChessBoard("recDF_3", config);
  var RecBoard4 = ChessBoard("recDF_4", config);

  var RecBoardS1 = ChessBoard("recSEM_1", config);
  var RecBoardS2 = ChessBoard("recSEM_2", config);
  var RecBoardS3 = ChessBoard("recSEM_3", config);
  var RecBoardS4 = ChessBoard("recSEM_4", config);
  var RecBoardS5 = ChessBoard("recSEM_5", config);
  var RecBoardS6 = ChessBoard("recSEM_6", config);
  var RecBoardS7 = ChessBoard("recSEM_7", config);
  var RecBoardS8 = ChessBoard("recSEM_8", config);

  //--------------------------------------------

  $.validator.addMethod(
    "regx",
    function (value, element, regexpr) {
      return regexpr.test(value);
    },
    "Bitte validen Code eingeben"
  );

  var tab = 4;
  showTab(tab);
  var timer;

  $("#begin .btn").click(function () {
    if (tab == 2) {
      $("#f1").validate({
        rules: {
          feld1: {
            required: true,
            maxlength: 1,
          },
          feld2: {
            required: true,
            maxlength: 1,
          },
          feld3: {
            required: true,
            maxlength: 1,
          },
          feld4: {
            required: true,
            min: 1,
            max: 31,
            digits: 2,
          },
          feld5: {
            required: true,
            regx: /[a-zA-Z][a-zA-Z][a-zA-Z][0-31]/,
            minlength: 5,
          },
        },
        messages: {
          feld1: "Bitte einen Buchstaben eingeben",
          feld2: "Bitte einen Buchstaben eingeben",
          feld3: "Bitte einen Buchstaben eingeben",
          feld4: "Bitte Zahl zwischen 01 und 31 eingeben",
          feld5: "Bitte validen Code eingeben",
        },

        highlight: function (element) {
          $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
          $(element).parent().removeClass("error");
        },
      });

      if ($("#f1").valid()) {
        tab++;
        showTab(tab);
      }
    } else if (tab == 3) {
      $.validator.addMethod(
        "regx",
        function (value, element, regexpr) {
          return regexpr.test(value);
        },
        "Bitte validen Code eingeben"
      );

      $("#f2").validate({
        rules: {
          feld5: {
            required: true,
            min: 18,
            max: 99,
          },
          feld6: {
            required: true,
            regx: /m|w|d/,
          },
          feld7: {
            required: true,
            min: 700,
            max: 2600,
          },
          feld8: {
            required: true,
            min: 0,
          },
          feld9: {
            required: true,
            min: 3,
          },
          feld10: {
            required: true,
            min: 3,
          },
        },
        messages: {
          feld5: "Bitte eine Zahl eingeben",
          feld6: "m/w/d",
          feld7: "Bitte eine Zahl eingeben",
          feld8: "Bitte eine Zahl eingeben",
          feld9: "Bitte eine Zahl eingeben",
          feld10: "Bitte eine Zahl eingeben",
        },

        highlight: function (element) {
          $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
          $(element).parent().removeClass("error");
        },
      });

      if ($("#f2").valid()) {
        tab++;
        showTab(tab);
      }
    } else if (tab == 5) {
      showPosition(tab);
      tab += 2;
    } else if (tab == 7) {
      hideTab(tab);
      tab++;
      setTimeout(function () {
        showTab(8);
        timer = setTimeout(function () {
          hideTab(tab);
          tab++;
          setTimeout(function () {
            showTab(tab);
          }, 1000);
        }, 3000);
      }, 1000);
    } else if (tab == 8) {
      clearTimeout(timer);
      hideTab(tab);
      tab++;
      setTimeout(function () {
        showTab(tab);
      }, 1000);
    } else if (tab == 9) {
      if (group == 0) {
        hideTab(tab);
        showTab(10);
      } else {
        hideTab(tab);
        showTab(100);
      }
    } else {
      tab++;
      showTab(tab);
    }
  });

  //--------------------------------------------------

  if (group == 0) {
    var tabDF = 10;

    //Directed Forgetting : No Delete - Delete
    if (subGroup == 0) {
      $("#DF .btn").click(function () {
        if (tabDF == 10 || tabDF == 12 || tabDF == 24 || tabDF == 27) {
          showPosition(tabDF);
          tabDF += 2;
        } else if (tabDF == 17 || tabDF == 19 || tabDF == 32 || tabDF == 34) {
          hideTab(tabDF);
          tabDF++;
          setTimeout(function () {
            showTab(tabDF);
            timer = setTimeout(function () {
              hideTab(tabDF);
              tabDF++;
              setTimeout(function () {
                showTab(tabDF);
              }, 1000);
            }, 3000);
          }, 1000);
        } else if (tabDF == 18 || tabDF == 20 || tabDF == 33 || tabDF == 35) {
          clearTimeout(timer);
          hideTab(tabDF);
          tabDF++;
          setTimeout(function () {
            showTab(tabDF);
          }, 1000);
        } else if (tabDF == 15 || tabDF == 30) {
          ablenkung(tabDF);
          tabDF += 2;
        } else if (tabDF == 21) {
          tabDF++;
          showTab(tabDF);
          setTimeout(function () {
            tabDF++;
            showTab(tabDF);
          }, 60000);
        } else if (tabDF == 37) {
          tabDF++;
          $("#df11").text(berechne(boardDF2.fen(), RecBoard1.fen()));
          $("#df12").text(berechne(boardDF1.fen(), RecBoard2.fen()));
          $("#df21").text(berechne(boardDF4.fen(), RecBoard3.fen()));
          $("#df22").text(berechne(boardDF3.fen(), RecBoard4.fen()));

          showTab(tabDF);
        } else {
          tabDF++;
          showTab(tabDF);
        }
      });
    }

    //Directed Forgetting : Delete - No Delete
    else {
      tabDF = 10;
      $("#DF .btn").click(function () {
        if (tabDF == 10) {
          hideTab(tabDF);
          tabDF = 24;
          showPosition(tabDF);
          tabDF += 2;
        } else if (tabDF == 21) {
          tabDF++;
          showTab(tabDF);
          setTimeout(function () {
            tabDF++;
            showTab(tabDF);
          }, 60000);
        } else if (tabDF == 12 || tabDF == 27) {
          showPosition(tabDF);
          tabDF += 2;
        } else if (tabDF == 24) {
          hideTab(tabDF);
          tabDF = 10;
          showPosition(tabDF);
          tabDF += 2;
        } else if (tabDF == 17 || tabDF == 19 || tabDF == 32 || tabDF == 34) {
          hideTab(tabDF);
          tabDF++;
          setTimeout(function () {
            showTab(tabDF);
            timer = setTimeout(function () {
              hideTab(tabDF);
              setTimeout(function () {
                tabDF++;
                if (tabDF == 21) {
                  hideTab(20);
                  tabDF = 36;
                  showTab(tabDF);
                } else if (tabDF == 36) {
                  tabDF = 21;
                  showTab(tabDF);
                } else showTab(tabDF);
              }, 1000);
            }, 30000);
          }, 1000);
        } else if (tabDF == 18 || tabDF == 20 || tabDF == 33 || tabDF == 35) {
          clearTimeout(timer);
          hideTab(tabDF);
          setTimeout(function () {
            if (tabDF == 20) {
              tabDF = 36;
              showTab(tabDF);
            } else if (tabDF == 35) {
              tabDF = 21;
              showTab(tabDF);
            } else {
              tabDF++;
              showTab(tabDF);
            }
          }, 1000);
        } else if (tabDF == 15 || tabDF == 30) {
          ablenkung(tabDF);
          tabDF += 2;
        } else if (tabDF == 36) {
          tabDF++;
          $("#df11").text(berechne(boardDF4.fen(), RecBoard3.fen()));
          $("#df12").text(berechne(boardDF3.fen(), RecBoard4.fen()));
          $("#df21").text(berechne(boardDF2.fen(), RecBoard1.fen()));
          $("#df22").text(berechne(boardDF1.fen(), RecBoard2.fen()));

          showTab(tabDF);
        } else {
          tabDF++;
          showTab(tabDF);
        }
      });
    }
  }

  //SEM-------------------------------------
  else {
    var tabSEM = 100;
    //showTab(tabSEM);

    var runde = 1;
    var durchgangS = 1;
    var durchgangNS = 1;

    $("#SEM .btn").click(function () {
      if (tabSEM == 100) {
        hideTab(100);
        if (subGroup == 0 || subGroup == 1) {
          tabSEM = 200;
          showTab(tabSEM);
        } else {
          tabSEM = 101;
          showTab(tabSEM);
        }
        showTab(tabSEM);
      } else if (tabSEM == 154) {
        hideTab(tabSEM);
        $("#p101 strong").empty();
        $("#p200 strong").empty();
        switch (subGroup) {
          case 0: //No Save - Save - No Save - Save
            if (runde == 2 || runde == 4) {
              tabSEM = 101;
              showTab(tabSEM);
            } else {
              tabSEM = 200;
              showTab(tabSEM);
            }
            break;

          case 1: //No Save - Save - Save - No Save
            if (runde == 2 || runde == 3) {
              tabSEM = 101;
              showTab(tabSEM);
            } else {
              tabSEM = 200;
              showTab(tabSEM);
            }
            break;

          case 2: //Save - NoSave - No Save - Save
            if (runde == 4) {
              tabSEM = 101;
              showTab(tabSEM);
            } else {
              tabSEM = 200;
              showTab(tabSEM);
            }
            break;

          default:
            //Save - No Save - Save - No Save
            if (runde == 3) {
              tabSEM = 101;
              showTab(tabSEM);
            } else {
              tabSEM = 200;
              showTab(tabSEM);
            }
            break;
        }
      } else if (tabSEM == 101 || tabSEM == 105 || tabSEM == 114) {
        if (tabSEM == 114) {
          hideTab(tabSEM);
          showSEM(101, durchgangS, 115);
          tabSEM = 115;
        } else {
          showPositionSEM(tabSEM, durchgangS);
          tabSEM += 3;
        }
      } else if (tabSEM == 109 || tabSEM == 207) {
        ablenkung(tabSEM);
        tabSEM += 2;
      } else if (tabSEM == 111 || tabSEM == 115) {
        hideTab(tabSEM);
        tabSEM += durchgangS;
        setTimeout(function () {
          showTab(tabSEM);
          timer = setTimeout(function () {
            hideTab(tabSEM);
            setTimeout(function () {
              if (tabSEM == 117 && runde == 4) {
                tabSEM = 155;
              } else if (durchgangS == 1) {
                tabSEM += 2;
              } else tabSEM++;
              showTab(tabSEM);
            }, 1000);
          }, 30000);
        }, 1000);
      } else if (tabSEM == 112 || tabSEM == 113) {
        clearTimeout(timer);
        hideTab(tabSEM);
        setTimeout(function () {
          tabSEM = 114;
          showTab(tabSEM);
        }, 1000);
      } else if (tabSEM == 116 || tabSEM == 117) {
        clearTimeout(timer);
        hideTab(tabSEM);
        setTimeout(function () {
          if (tabSEM == 117 && runde == 4) {
            tabSEM = 155;
          } else {
            tabSEM = 118;
          }
          showTab(tabSEM);
        }, 1000);
      } else if (tabSEM == 155) {
        if (subGroup == 0) {
          $("#d11").text(berechne(boardSEM2.fen(), RecBoardS2.fen()));
          $("#d12").text(berechne(boardSEM1.fen(), RecBoardS1.fen()));

          $("#d21").text(berechne(boardSEM6.fen(), RecBoardS6.fen()));
          $("#d22").text(berechne(boardSEM5.fen(), RecBoardS5.fen()));

          $("#d31").text(berechne(boardSEM4.fen(), RecBoardS4.fen()));
          $("#d32").text(berechne(boardSEM3.fen(), RecBoardS3.fen()));

          $("#d41").text(berechne(boardSEM8.fen(), RecBoardS8.fen()));
          $("#d42").text(berechne(boardSEM7.fen(), RecBoardS7.fen()));
        } else if (subGroup == 1) {
          $("#d11").text(berechne(boardSEM2.fen(), RecBoardS2.fen()));
          $("#d12").text(berechne(boardSEM1.fen(), RecBoardS1.fen()));

          $("#d21").text(berechne(boardSEM6.fen(), RecBoardS6.fen()));
          $("#d22").text(berechne(boardSEM5.fen(), RecBoardS5.fen()));

          $("#d31").text(berechne(boardSEM8.fen(), RecBoardS8.fen()));
          $("#d32").text(berechne(boardSEM7.fen(), RecBoardS7.fen()));

          $("#d41").text(berechne(boardSEM4.fen(), RecBoardS4.fen()));
          $("#d42").text(berechne(boardSEM3.fen(), RecBoardS3.fen()));
        } else if (subGroup == 2) {
          $("#d11").text(berechne(boardSEM6.fen(), RecBoardS6.fen()));
          $("#d12").text(berechne(boardSEM5.fen(), RecBoardS5.fen()));

          $("#d21").text(berechne(boardSEM2.fen(), RecBoardS2.fen()));
          $("#d22").text(berechne(boardSEM1.fen(), RecBoardS1.fen()));

          $("#d31").text(berechne(boardSEM4.fen(), RecBoardS4.fen()));
          $("#d32").text(berechne(boardSEM3.fen(), RecBoardS3.fen()));

          $("#d41").text(berechne(boardSEM8.fen(), RecBoardS8.fen()));
          $("#d42").text(berechne(boardSEM7.fen(), RecBoardS7.fen()));
        } else {
          $("#d11").text(berechne(boardSEM6.fen(), RecBoardS6.fen()));
          $("#d12").text(berechne(boardSEM5.fen(), RecBoardS5.fen()));

          $("#d21").text(berechne(boardSEM2.fen(), RecBoardS2.fen()));
          $("#d22").text(berechne(boardSEM1.fen(), RecBoardS1.fen()));

          $("#d31").text(berechne(boardSEM8.fen(), RecBoardS8.fen()));
          $("#d32").text(berechne(boardSEM7.fen(), RecBoardS7.fen()));

          $("#d41").text(berechne(boardSEM4.fen(), RecBoardS4.fen()));
          $("#d42").text(berechne(boardSEM3.fen(), RecBoardS3.fen()));
        }
        tabSEM++;
        showTab(tabSEM);
      } else if (tabSEM == 118) {
        durchgangS++;
        runde++;
        showNumbers(tabSEM, runde);
        tabSEM = 154;
      }

      // No Save
      else if (tabSEM == 210 || tabSEM == 211) {
        clearTimeout(timer);
        hideTab(tabSEM);
        setTimeout(function () {
          tabSEM = 212;
          showTab(tabSEM);
        }, 1000);
      } else if (tabSEM == 200 || tabSEM == 203) {
        showPositionSEM(tabSEM, durchgangNS);
        tabSEM += 3;
      } else if (tabSEM == 213 || tabSEM == 214) {
        clearTimeout(timer);
        hideTab(tabSEM);
        setTimeout(function () {
          if (tabSEM == 214 && runde == 4) {
            tabSEM = 155;
          } else {
            tabSEM = 215;
          }

          showTab(tabSEM);
        }, 1000);
      } else if (tabSEM == 209 || tabSEM == 212) {
        hideTab(tabSEM);

        tabSEM += durchgangNS;
        setTimeout(function () {
          showTab(tabSEM);
          timer = setTimeout(function () {
            hideTab(tabSEM);
            setTimeout(function () {
              if (tabSEM == 214 && runde == 4) {
                tabSEM = 155;
                showTab(tabSEM);
              } else if (durchgangNS == 1) {
                tabSEM += 2;
              } else tabSEM++;
              showTab(tabSEM);
            }, 1000);
          }, 30000);
        }, 1000);
      } else if (tabSEM == 215) {
        durchgangNS++;
        runde++;
        showNumbers(tabSEM, runde);
        tabSEM = 154;
      } else {
        tabSEM++;
        showTab(tabSEM);
      }
    });
  }

  function hideTab(n) {
    $("#p" + n).hide();
  }

  function showTab(n) {
    if (n == 1) {
      $("#p" + n).show();
    } else {
      var x = n - 1;
      $("#p" + x).hide();
      $("#p" + n).show();
    }
  }

  //Anzeige der zu merkenden Stellung incl. blanks
  function showPosition(tab) {
    hideTab(tab);
    tab++;
    setTimeout(function () {
      showTab(tab); //Stellung
      setTimeout(function () {
        hideTab(tab);
        tab++;
        setTimeout(function () {
          showTab(tab);
        }, 2000);
      }, 30000);
    }, 1000);
  }

  function showPositionSEM(tab, dg) {
    hideTab(tab);

    tab += dg;
    setTimeout(function () {
      showTab(tab); //Stellung
      setTimeout(function () {
        hideTab(tab);
        if (dg == 1) {
          tab += 2;
        } else tab++;
        setTimeout(function () {
          showTab(tab);
        }, 2000);
      }, 30000);
    }, 1000);
  }

  function showSEM(tab, dg, newTab) {
    hideTab(tab);

    tab += dg;
    setTimeout(function () {
      showTab(tab); //Stellung
      setTimeout(function () {
        hideTab(tab);
        setTimeout(function () {
          showTab(newTab);
        }, 2000);
      }, 3000);
    }, 1000);
  }

  function showNumbers(n, r) {
    hideTab(n);
    var t = 149 + r;
    showTab(t);
    setTimeout(function () {
      hideTab(t);
      $("#p154 p strong").text("Durchgang " + r);
      showTab(154);
    }, 60000);
  }

  function ablenkung(n) {
    n++;
    showTab(n);
    setTimeout(function () {
      n++;
      showTab(n);
    }, 30000);
  }

  function berechne(fen1, fen2) {
    var pos1 = ChessBoard.fenToObj(fen1);
    var pos2 = ChessBoard.fenToObj(fen2);
    var anzahl1 = Object.keys(pos1).length;
    var richtig = 0;
    var falsch = 0;

    for (var prop in pos2) {
      if (pos1.hasOwnProperty(prop)) {
        if (pos1[prop] === pos2[prop]) {
          richtig++;
        }
      } else falsch++;
    }

    return (
      richtig +
      " von " +
      anzahl1 +
      " richtig (" +
      Math.round((richtig / parseFloat(anzahl1)) * 100) +
      "%)"
    );
  }
});
