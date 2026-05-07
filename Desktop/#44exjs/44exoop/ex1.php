<?php
class Person {
    private $nom;
    private $age;
    public function __construct($nom,$age){
        $this->nom=$nom;
        $this->age=$age;
    
    }
    public function getName(){
         return $this->nom;
    }
    public function setName($nom){
        $this->nom=$nom;
    }
    public function getAge(){
            return $this->age;
    }
    public function setAge($age){
        $this->age=$age;
    }
    

    public function ntroduce(){

        echo "e m'appelle" .$this->nom . "et j'ai" .$this->age. "ans";

    }
}
