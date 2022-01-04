using System;

namespace MadLibs
{
  class Program
  {
    static void Main(string[] args)
    {
      /*
      This program will create a few short and diverse stories.
      Author: Diogo Lemos
      */


      // Let the user know that the program is starting:
      Console.WriteLine("Mad Libs is starting!");

      // Give the Mad Lib a title:
      string title = "The story of the brave baldy";

      Console.WriteLine(title);
      // Define user input and variables:
      Console.Write("Enter a name: ");
      string name = Console.ReadLine();

      Console.Write("Enter a color: ");
      string color = Console.ReadLine();

      Console.Write("Enter a feeling: ");
      string feeling = Console.ReadLine();

      Console.Write("Enter a texture: ");
      string texture = Console.ReadLine();

      Console.Write("Enter a verb: ");
      string verb = Console.ReadLine();

      Console.Write("Enter an animal: ");
      string animal = Console.ReadLine();

      Console.Write("Enter a food: ");
      string food = Console.ReadLine();

      Console.Write("Enter a fruit: ");
      string fruit = Console.ReadLine();

      Console.Write("Enter a superhero: ");
      string superhero = Console.ReadLine();

      Console.Write("Enter a country: ");
      string country = Console.ReadLine();

      Console.Write("Enter a dessert: ");
      string dessert = Console.ReadLine();

      Console.Write("Enter a year: ");
      string year = Console.ReadLine();

      Console.Write("Enter a adjective: ");
      string adjective1 = Console.ReadLine();

      Console.Write("Enter a adjective: ");
      string adjective2 = Console.ReadLine();

      Console.Write("Enter a adjective: ");
      string adjective3 = Console.ReadLine();

      // The template for the story:

      string story = $"This morning {name} woke up feeling {adjective1}. 'It is going to be a {adjective2} day!' Outside, a bunch of {animal}s were protesting to keep {food} in stores. They began to {verb} to the rhythm of the {noun1}, which made all the {fruit}s very {adjective3}. Concerned, {name} texted {superhero}, who flew {name} to {country} and dropped {name} in a puddle of frozen {dessert}. {name} woke up in the year {year}, in a world where {noun2}s ruled the world.";


      // Print the story:
    Console.WriteLine(story);
    }
  }
}
