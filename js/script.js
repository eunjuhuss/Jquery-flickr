
    $(document).ready(function () {
   
        var flickerAPI = "http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback=?";

        $.getJSON(flickerAPI, function (data) {

            $.each(data.items, function (index, item) {

                var image = $("<img/>").attr("src", item.media.m).attr("id", index);
                var takenDate = $("<p>").text(item.title.substring(0, 20) + " / " + item.date_taken.substring(0, 10));
                takenDate.addClass("title");
                console.log(data);
                var div = $("<div>");
                div.addClass("flexbox");
                div.append(takenDate);
                div.append(image);
                $("#displayPicturs").append(div);

            });

            $(".flexbox img").on('click', function (event) {
               
                 var selectidPicture = data.items[event.target.id];
                 var image = $("<img/>").attr("src", selectidPicture.media.m);
                $("#dialogPicturs").append(image);             
                $("#dialogPicturs img").dialog({
                    title: event.target.src,
                    width: 550,
                    height: 500,
                    modal: true,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    }
                });
            });

            $("#btn_flexbox").on('click', function () {
                event.preventDefault();

                if ($(".flexbox").hasClass("flexbox")) {
                    $(".flexbox").removeClass("flexbox").addClass("float");
                    $("#btn_flexbox").text("show float");

                } else {
                    $(".float").removeClass("float").addClass("flexbox");
                    $("#btn_flexbox").text("show flex");

                };

            });

        });

        $("#btn_search").on('click', function (event) {
            event.preventDefault();
            var searchPicturs = $(".input_serch").val();
            $("#displayPicturs").empty();
            $("#searchPicturs").empty();
            $.getJSON(flickerAPI, {
                    tags: searchPicturs,
                    tagmode: "any",
                    format: "json"
                },

                function (data) {
                    $.each(data.items, function (index, item) {
                        var div = $("<div>");
                        var takenDate = $("<p>").text(item.title.substring(0, 20) + " / " + item.date_taken.substring(0, 10));
                        takenDate.addClass("title");
                        div.append(takenDate);
                        $("<img/>").attr("src", item.media.m).attr("id", index).appendTo(div);
                        div.addClass("flexbox");
                        $("#searchPicturs").append(div);
                    });
              
                    $(".flexbox img").on('click', function (event) {
                       // event.target.id - which index in list, clicked?
                      
                       var selectidPicture = data.items[event.target.id];
                      
        
                        var image = $("<img/>").attr("src", selectidPicture.media.m);
                        $("#dialogPicturs").append(image);
                       
                            
                        $("#dialogPicturs img").dialog({
                            title: event.target.src,
                            width: 550,
                            height: 500,
                            modal: true,
                            buttons: {
                                Close: function () {
                                    $(this).dialog('close');
                                }
                            }
                            
        
                        });
        
                    });
                });


        });

    });