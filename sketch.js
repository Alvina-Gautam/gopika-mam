const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boyObject;

function preload() {
  backgroundImg = loadImage("winter.jpg");
}

function setup() {
  createCanvas(1200,700);
  createSprite(600, 580, 50, 120);

  boyObject = new Boy (600, 580, 50, 120);
}

function draw() {
  background(0,0,0);
  background(backgroundImg);
  
  drawSprites();
}