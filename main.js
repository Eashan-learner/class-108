function idk3()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i6_PMGQpn/model.json",modelReady);
}
function modelReady(){
    console.log("sound projecct initiated");
    classifier.classify(gotResults);
}
function gotResults(error,results){
          console.log("got Results")
}