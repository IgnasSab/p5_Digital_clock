let width = 800
let height = 800
let whiteLine1 = 190
let whiteLine2 = 206
let h_Par = 450
let min_Par = 475
let sec_Par = 500
let hLine_Par = 125
let minLine_Par = 150
let secLine_Par = 175
let circle_Radius = 8
let frame_Radius = 257
function setup() 
{
 createCanvas(width, height)
 
 angleMode(DEGREES)

}

function draw() 
{
  background(100)
  translate(width/2, height/2)
  rotate(-90)

  h = hour()
  min = minute()
  sec = second()

  let h_map = map(h % 12, 0, 12, 0, 360)
  let min_map = map(min, 0, 60, 0, 360)
  let sec_map = map(sec, 0, 60, 0, 360)
  

  noFill()

 //Hours
  strokeWeight(6)
  stroke(255, 255, 0)
  arc(0, 0, h_Par, h_Par, 0, h_map+min_map/12)
  push()
  rotate(h_map+min_map/12)
  stroke(255,255,50)
  line(0, 0, hLine_Par, 0)
  pop()

  //Minutes:
  strokeWeight(7)
  stroke(100,255,100)
  arc(0, 0, min_Par, min_Par, 0, min_map)
  push()
  rotate(min_map)
  stroke(100,255,150)
  line(0, 0, minLine_Par, 0)
  pop()
  
  //Seconds: 
  strokeWeight(8)
  stroke(255, 0, 255)
  arc(0, 0, sec_Par, sec_Par, 0, sec_map)
  push()
  rotate(sec_map)
  stroke(255,50,255)
  line(0, 0, secLine_Par, 0)
  pop()

  fill(255)
  noStroke()
  circle(0, 0, circle_Radius*2)

  //Lines:
  lines()
  
  //Frame:
  frame()
  
}
function lines()
{
  strokeWeight(5)
  stroke(255)

  for(i = 0; i <= 360; i=i+30)
  {
    lineX = whiteLine1*cos(i) 
    lineY = whiteLine1*sin(i)
    lineX2 = whiteLine2*cos(i)
    lineY2 = whiteLine2*sin(i)
    line(lineX, lineY, lineX2, lineY2)
  }
}
function frame()
{
  noFill()
  strokeWeight(1)
  stroke(0)
  arc(0, 0, frame_Radius*2, frame_Radius*2, 0, 360)
}