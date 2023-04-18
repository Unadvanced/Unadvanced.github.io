/*$(function() {
    console.log("Script imported")
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction Page",
            "alt": "Introduction Link"
        },
        "3": {
            "url": "forms.html",
            "text": "Forms Page",
            "alt": "Forms Link"
        },
        "4": {
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Simple and Complex Table Demonstration"
        }
    };

    const linkSeperator = " || ";
    let htmlString = "";

    for (var id in links) {
        if(pathname === links[id]['url']) {
            htmlString += links[id]['text'];
            console.log("first if");
        }
        else{
            htmlString =+ '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
            console.log("Else from first if");
        }
        console.log(Number(id));
        console.log(Object.keys(links).length);
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
            console.log("second if");
        }
    }
    $('#sitelinks').html(htmlString);
    console.log("yes!");
});*/

$(function () {
    const pathname = String(location.pathname.split("/").splice(-1))
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Home Page"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Introduction Page"
        },
        "3": {
            "url": "tables.html",
            "text": "Tables",
            "alt": "Tables Page"
        },
        "4": {
            "url": "website_evaluations.html",
            "text": "Website Evaluation",
            "alt": "Website Evaluation Page"
        },
        
        "5": {
            "url": "first_scripts.html",
            "text": "Scripts",
            "alt": "Scripts Page"
        },

        "6": {
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract Page"
        },
        "7": {
            "url": "forms.html",
            "text": "Forms",
            "alt": "Forms Page"
        },




        "8": {
            "url": "calculator_try.html",
            "text": "Calculator Try",
            "alt": "Calculator Page"
        },
        "9": {
            "url": "calculator_fcc.html",
            "text": "Calculator FCC",
            "alt": "Calculator Page"
        },
        
        "10": {
            "url": "arrays.html",
            "text": "Arrays",
            "alt": "Arrays Page"
        },
        "11": {
            "url": "polygons.html",
            "text": "Polygons",
            "alt": "Polygons Page"
        },
        "12": {
            "url": "slideshow.html",
            "text": "Slideshow",
            "alt": "Slideshow Page"
        },
        "13": {
            "url": "project_design.html",
            "text": "Project Design",
            "alt": "Project Design Page"
        },
        "14": {
            "url": "peer_review1.html",
            "text": "Peer Review 1",
            "alt": "Peer Review Page"
        },
        "15": {
            "url": "peer_review2.html",
            "text": "Peer Review 2",
            "alt": "Peer Review Page"
        },
        
       
    };


    const linkSeperator = " | ";
    let htmlString = "";

    for (var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];

        }
        else {
            htmlString += '<a href=" ' + links[id]['url'] + '">' + links[id]['text'] + '<a/>';
        }
        if (Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        }

    }
    $("#siteLinks").html(htmlString);
    console.log("bing!");
})


