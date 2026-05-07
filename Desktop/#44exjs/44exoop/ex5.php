  <?php
class Car{
    private $brand;
    private $vitesse=0;
    public static $count=0;

    public function __construct($brand){
        $this->brand=$brand;
        $this->vitesse=0;
         self::$count++;    }
     public function accelerat($amount){
        $this->vitesse+=$amount;
     }
     public function brake($amount ){
        $this->vitesse-=$amount;
     
     if($this->vitesse<0){
        return $this->vitesse=0;
     }
}

}
$car1 = new Car("BMW");
$car2 = new Car("Audi");
$car3 = new Car("Mercedes");

$car1->accelerat(50);
$car2->accelerat(30);
$car3->accelerat(80);
  