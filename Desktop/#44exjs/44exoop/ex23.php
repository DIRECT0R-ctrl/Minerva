<?php
abstract class animal{
    protected  $name;
    protected $son;
    public function __construct($name,$son){
        $this->name=$name;
        $this->son=$son;
    }
    public function getName(){
        return $this->name;
    }
public function setName($name){
    $this->name=$name;
}

}
class chat extends animal implements sarra{
    public static $chiahaja;
    public function __construct($chiahaja,$name,$son){
        parent::__construct($name,$son);
        self::$chiahaja=$chiahaja;
    }
    public function myaw(){
        return "sarra";
    }
}
interface sarra{
    public function myaw();
}

$anml1=new chat("ss","chihaja","myaw");
echo $anml1->myaw();
echo chat::$chiahaja;