/*global bootbox*/
$(document).ready(function(){
    //REFERENCING THE ARTICLE CONTAINER DIV THAT ARTICLES WILL BE RENDERED INSIDE OF
    var articleContainer = $(".article-container");
    //ADD EVENT LISTENERS FOR DYNAMICALLY GENERATED BUTTONS FOR DELETING ARTICLES, VIEWING ARTICLE NOTES, SAVING ARTICLE NOTES, AND DELETING ARTICLE NOTES
    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticleNotes);
    $(document).on("click", ".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);

    //STARTS THINGS WHEN PAGE IS LOADED
    initPage();

    function initPage() {
        //EMPTY THE ARTICLE CONTAINER, RUN AN AJAX REQUEST FOR ANY SAVED HEADLINES
        $(".article-container").empty();
        $.get("/api/headlines?saved=true").then(function(data){
            //IF WE HAVE HEADLINES, RENDER THEM TO THE PAGE
            if (data && data.length) {
                renderArticles(data);
            } else {
                //OTHERWISE RENDER A MESSAGE STATING THERE ARE NO ARTICLES
                renderEmpty();
            }
        });
    }

    function renderArticles(articles) {
        //THIS FUNCTION HANDLES APPENDING HTML CONTAINING ARTICLE DATA TO THE PAGE; PASSED AN ARRAY OF JSON CONTAINING ALL AVAILABLE ARTICLES IN OUR DB
        var articlePanels = [];
        //PASS EACH ARTICLE JSON OBJECT TO THE CREATEPANEL FUNCTION WHICH RETURNS A BOOTSTRAP PANEL WITH ARTICLE DATA INSIDE
        for (var i = 0; i < articles.length; i++) {
            articlePanels.push(createPanel(articles[i]));
        }
        //ONCE ALL OF THE HTML FOR THE ARTICLES STORED IN THE ARTICLEPANELS ARRAY, APPEND TO THE ARTICLEPANELS CONTAINER
        $(".article-container").append(articlePanels);
    }
    
    function createPanel(article) {
        //THIS FUNCTION TAKES IN A SINGLE JSON OBJECT FOR AN ARTICLE/HEADLINE AND CONSTRUCTS A JQUERY ELEMENT CONTAINING ALL OF THE FORMATTED HTML FOR THE ARTICLE PANEL
        var panel =
            $(["div class='panel panel-default'>",
            "<div class='panel-heading'>",
            "<h3>",
            aarticle.headline,
            "<a class='btn btn-danger delete'>",
            "Delete From Saved",
            "</a>",
            "<a class='btn btn-info notes'>Article Notes</a>",
            "</h3>",
            "</div>",

        ])
    }
})