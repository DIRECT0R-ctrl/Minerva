<?php

class Person
{
    protected $nom;
    public function __construct($nom)
    {
        $this->nom = $nom;
    }
    public function sayHello()
    {
        echo "Hello Sara";
    }
}
class student extends Person
{
    private $note;
    public function __construct($nom,$note){
        parent::__construct($nom);
        $this->note=$note;
    }
    public function getResult(){
        if($this->note>=10){
            echo"admis";
        }
        else{
            echo "Non admis";
        }

    }
}
