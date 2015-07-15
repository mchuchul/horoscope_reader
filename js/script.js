$(function(){
  var birthday=0;
  
$('#submit').click(function(){
    var birthday = $('#birthday').val();
    console.log(birthday);
  if (birthday>1221 || birthday<0120){
  alert("Capricorn -- Determination, Dominance, Perservering, Practical, Willful");
} 
else if ((birthday>119) && (birthday<219)) {
  alert("Aquarius -- Knowledge, Humanitarian, Serious, Insightful, Duplicitous");
}
  else if ((birthday>218) && (birthday<321)) {
  alert("Pisces -- Fluctuation, Depth, Imagination, Reactive, Indecisive");
}
  else if ((birthday>320) && (birthday<420)) {
  alert("Aries -- Active, Demanding, Determined, Effective, Ambitious");
}
 else if ((birthday>419) && (birthday<521)) {
  alert("Taurus -- Security, Subtle strength, Appreciation, Instruction, Patience");
}
 else if ((birthday>520) && (birthday<621)) {
  alert("Gemini -- Communication, Indecision, Inquisitive, Intelligent, Changeable");
} 
  else if ((birthday>620) && (birthday<723)) {
  alert("Cancer -- Emotion, Diplomatic, Intensity, Impulsive, Selective");
} 
  else if ((birthday>722) && (birthday<823)) {
  alert("Leo -- Ruling, Warmth, Generosity, Faithful, Initiative");
} 
  else if ((birthday>822) && (birthday<923)) {
  alert("Virgo -- Analyzing, Practical, Reflective, Observation, Thoughtful");
} 
  else if ((birthday>922) && (birthday<1023)) {
  alert("Libra -- Balance, Justice, Truth, Beauty, Perfection");
  }
 else if ((birthday>1022) && (birthday<1122)) {
  alert("Scorpio -- Transient, Self-Willed, Purposeful, Unyielding");
 }
else if ((birthday>1121) && (birthday<1222)) {
  alert("Sagittarius -- Philosophical, Motion, Experimentation, Optimism");
} 
  
  });          
                     
});