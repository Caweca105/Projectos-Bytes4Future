<?php
  function generateStory($singluar_noun, $verb, $color, $distance_unit)
  {
    $story = "\nThe $singluar_noun are lovely, $color, and deep.\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd $distance_unit to go before I $verb.\n";
    return $story;
  }

  echo generateStory("dog", "eat", "purple", "kilometers");
  echo generateStory("car", "cook", "vermilion", "kilometers");
  echo generateStory("empty void", "speak", "beige", "kilometers");