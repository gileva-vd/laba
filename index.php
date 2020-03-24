<?php

class Censor 
{
   private const CENSOR_TAG = '[censored]';

   private $text;

   private $regularExpressionsArray = [
      '/((\+?7|8)[\-]?)?((\(\d{3}\))|(\d{3}))?([\-])?(\d{3}[\-]?\d{2}[\-]?\d{2})/',
      '/[0-9]{1,3},[0-9]*/',
   ];

   function __construct(string $text) 
   {
      $this->text = $text;
      $this->setCensorText();
   }

   /**
    * Цензурирование текста
    */
   public function setCensorText() 
   {
      $this->text = preg_replace($this->regularExpressionsArray, self::CENSOR_TAG, $this->text);
   }

   public function getText(): string 
   {
      return $this->text;
   }

   public function setText(string $content) 
   {
      $this->text = $content;
   }

}

$censor = new Censor('55,755831°, 37,617673° Иванов Иван Иванович На картах поисковых систем по умолчанию показываются координаты в градусах +79143745238');
echo $censor->getText();