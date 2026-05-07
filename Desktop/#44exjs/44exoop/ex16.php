<?php

abstract class Employee
{
    protected  $name;
    public function __construct($name)
    {
        $this->name = $name;
    }
    public function getName()
    {
        return $this->name;
    }
    abstract public function Calculerslairy();
}
class fullem  extends Employee
{
    public $salaire;
    public function __construct($salaire, $name)
    {
        parent::__construct($name);
        $this->salaire = $salaire;
    }
    public function Calculerslairy()
    {
        return $this->salaire;
    }
}
$emp = new fullem("sarra", 6000);

echo $emp->getName();
echo $emp->Calculerslairy();
