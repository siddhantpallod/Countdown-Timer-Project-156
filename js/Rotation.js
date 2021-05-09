//Diver rotation component
AFRAME.registerComponent("diver-rotation", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        this.data.speedOfRoation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var diverRotation = this.data.speedOfRoation;      
        var diverPosition = this.data.speedOfAscent;
  
        if (e.key === "ArrowDown") {
          if (diverPosition.z < 20) {
            diverPosition.z += 0.1;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverPosition.z> -40) {
            diverPosition.z -= 0.1;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if(e.key === 'ArrowLeft'){
          if(diverRotation.y < 360){
            diverRotation.y += 0.5
            this.el.setAttribute('rotation', diverRotation)
          }
          if(diverPosition.x > -20){
            diverPosition.x -= 0.05
            this.el.setAttribute('position', diverPosition)
          }
        }
        if(e.key === 'ArrowRight'){
          if (diverRotation.y > -360) {
            diverRotation.y -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.x < 20) {
            diverPosition.x += 0.05;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    }
  });