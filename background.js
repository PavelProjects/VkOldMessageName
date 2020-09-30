document.getElementsByClassName("left_label inl_bl")[2].innerHTML = "Сообщения";

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        try{
            if(document.title == "Мессенджер"){
                document.title = "Сообщения";
            }
        }catch(error){
            console.error(error);
        }
    });
});

var config = {childList: true, subtree : true }
observer.observe(document.getElementById("page_body"), config);