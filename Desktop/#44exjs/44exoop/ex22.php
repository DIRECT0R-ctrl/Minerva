<?php
interface  Payable{
public function pay($amount);
}

class Employee implements Payable {
    private $nom;
    public function __construct($nom)
    {
        $this->nom = $nom;
    }
    public function pay($amount){
        echo $this->nom." pay " .$amount. " dh";
    }


}