<?php
 class person {
    public $name;
    public $age;
     public function __construct($name,$age){
        $this->name=$name;
        $this->age=$age;
     }
     public function intreduce(){
        echo " je m'appel".$this->name. "et j'ai" .$this->age."ans";
     }
 }
 $prs=new person("sarra",20);
 echo $prs->intreduce();