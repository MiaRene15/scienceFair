
  var transition = document.getElementById("transition") // THE ENTIRE CODE OF THE TRANSITION PAGE
  var sim = document.getElementById("sim") // THE ENTIRE CODE OF THE SIMULATION 
  // var end = document.getElementById("end") // THE END SCENE 
  var audio_despondency = new Audio('audio/gratitudeSpace.mp3'); // AUDIO FOR DESPONDENCY 
  var audio_anxiousness = new Audio('audio/tension_releaseSpace.mp3'); // AUDIO FOR ANXIOUSNESS
  var audio_overwhelmed = new Audio('audio/deep_breathingSpace.mp3'); // AUDIO FOR OVERHWHELMED
  var audio_stress = new Audio('audio/self_loveSpace.mp3'); // AUDIO FOR STRESS

  function start() { // this is the body of that is executed when the user clicks the "Start Now" button 
    
    sim.style.display = "block" // SIMULATION APPEARS
    transition.style.display = "none" // TRANSITION PAGE DISAPPEARS 
    
    if ( what_sim == "despondency") { // IF THE SIMULATION IS THE DESPONDENCY 
      audio_despondency.play(); // PLAY DESPONDENCY AUDIO 
      setTimeout(alertFunc, 3000);
      
    } else if (what_sim == "anxiousness") { // IF THE SIMULATION IS ANXIOUSNESS 
      audio_anxiousness.play(); // PLAY ANXIOUSNESS AUDIO
    
      
    } else if (what_sim == "overwhelmed") { // IF THE SIMULATION IS OVERHWHELMED 
      audio_overwhelmed.play(); // PLAY OVERHWHELMED AUDIO
   
   
    } else if (what_sim == "stress") { // IF THE SIMULATION IS STRESS 
      audio_stress.play(); //PLAY STRESS AUDIO 
    
      
    } else { // IF IT'S NOT ANY OF THOSE THINGS 
              // DO NOTHING
    }
  }

function alertFunc() {
  end.style.display = "block"
}
