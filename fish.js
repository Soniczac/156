AFRAME.regesterComponent("fish", {
    innit: function () {
        for (var i = 1; i <= 10; i++ ) {
            const id = `fish$(i)`;

            const element = document.querySelector(elemntID);
            element.addEventListener("collide", e => {
                if (elementId.inculdes("#coin")) {
                    element.setAttribute("visible", false);
                    console.log("ring collision");


                }
                if(elementId.inculdes("#fish")){
                    console.log("fish collision");
                }
            });
            
        }
    }
})