<?php

 interface Paylable{
    public function pay($amount);
 }
  class Employee implements Paylable {
    public $name;
    public function __construct($name){
        $this->name=$name;
    }
        public function pay($amount){
            return $this->name." pay ".$amount."dh";
        }

 }
$emp = new Employee("sarra");
echo $emp->pay(5000);