<?php
 class Car {
    public $brand;
    public $speed=0;
    public static $count=0;
    public function __construct($brand){
        $this->brand=$brand;
        self::$count++;
        
    }
    public function accelerate($amount){
        $this->speed+=$amount;
    }
    public function brake($amount){
        $this->speed-=$amount;
        if($this->speed<0){
            return $this->speed=0;
        }
    }
    public function getInfo(){
        return "hd tonobil smitha ".$this->brand."ktjri ".$this->speed. "km/h" ;
    }

 }
 $car1= new Car("bmw");
 $car1= new Car("mrcd");

  $car1->accelerate(50);
  $car1->brake(10);
  echo Car::$count;