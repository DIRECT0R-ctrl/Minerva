<?php
class Rectangle {
    private $width;
    private $height;
     public function __construct($width,$height)
     {
    $this->width=$width;
    $this->height=$height;
     }
     public function getWidth(){
        return $this->width;
     }
      public function getHeight(){
        return $this->height;
     }
     public function setWidth($width){
         $this->width=$width;
     }
     public function setHeight($height){
         $this->height=$height;
     }
     public function area(){
        return $this->width* $this->height;

     }
     public function perimeter(){
        return 2*($this->width + $this->height);

     }
}