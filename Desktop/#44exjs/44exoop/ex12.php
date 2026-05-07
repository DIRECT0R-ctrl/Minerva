<?php
abstract class Shap{
    abstract public function aria();
}
class cercle extends Shap{
    private $r;
    public function __construct($r){
        $this->r=$r;

    }
    public function aria(){
   return 3.14 * $this->r * $this->r;
}}
class rectangles extends Shap{
    public function __construct($largeur,$hauteur)
    {
        $this->largeur=$largeur;
        $this->hauteur=$hauteur;
    }
    private $largeur;
    private $hauteur;
    public function aria(){
        return $this->largeur * $this->hauteur ; 
    }


}
// $cercle=new cercle(5);
// echo $cercle->aria();