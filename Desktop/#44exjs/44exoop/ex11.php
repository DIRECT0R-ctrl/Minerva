<?php

class Animal
{
    public  $name;
    public $sound;
    public function __construct($name, $sound)
    {
        $this->name = $name;
        $this->sound = $sound;
    }
   public function makeSound(){
    echo "le ".$this->name. " dit ".$this->sound.".";
   }
   
}
// $animal1=new Animal("bobi","how");
//  echo $animal1->makeSound();

class Cat extends Animal{
 public function __construct($name){
    parent::__construct($name, "myaw");
 }
}
class Dog extends Animal {
 public function __construct($name){
    parent::__construct($name, "how");

 }
 public function makeSound()
 {
 parent::makeSound();
    echo "kyhrk dayl dylo ";
 
 }
}
$cat= new Cat("cat");
$dog= new Dog ("dog");
echo $cat->makeSound();
echo $dog->makeSound();
