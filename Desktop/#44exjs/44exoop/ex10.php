<?php
class Student
{
    private $name;
    private $grades;
    public function __construct($name, $grades)
    {
        $this->name = $name;
        $this->grades = [];
    }
    public function addGrade($grades)
    {
        $this->grades[] = $grades;
    }
    public function average()
    {
        $sum = array_sum($this->grades);
        $count = count($this->grades);
        return $sum / $count;
    }
}
$student1=new Student ("sarra",10);
 


$student1->addGrade(15);
$student1->addGrade(12);
$student1->addGrade(16);
$student1->addGrade(10);

echo $student1->average();