<?php
class BankAccount{
    public $balance = 0;

    public function deposit($amount){
    return $this->balance+=$amount;
    }
    public function withdraw($amount){
 if($this->balance>0){
    return $this->balance-=$amount;
 }
 else{
    echo"Insufficient balance";
 }
    }
}