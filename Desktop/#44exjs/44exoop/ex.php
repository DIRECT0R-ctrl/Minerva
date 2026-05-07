<?php

// Créer une classe User qui :
// contient une propriété name
// contient une propriété statique count
// incrémente count à chaque nouvelle instance
class user {
 public $name;
 public static $count=0;
 public function __construct($name){
    $this->name=$name;
    self::$count++;
 }
}
$user=new user("sarra");
echo user::$count;